import axios, {AxiosRequestConfig} from "axios";
import {SMS_CONTENT, SMS_FROM_TEXT} from "../smsConstants";
import {env} from "../environment";

export function sendSmsViaRapid(phoneNumber: string): void {
    const options: AxiosRequestConfig = {
    method: 'POST',
    url: 'https://d7sms.p.rapidapi.com/secure/send',
    headers: {
        'content-type': 'application/json',
        authorization: 'Basic ' + env("D7NETWORKS_API_KEY"),
        'x-rapidapi-host': 'd7sms.p.rapidapi.com',
        'x-rapidapi-key': env("RAPID_API_KEY")
    },
    data: createData(phoneNumber)
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

function createData(phoneNumber: string) : string {
    const data = {
        "to": phoneNumber,
        "content": SMS_CONTENT,
        "from": SMS_FROM_TEXT,
        "dlr": "yes",
        "dlr-method": "GET",
        "dlr-level": "2",
        "dlr-url": "https://exampple.com"
    }
    return JSON.stringify(data);
}