import {getPhoneNumber} from "./apis/cellphoneApi";
import {sendSmsViaRapid} from "./apis/rapidApi";
import {sendSmsViaTwilio} from "./apis/twilioApi";
import {sendSmsViaVonage} from "./apis/vonageApi";
import {sendSmsViaSms77} from "./apis/sms77Api";
import {getEmailAddresses} from "./apis/mailApi";
import {createEnvironment} from "./environment";

/*
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
*/

const error = createEnvironment().then(response => {
    console.log(process.env.SENDGRID_API_KEY);
});


/*
getEmailAddresses()
    .then(emails => console.log(emails))
    .catch(err => console.log(err))
*/
