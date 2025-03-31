import axios from 'axios';
import * as http from 'http';
import * as https from 'https';
import { createClient } from 'redis';

const HTTP_AGENT = new http.Agent({ family: 4 });
const HTTPS_AGENT = new https.Agent({ family: 4 });

async function init(url: string) {
    const isHttps = url.startsWith('https://');
    const config = isHttps ? { httpsAgent: HTTPS_AGENT } : { httpAgent: HTTP_AGENT };
    const res = await axios.get(url, config);
    console.log(res.data);
}



const client = createClient({
    url: process.env.REDIS_URL,
});


client.on('error', (err) => {
    console.error('Redis Client Error', err);
});

client.on('connect', () => {
    console.log('Redis client connected');
});

async function startClinet(){
    try {
        await client.connect();
    } catch (err) {
        console.error('Failed to connect to Redis server', err);
    }
}


export {init, HTTPS_AGENT, startClinet, client};
