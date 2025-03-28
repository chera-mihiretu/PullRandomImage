import express from 'express';
import dotenv from 'dotenv';
import init from './config/setup';
import telegramRouter from './router/router';
const app = express();

app.use(express.json());

dotenv.config();

app.use(telegramRouter)


const {PORT, BOT_API, NGROK, BASE_URL} = process.env;

app.use('/', telegramRouter);
app.get('/check', async (req, res) => {
    res.send({
        "check": true
    });
    
})




const TELEGRAM_API = `${BASE_URL}${BOT_API}`



const TELEGRAM_END_POINT = `${NGROK}/myphoto`

const TELEGRAM_WEBHOOK = `${TELEGRAM_API}/setWebhook?url=${TELEGRAM_END_POINT}`

app.listen(PORT, async () => {
    try {
        await init(TELEGRAM_WEBHOOK);
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.error('Failed to initialize webhook:', error);
    }
});