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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const setup_1 = __importDefault(require("./config/setup"));
const router_1 = __importDefault(require("./router/router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
dotenv_1.default.config();
app.use(router_1.default);
const { PORT, BOT_API, NGROK, BASE_URL } = process.env;
app.use('/', router_1.default);
app.get('/check', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({
        "check": true
    });
}));
const TELEGRAM_API = `${BASE_URL}${BOT_API}`;
const TELEGRAM_END_POINT = `${NGROK}/myphoto`;
const TELEGRAM_WEBHOOK = `${TELEGRAM_API}/setWebhook?url=${TELEGRAM_END_POINT}`;
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, setup_1.default)(TELEGRAM_WEBHOOK);
        console.log(`Server is running on port ${PORT}`);
    }
    catch (error) {
        console.error('Failed to initialize webhook:', error);
    }
}));
