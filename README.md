# Informed Russia Campaign

A tool to send SMS in bulk to random Russian cellphone numbers.

A service implemented by squad303 (https://1920.in) provides an API
with random russian cellphones numbers which can be used with a professional
SMS service to get in touch with the Russian people.

## Frameworks used and need to be installed

- NodeJS 17.6.0
- NPM 8.5.1

## Installation
Execute the following command to install all needed libraries.
```bash
$ npm install
```

## Application
### Setting up service providers (SMS and e-mail)
For the SMS and the email service providers to work properly, you have to create a `.env` file in the project root directory.
There is a `env.template` which demonstrates which variables have to filled to work with the different providers.

Example:
``` 
SMS77_API_KEY="YOUR API KEY HERE"
RAPID_API_KEY="YOUR API KEY HERE"
```

### Editing the SMS content
In the file `.env` the SMS content and from messages are set. If You want to change them, edit them as You want.
``` 
SMS_CONTENT = ""
SMS_FROM_TEXT = ""
```

### Webpack
You need to execute webpack to compile the TypeScript code to common JavaScript.
```bash
$ webpack
```
Webpack puts the compiled code to the `dist` folder into one big JavaScript file (`main.js`).

### Send SMS
In order to actually send the SMS, just execute the script with NodeJS:
```bash
$ node ./dist/sms.js
```

### Send Emails
In order to actually send the emails, just execute the script with NodeJS:
```bash
$ node ./dist/mail.js
```