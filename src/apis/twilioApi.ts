import {SMS_CONTENT} from "../smsConstants";
import {env} from "../environment";

const twilio = require('twilio');

export function sendSmsViaTwilio(phoneNumber: string) : void {
    const client = new twilio(env("TWILIO_ACCOUNT_SID"), env("TWILIO_AUTH_TOKEN"));
    client.messages
        .create({
            body: SMS_CONTENT,
            to: `+${phoneNumber}`,
            from: '+12345678901', // From a valid Twilio number
        })
        .then((message) => console.log(message.sid));
}