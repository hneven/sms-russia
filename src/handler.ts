import {getPhoneNumber} from "./apis/cellphoneApi";
import {sendSmsViaRapid} from "./apis/rapidApi";
import {sendSmsViaTwilio} from "./apis/twilioApi";
import {sendSmsViaVonage} from "./apis/vonageApi";

/*
getPhoneNumber()
    .then(phoneNumber => sendSmsViaRapid(phoneNumber))
    .catch(err => console.log(err));


getPhoneNumber()
    .then(phoneNumber => sendSmsViaTwilio(phoneNumber))
    .catch(err => console.log(err));
*/


getPhoneNumber()
    .then(phoneNumber => sendSmsViaVonage(phoneNumber))
    .catch(err => console.log(err));
