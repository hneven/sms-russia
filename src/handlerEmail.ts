import {getEmailAddresses} from "./apis/mailApi";
import {setEnvironment} from "./environment";

setEnvironment();

getEmailAddresses()
    .then(emails => console.log(emails))
    .catch(err => console.log(err))

