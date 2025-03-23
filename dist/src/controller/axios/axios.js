"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { BASE_URL, BOT_API } = process.env;
function axiosInstance() {
    return {
        get(methodName, data) {
            return axios_1.default.get(`/${methodName}`, { baseURL: `${BASE_URL}${BOT_API}/`, params: data });
        },
        post(methodName, data) {
            console.log(`${BASE_URL}${BOT_API}/`);
            return (0, axios_1.default)({
                method: 'post',
                url: `/${methodName}`,
                baseURL: `${BASE_URL}${BOT_API}/`,
                data
            });
        }
    };
}
exports.default = axiosInstance;
