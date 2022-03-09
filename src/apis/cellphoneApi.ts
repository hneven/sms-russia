import axios, {AxiosResponse} from "axios";

export async function getPhoneNumber(): Promise<string> {
    const request: AxiosResponse = await axios.get('https://api.1920.in/');
    const phoneNumber: string = request.data;
    return phoneNumber;
}