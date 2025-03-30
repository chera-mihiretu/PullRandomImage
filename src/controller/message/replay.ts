import {Message, Image, Audio, Document, Video, Edit} from '../../types/types';
import axiosInstance from '../axios/axios';

function replayToMessage(message: Edit) {
    return axiosInstance().post("sendMessage", message);
}



function replayToMessageWithImage(image : Image) {
    return axiosInstance().post("sendPhoto", image);
}
function editMessage(edit : Edit ) {
    return axiosInstance().post("editMessageText", edit);
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

function sendCallBack(id : string){
    return axiosInstance().post("answerCallbackQuery", {
        callback_query_id: id
    });
}


export {editMessage, replayToMessage,  replayToMessageWithImage, replayToMessageWithAudio, replayToMessageWithVideo, replayToMessageWithDocument, sendCallBack};