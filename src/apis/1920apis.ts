import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {env} from "../environment";

export async function getPhoneNumber(): Promise<string> {
    const axiosConfig: AxiosRequestConfig = {
        timeout: 5000
    }
    const request: AxiosResponse = await axios.get('https://api.1920.in/', axiosConfig);
    const phoneNumber: string = request.data;
    return phoneNumber;
}

export async function getEmailAddresses(): Promise<string[]> {
    const request: AxiosResponse = await axios.get('https://mail.1920.in/email', getHeader());
    const phoneNumber: string[] = request.data;
    return phoneNumber;
}

function getHeader() : AxiosRequestConfig {
    return {
        headers: {
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7',
            'cookie': 'cf_clearance=Vk6gbY0HyoOm_QVDn7_ieuMp9.MogIk68ERRzpvJUR0-1647467423-0-150',
            'if-modified-since': 'Tue, 15 Mar 2022 13:22:02 GMT',
            'referer': 'https://1920.in/',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': "macOS",
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'same-site',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
        }
    }
}