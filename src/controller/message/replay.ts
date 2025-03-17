import {Message} from '../../types/types';
import axiosInstance from '../axios/axios';

function replayToMessage(message: Message) {
    return axiosInstance().post("sendMessage", message);
}

export {replayToMessage};