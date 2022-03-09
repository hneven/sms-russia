# Drop information bombs on Russia

A tool to send SMS in bulk to random Russian cellphone numbers.

A service implemented by squad303 (https://1920.in) provides an API
with random russian cellphones numbers which can be used with a professional
SMS service to get in touch with the Russian people.

## Framework

- NodeJS 17.6.0
- NPM 8.5.1
- Webpack
- TypeScript

## Installation
```bash
$ npm install
```

## Application
First You need to execute webpack to compile the TypeScript code to common JavaScript.
```bash
$ webpack
```
Webpack puts the compiled code to the `dist` folder into one big JavaScript file (`main.js`).

You can now execute the script with NodeJS:
```bash
$ node ./dist/main.js
```