import {getPhoneNumber} from "./apis/1920apis";
import {sendSmsViaTwilio} from "./apis/twilioApi";
import {setEnvironment} from "./environment";
import {sendSmsViaVonage} from "./apis/vonageApi";

async function run() {
    for (let i = 0; i < 100; i++) {
        let phoneNumber: string = "";
        try {
             phoneNumber = await getPhoneNumber();
        }
        catch (error) {
            console.log("ERROR: Cannot retrieve a phone number");
        }
        try {
            await sendSmsViaVonage(phoneNumber);
        }
        catch (error) {
            console.log("ERROR: Cannot send SMS");
        }

        const delay: number = 1000+Math.random()*100
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}

setEnvironment();
run().then(() => {}).catch(err => console.log(err))