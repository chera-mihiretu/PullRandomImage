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
const replay_1 = require("./message/replay");
function postHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { chat, text } = req.body.message;
        console.log("received", text);
        // Immediately send a 200 response to acknowledge the update.
        try {
            const reply = {
                chat_id: chat.id,
                text: text,
            };
            console.log("sending", reply.text);
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
                    reply.text = "Welcome to the bot. You can use the /help command to see all available commands.";
                    return (0, replay_1.replayToMessage)(reply);
                case '/help':
                    reply.text = "Available commands: /start and /surprice. /start starts the command and /surprice pulls an image from photo.";
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
function getHandler(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.sendStatus(200);
    });
}
