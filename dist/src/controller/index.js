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
Object.defineProperty(exports, "__esModule", { value: true });
exports.postHandler = postHandler;
exports.getHandler = getHandler;
exports.sendBasedOnText = sendBasedOnText;
const replay_1 = require("./message/replay");
const sendingData_1 = require("./sendingData");
function postHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("received", req.body);
        const { chat, text } = req.body.message;
        console.log("received", text);
        try {
            const reply = {
                chat_id: chat.id,
                text: text,
            };
            const result = yield sendBasedOnText(reply);
            res.sendStatus(200);
        }
        catch (error) {
            console.error("Error processing bot reply:", error);
        }
    });
}
function sendBasedOnText(reply) {
    return __awaiter(this, void 0, void 0, function* () {
        const command = reply.text.split(' ')[0];
        console.log("command", command);
        if (command[0] == '/') {
            switch (command) {
                case '/start':
                    reply.text = "Welcome to the test Telegram bot! You can use the /help command to see all available commands.";
                    return (0, replay_1.replayToMessage)(reply);
                case '/image':
                    sendingData_1.image.chat_id = reply.chat_id;
                    return sendImage(sendingData_1.image);
                case '/audio':
                    sendingData_1.audio.chat_id = reply.chat_id;
                    return (0, replay_1.replayToMessageWithAudio)(sendingData_1.audio);
                case '/document':
                    sendingData_1.document.chat_id = reply.chat_id;
                    return (0, replay_1.replayToMessageWithDocument)(sendingData_1.document);
                case "/video":
                    sendingData_1.video.chat_id = reply.chat_id;
                    return (0, replay_1.replayToMessageWithVideo)(sendingData_1.video);
                case '/help':
                    reply.text = "Available commands: \n /start - Start the bot \n /image - Send an image \n /audio - Send an audio file \n /document - Send a document \n /video - Send a video";
                    return (0, replay_1.replayToMessage)(reply);
                default:
                    reply.text = "Apologies, I don't understand that command. Please use /help to see all available commands.";
                    return (0, replay_1.replayToMessage)(reply);
            }
        }
        else {
            reply.text = "Apologies, please use a proper command (e.g., /start, /help) instead of plain text.";
            return (0, replay_1.replayToMessage)(reply);
        }
    });
}
function sendImage(reply) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, replay_1.replayToMessageWithImage)(reply);
    });
}
function sendAudio(reply) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, replay_1.replayToMessageWithAudio)(reply);
    });
}
function sendDocument(reply) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, replay_1.replayToMessageWithDocument)(reply);
    });
}
function sendVideo(reply) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, replay_1.replayToMessageWithVideo)(reply);
    });
}
function getHandler(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.sendStatus(200);
    });
}
