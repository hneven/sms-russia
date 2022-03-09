import {SMS_CONTENT} from "../smsConstants";

const accountSid = 'ACadc382e8dc69aa462def7777eb0664da'; // Your Account SID from www.twilio.com/console
const authToken = '641f8a39b91f1ddd84a93ba2b746438c'; // Your Auth Token from www.twilio.com/console

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

export function sendSmsViaTwilio(phoneNumber: string) : void {
    client.messages
        .create({
            body: SMS_CONTENT,
            to: `+${phoneNumber}`,
            from: '+12345678901', // From a valid Twilio number
        })
        .then((message) => console.log(message.sid));
}