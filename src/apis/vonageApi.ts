import {env} from "../environment";

const Vonage = require('@vonage/server-sdk')

export function sendSmsViaVonage(phoneNumber: string): void {
    const vonage = new Vonage({
        apiKey: env("VONAGE_API_KEY"),
        apiSecret: env("VONAGE_API_SECRET")
    })
    vonage.message.sendSms(
        env("SMS_FROM_TEXT"),
        phoneNumber, env("SMS_CONTENT"),
        {
            type: "unicode"
        },
        (err, responseData) => {
            if (err) {
                console.log(err);
            } else {
                if (responseData.messages[0]['status'] === "0") {
                    console.log("Message sent successfully.");
                } else {
                    console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
                }
            }
        })
}

