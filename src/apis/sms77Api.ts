import {SMS_CONTENT, SMS_FROM_TEXT} from "../smsConstants";
import {SmsParams} from "sms77-client/dist/types/sms";
import {env} from "../environment";

globalThis.fetch = require('node-fetch').default;
const Sms77Client = require('sms77-client');

export function sendSmsViaSms77(phoneNumber: string): void {
    new Sms77Client(env("SMS77_API_KEY"))
        .sms(createParams(phoneNumber))
        .then(() => console.log(`success`))
        .catch(console.error);
}

function createParams(phoneNumber: string):SmsParams {
    return {
        from: SMS_FROM_TEXT,
        to: phoneNumber,
        text: SMS_CONTENT
    }
}

