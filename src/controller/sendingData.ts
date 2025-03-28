import {Message, Audio, Image, Document, Video} from '../types/types';

// Dummy data for sending to Telegram

const message: Message = {
    chat_id: 123456789,
    text: "Hello, this is a test message!"
};

const image: Image = {
    chat_id: 123456789,
    photo: "https://fastly.picsum.photos/id/600/200/300.jpg?hmac=Ub3Deb_eQNe0Un7OyE33D79dnextn3M179L0nRkv1eg",
    caption: "This is a test image",
    reply_markup: '{"inline_keyboard":[[{"text":"👍 Like","callback_data":"like"},{"text":"👎 Dislike","callback_data":"dislike"}]]}'
};

const audio: Audio = {
    chat_id: 123456789,
    audio: "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
    caption: "This is a test audio",
    reply_markup: '{"inline_keyboard":[[{"text":"👍 Like","callback_data":"like"},{"text":"👎 Dislike","callback_data":"dislike"}]]}'
};

const video: Video = {
    chat_id: 123456789,
    video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    caption: "This is a test video",
    reply_markup: '{"inline_keyboard":[[{"text":"👍 Like","callback_data":"like"},{"text":"👎 Dislike","callback_data":"dislike"}]]}'
};

const document: Document = {
    chat_id: 123456789,
    document: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    caption: "This is a test document",
    reply_markup: '{"inline_keyboard":[[{"text":"👍 Like","callback_data":"like"},{"text":"👎 Dislike","callback_data":"dislike"}]]}'
};
export { message, image, audio, video, document };