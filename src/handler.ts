import {getPhoneNumber} from "./apis/cellphoneApi";
import {sendSmsViaRapid} from "./apis/rapidApi";
import {sendSmsViaTwilio} from "./apis/twilioApi";


getPhoneNumber()
    .then(phoneNumber => sendSmsViaRapid(phoneNumber))
    .catch(err => console.log(err));

/*
getPhoneNumber()
    .then(phoneNumber => sendSmsViaTwilio(phoneNumber))
    .catch(err => console.log(err));
*/



