"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.replayToMessage = replayToMessage;
exports.replayToMessageWithImage = replayToMessageWithImage;
const axios_1 = __importDefault(require("../axios/axios"));
function replayToMessage(message) {
    return (0, axios_1.default)().post("sendMessage", message);
}
function replayToMessageWithImage(image) {
    return (0, axios_1.default)().post("sendPhoto", image);
}
