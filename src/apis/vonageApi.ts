import {SMS_CONTENT, SMS_FROM_TEXT} from "../smsConstants";

const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
    apiKey: "80230bef",
    apiSecret: "msmzYJ3CEsAerlaD"
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

