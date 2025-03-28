import axios from 'axios';
import dotenv from 'dotenv';

import {Message, Image, Document, Audio, Video} from '../../types/types';


dotenv.config();

const {BASE_URL, BOT_API} = process.env;


function axiosInstance() {
    return {
        get(methodName: string, data: Message) {
            return axios.get(`/${methodName}`, { baseURL: `${BASE_URL}${BOT_API}/`,  params: data });
        },
        post(methodName: string, data: Message | Image | Document | Audio | Video) {
            return axios({
                method: 'post',
                url: `/${methodName}`,
                baseURL: `${BASE_URL}${BOT_API}/`,
                data,
                timeout: 5000
            });
        },


    };
}

export default axiosInstance;