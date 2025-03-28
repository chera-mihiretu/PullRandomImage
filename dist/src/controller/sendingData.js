"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.document = exports.video = exports.audio = exports.image = exports.message = void 0;
// Dummy data for sending to Telegram
const message = {
    chat_id: 123456789,
    text: "Hello, this is a test message!"
};
exports.message = message;
const image = {
    chat_id: 123456789,
    photo: "https://fastly.picsum.photos/id/600/200/300.jpg?hmac=Ub3Deb_eQNe0Un7OyE33D79dnextn3M179L0nRkv1eg",
    caption: "This is a test image",
    reply_markup: '{"inline_keyboard":[[{"text":"👍 Like","callback_data":"like"},{"text":"👎 Dislike","callback_data":"dislike"}]]}'
};
exports.image = image;
const audio = {
    chat_id: 123456789,
    audio: "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
    caption: "This is a test audio",
    reply_markup: '{"inline_keyboard":[[{"text":"👍 Like","callback_data":"like"},{"text":"👎 Dislike","callback_data":"dislike"}]]}'
};
exports.audio = audio;
const video = {
    chat_id: 123456789,
    video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    caption: "This is a test video",
    reply_markup: '{"inline_keyboard":[[{"text":"👍 Like","callback_data":"like"},{"text":"👎 Dislike","callback_data":"dislike"}]]}'
};
exports.video = video;
const document = {
    chat_id: 123456789,
    document: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    caption: "This is a test document",
    reply_markup: '{"inline_keyboard":[[{"text":"👍 Like","callback_data":"like"},{"text":"👎 Dislike","callback_data":"dislike"}]]}'
};
exports.document = document;
