import axiosInstance from "./axios/axios";
import { Request, Response } from "express";
import { replayToMessage } from "./message/replay";
async function postHandler(req: Request, res: Response){

    const {message, message : {chat, text}} = req.body;
    console.log(message);

    try {

        const message = {
            chat_id: chat.id,
            text: `You said: ${text}`
        }

        const result = await replayToMessage(message);

        res.status(200)
        res.send()
    } catch (error) {
        res.status(500).json({error: error});
    }

}


async function getHandler(req : Request, res : Response){
    res.status(200)
    res.send()
}

export {postHandler, getHandler};