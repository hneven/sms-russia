import {SMS_CONTENT, SMS_FROM_TEXT} from "../smsConstants";
import {env} from "../environment";

const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
    apiKey: env("VONAGE_API_KEY"),
    apiSecret: env("VONAGE_API_SECRET")
})

export function sendSmsViaVonage(phoneNumber: string): void {
    vonage.message.sendSms(SMS_FROM_TEXT, phoneNumber, SMS_CONTENT, (err, responseData) => {
        if (err) {
            console.log(err);
        } else {
            if(responseData.messages[0]['status'] === "0") {
                console.log("Message sent successfully.");
            } else {
                console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
            }
        }
    })
}

