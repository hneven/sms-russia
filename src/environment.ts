
export function setEnvironment() : void {
    require('dotenv').config();
}

export function env(key: string): string {
    return process.env[key];
}