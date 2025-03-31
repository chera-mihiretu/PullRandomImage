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
const setup_1 = require("../config/setup");
const callBacks = {};
const liked = [];
function postHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        console.log(req.body);
        if (req.body.callback_query) {
            const edit = req.body.callback_query.message;
            edit.chat_id = req.body.callback_query.message.chat.id;
            edit.text = "New Hellow World!";
            edit.reply_markup = JSON.stringify({
                inline_keyboard: [
                    [
                        {
                            text: "New Like",
                            callback_data: "admin/like"
                        },
                        {
                            text: "Another Like",
                            callback_data: "admin/dislike"
                        }
                    ]
                ]
            });
            yield (0, replay_1.editMessage)(edit);
            yield (0, replay_1.sendCallBack)(req.body.callback_query.id);
        }
        else {
            const message = req.body.message;
            const key = req.body.message.chat.id.toString();
            let newCount = (_a = yield setup_1.client.get(key)) !== null && _a !== void 0 ? _a : "0";
            console.log(setup_1.client.get(key), message.message_id);
            newCount = (parseInt(newCount) + 1).toString();
            yield setup_1.client.set(key, newCount);
            const text = `Hellow World ${newCount}`;
            message.chat_id = req.body.message.chat.id;
            message.text = text;
            message.reply_markup = JSON.stringify({
                inline_keyboard: [
                    [
                        {
                            text: "Like",
                            callback_data: "admin/like"
                        },
                        {
                            text: "Dislike",
                            callback_data: "admin/dislike"
                        }
                    ]
                ]
            });
            yield (0, replay_1.replayToMessage)(message);
        }
        res.sendStatus(200);
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
function editMessageReplyMarkup(edit) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, replay_1.editMessage)(edit);
    });
}
function getHandler(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.sendStatus(200);
    });
}
