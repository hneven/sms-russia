import {getPhoneNumber} from "./apis/cellphoneApi";
import {sendSmsViaRapid} from "./apis/rapidApi";
import {sendSmsViaTwilio} from "./apis/twilioApi";
import {sendSmsViaVonage} from "./apis/vonageApi";
import {sendSmsViaSms77} from "./apis/sms77Api";

for (let i = 0; i < 10; i++) {

    getPhoneNumber()
        .then(phoneNumber => sendSmsViaRapid(phoneNumber))
        .catch(err => console.log(err));


    getPhoneNumber()
        .then(phoneNumber => sendSmsViaTwilio(phoneNumber))
        .catch(err => console.log(err));

    getPhoneNumber()
        .then(phoneNumber => sendSmsViaVonage(phoneNumber))
        .catch(err => console.log(err));

    getPhoneNumber()
        .then(phoneNumber => sendSmsViaSms77(phoneNumber))
        .catch(err => console.log(err));
}
