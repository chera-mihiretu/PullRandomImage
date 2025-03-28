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
const axios_1 = __importDefault(require("axios"));
const test_data_1 = require("./test_data");
const axios_mock_adapter_1 = __importDefault(require("axios-mock-adapter"));
const controller_1 = require("../controller");
const dotenv_1 = __importDefault(require("dotenv"));
describe("Telegram send post", () => {
    let mock;
    beforeAll(() => {
        mock = new axios_mock_adapter_1.default(axios_1.default);
    });
    afterAll(() => {
        mock.restore();
    });
    it("This should send the message and finish all the work", () => __awaiter(void 0, void 0, void 0, function* () {
        dotenv_1.default.config();
        const { BASE_URL, BOT_API } = process.env;
        mock.onAny().reply(200, test_data_1.telegramSendMessageResponse);
        const { chat, text } = test_data_1.telegramSendMessageResponse.message;
        const reply = {
            chat_id: chat.id,
            text: text,
        };
        const arrangeMessage = yield (0, controller_1.sendBasedOnText)(reply);
        expect(arrangeMessage.data).toEqual(test_data_1.telegramSendMessageResponse);
    }));
    it("This should send the message and finish all the work", () => __awaiter(void 0, void 0, void 0, function* () {
        dotenv_1.default.config();
        const { BASE_URL, BOT_API } = process.env;
        mock.onAny().reply(200, test_data_1.surpriceCommand);
        const { chat, text } = test_data_1.telegramSendMessageResponse.message;
        const reply = {
            chat_id: chat.id,
            text: text,
        };
        const arrangeMessage = yield (0, controller_1.sendBasedOnText)(reply);
        expect(arrangeMessage.data).toEqual(test_data_1.surpriceCommand);
    }));
});
