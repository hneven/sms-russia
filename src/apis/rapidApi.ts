import axios, {AxiosRequestConfig} from "axios";
import {SMS_CONTENT, SMS_FROM_TEXT} from "../smsConstants";

export function sendSmsViaRapid(phoneNumber: string): void {
    const options: AxiosRequestConfig = {
    method: 'POST',
    url: 'https://d7sms.p.rapidapi.com/secure/send',
    headers: {
        'content-type': 'application/json',
        authorization: 'Basic ZnRleTMxMjg6Q2xmYzdKYXM=',
        'x-rapidapi-host': 'd7sms.p.rapidapi.com',
        'x-rapidapi-key': 'd0c6fef356msh99d4b9b34fab262p177891jsn4d9e16e9fc35'
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