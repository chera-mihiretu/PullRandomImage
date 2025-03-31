import { Request, Response } from "express";
import { 
    replayToMessage, 
    replayToMessageWithImage, 
    replayToMessageWithAudio, 
    replayToMessageWithDocument, 
    replayToMessageWithVideo, 
    editMessage,
    sendCallBack
} from "./message/replay";
import {client} from "../config/setup";
import { createClient } from "redis";
import {  Image, Audio, Document, Video, Edit } from "../types/types";

type Like = {
    liked: boolean
    disliked: boolean
}
const callBacks: { [key: string]: string } = {};
const liked: [number, Like][] = [];


async function postHandler(req: Request, res: Response) {
    
    
    
    
    
    console.log(req.body);
    
    if (req.body.callback_query) {

        const edit : Edit = req.body.callback_query.message;
        edit.chat_id = req.body.callback_query.message.chat.id;
        edit.text = "New Hellow World!";
        edit.reply_markup = JSON.stringify({
            inline_keyboard: [
                [
                    {
                        text: "New Like",
                        callback_data: "admin/like"
                    },
                    {
                        text: "Another Like",
                        callback_data: "admin/dislike"
                    }
                ]
            ]
        });

        await editMessage(edit);

        await sendCallBack(req.body.callback_query.id);
        
    }else {

        const message: Edit = req.body.message;
        
        const key = req.body.message.chat.id.toString();
        let newCount = await client.get(key) ?? "0";
        console.log(client.get(key), message.message_id);
        newCount = (parseInt(newCount) + 1).toString();
        await client.set(key, newCount);
        
        
        
        const text = `Hellow World ${newCount}`;
        message.chat_id = req.body.message.chat.id;
        message.text = text
        
        message.reply_markup = JSON.stringify({
            inline_keyboard: [
            [
                {
                text: "Like",
                callback_data: "admin/like"
                },
                {
                text: "Dislike",
                callback_data: "admin/dislike"
                }
            ]
            ]
        });
        



        await replayToMessage(message);
    }

    res.sendStatus(200);

    
}




async function sendImage (reply : Image){
    return replayToMessageWithImage(reply);
}

async function sendAudio (reply : Audio){
    return replayToMessageWithAudio(reply);
}

async function sendDocument (reply : Document){
    return replayToMessageWithDocument(reply);
}

async function sendVideo (reply : Video){
    return replayToMessageWithVideo(reply);
}
async function editMessageReplyMarkup(edit: Edit ) {

    editMessage(edit);

}

async function getHandler(_req: Request, res: Response) {
    res.sendStatus(200);
}

export { postHandler, getHandler }
