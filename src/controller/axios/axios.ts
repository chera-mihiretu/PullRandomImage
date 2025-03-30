import axios from 'axios';
import dotenv from 'dotenv';

import { Message } from '../../types/types';
import { HTTPS_AGENT } from '../../config/setup';

dotenv.config();

const { BASE_URL, BOT_API } = process.env;

function axiosInstance() {
    return {
        get(methodName: string, data: Message) {
            return axios.get(`/${methodName}`, { 
                baseURL: `${BASE_URL}${BOT_API}/`,
                httpsAgent: HTTPS_AGENT,
                params: data 
            });
        },
        post(methodName: string, data: any) {
            return axios({
                method: 'post',
                url: `/${methodName}`,
                baseURL: `${BASE_URL}${BOT_API}/`,
                httpsAgent: HTTPS_AGENT,
                data,
                timeout: 5000
            });
        },
    };
}

export default axiosInstance;