import {getPhoneNumber} from "./apis/cellphoneApi";
import {sendSmsViaRapid} from "./apis/rapidApi";


getPhoneNumber()
    .then(phoneNumber => sendSmsViaRapid(phoneNumber))
    .catch(err => console.log(err));




