"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { BASE_URL } = process.env;
function axiosInstance() {
    return {
        get(methodName, data) {
            return axios_1.default.get(`/${methodName}`, { baseURL: BASE_URL, params: data });
        },
        post(methodName, data) {
            console.log(BASE_URL);
            return (0, axios_1.default)({
                method: 'post',
                url: `/${methodName}`,
                baseURL: BASE_URL,
                data
            });
        }
    };
}
exports.default = axiosInstance;
