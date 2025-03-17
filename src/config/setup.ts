import axios from 'axios';
import * as http from 'http';
import * as https from 'https';

const HTTP_AGENT = new http.Agent({ family: 4 });
const HTTPS_AGENT = new https.Agent({ family: 4 });

async function init(url: string) {
    const isHttps = url.startsWith('https://');
    const config = isHttps ? { httpsAgent: HTTPS_AGENT } : { httpAgent: HTTP_AGENT };

    const res = await axios.get(url, config);
    console.log(res.data);
}

export default init;
