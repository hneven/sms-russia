"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios = require("axios").default;
getPhoneNumber().then(function (phoneNumber) {
    var options = {
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
}).catch(function (err) { return console.log(err); });
function createData(phoneNumber) {
    var data = {
        "to": phoneNumber,
        "content": "На Украине погибло больше сынов Русского Народа, чем в Афганистане! Война Путина уничтожит Россию! Топлива нет, денег в банках нет. Путин уничтожает Россию! Кремль лжет!",
        "from": "друг",
        "dlr": "yes",
        "dlr-method": "GET",
        "dlr-level": "2",
        "dlr-url": "https://exampple.com"
    };
    return JSON.stringify(data);
}
function getPhoneNumber() {
    return __awaiter(this, void 0, void 0, function () {
        var request, phoneNumber;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('https://1920.in/api', {
                        headers: {
                            'cookie': 'cf_clearance=v0MgGuPOfywyAIXOkWM9au_jqPgamnip1tDmNsPkFKI-1646737720-0-150',
                            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
                            'sec-ch-ua-mobile': '?0',
                            'sec-ch-ua-platform': "macOS",
                            'sec-fetch-dest': 'document',
                            'sec-fetch-mode': 'navigate',
                            'sec-fetch-site': 'none',
                            'sec-fetch-user': '?1',
                            'upgrade-insecure-requests': 1,
                            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
                        }
                    })];
                case 1:
                    request = _a.sent();
                    phoneNumber = request.data;
                    return [2 /*return*/, phoneNumber];
            }
        });
    });
}
//# sourceMappingURL=sendApi.js.map