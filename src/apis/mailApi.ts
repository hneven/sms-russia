import axios, {AxiosResponse} from "axios";

export async function getEmailAddresses(): Promise<string[]> {
    const request: AxiosResponse = await axios.get('https://mail.1920.in/email', getHeader());
    const phoneNumber: string[] = request.data;
    return phoneNumber;
}

function getHeader() : any {
    return {
        headers: {
            'cookie': 'cf_clearance=fwWbFXOZUi8I40jqPCTM0jHt6MyGDsZyyfdXgKgL82A-1646995547-0-150',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': "macOS",
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
        }
    }
}