import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

getPhoneNumber().then(phoneNumber => {
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
    /*
    const options = {
        method: 'POST',
        url: 'https://rest-api.d7networks.com/secure/send',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ZnRleTMxMjg6Q2xmYzdKYXM='
        },
        data: createData(phoneNumber)
    };

     */
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}).catch(err => console.log(err));


function createData(phoneNumber: string) : string {
    const data = {
        "to": phoneNumber,
        "content": "На Украине погибло больше сынов Русского Народа, чем в Афганистане! Война Путина уничтожит Россию! Топлива нет, денег в банках нет. Путин уничтожает Россию! Кремль лжет!",
        "from": "друг",
        "dlr": "yes",
        "dlr-method": "GET",
        "dlr-level": "2",
        "dlr-url": "https://exampple.com"
    }
    return JSON.stringify(data);
}

async function getPhoneNumber(): Promise<string> {
    const request: AxiosResponse = await axios.get('https://api.1920.in/');
    const phoneNumber: string = request.data;
    return phoneNumber;
}
