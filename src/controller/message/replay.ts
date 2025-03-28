import {Message, Image, Audio, Document, Video} from '../../types/types';
import axiosInstance from '../axios/axios';

function replayToMessage(message: Message) {
    return axiosInstance().post("sendMessage", message);
}

function replayToMessageWithImage(image : Image) {
    return axiosInstance().post("sendPhoto", image);
}

function replayToMessageWithAudio(audio : Audio) {
    return axiosInstance().post("sendAudio", audio);
}

function replayToMessageWithVideo(video : Video) {
    return axiosInstance().post("sendVideo", video);
}

function replayToMessageWithDocument(document : Document) {
    return axiosInstance().post("sendDocument", document);
}

export {replayToMessage,  replayToMessageWithImage, replayToMessageWithAudio, replayToMessageWithVideo, replayToMessageWithDocument};