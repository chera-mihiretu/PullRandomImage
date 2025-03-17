import axios from 'axios';
import dotenv from 'dotenv';

import {Message} from '../../types/types';


dotenv.config();

const {BASE_URL} = process.env;


function axiosInstance() {
    return {
        get(methodName: string, data: Message) {
            return axios.get(`/${methodName}`, { baseURL: BASE_URL,  params: data });
        },
        post(methodName: string, data: Message) {
            console.log(BASE_URL);
            return axios({
                method: 'post',
                url: `/${methodName}`,
                baseURL: BASE_URL,
                data
            });
        }
    };
}

export default axiosInstance;