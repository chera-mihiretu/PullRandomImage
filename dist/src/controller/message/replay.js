"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.replayToMessage = replayToMessage;
exports.replayToMessageWithImage = replayToMessageWithImage;
exports.replayToMessageWithAudio = replayToMessageWithAudio;
exports.replayToMessageWithVideo = replayToMessageWithVideo;
exports.replayToMessageWithDocument = replayToMessageWithDocument;
const axios_1 = __importDefault(require("../axios/axios"));
function replayToMessage(message) {
    return (0, axios_1.default)().post("sendMessage", message);
}
function replayToMessageWithImage(image) {
    return (0, axios_1.default)().post("sendPhoto", image);
}
function replayToMessageWithAudio(audio) {
    return (0, axios_1.default)().post("sendAudio", audio);
}
function replayToMessageWithVideo(video) {
    return (0, axios_1.default)().post("sendVideo", video);
}
function replayToMessageWithDocument(document) {
    return (0, axios_1.default)().post("sendDocument", document);
}
