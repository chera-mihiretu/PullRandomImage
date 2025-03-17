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
        const { message, message: { chat, text } } = req.body;
        console.log(message);
        try {
            const message = {
                chat_id: chat.id,
                text: `You said: ${text}`
            };
            const result = yield (0, replay_1.replayToMessage)(message);
            res.status(200);
            res.send();
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    });
}
function getHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.status(200);
        res.send();
    });
}
