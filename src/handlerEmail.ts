import {getEmailAddresses} from "./apis/1920apis";
import {setEnvironment} from "./environment";

setEnvironment();

getEmailAddresses()
    .then(emails => console.log(emails))
    .catch(err => console.log(err))

