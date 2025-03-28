import { Request, Response } from "express";
import { 
    replayToMessage, 
    replayToMessageWithImage, 
    replayToMessageWithAudio, 
    replayToMessageWithDocument, 
    replayToMessageWithVideo 
} from "./message/replay";
import { Message, Image, Audio, Document, Video } from "../types/types";
import {message, audio, image, document, video} from './sendingData';

async function postHandler(req: Request, res: Response) {
    console.log("received", req.body);
    const { chat, text } = req.body.message;
    console.log("received", text);


    try {
        const reply : Message = {
            chat_id: chat.id,
            text: text,
        };


        const result = await sendBasedOnText(reply);

        res.sendStatus(200);

    } catch (error) {
        console.error("Error processing bot reply:", error);
    }
}


async function sendBasedOnText(reply: Message) {

    const command = reply.text.split(' ')[0];

    console.log("command", command);

    if (command[0] == '/') {

        switch (command) {
            case '/start':
                reply.text = "Welcome to the test Telegram bot! You can use the /help command to see all available commands.";
                return replayToMessage(
                    reply
                );
            case '/image':
                image.chat_id = reply.chat_id;

                return sendImage(image);

            case '/audio':
                audio.chat_id = reply.chat_id
                return sendAudio(
                    audio
                );
            case '/document':
                document.chat_id = reply.chat_id;
                return sendDocument(
                    document
                );

            case "/video": 
                video.chat_id = reply.chat_id;
                return sendVideo(
                    video
                );
            case '/help':
                reply.text = "Available commands: \n /start - Start the bot \n /image - Send an image \n /audio - Send an audio file \n /document - Send a document \n /video - Send a video";
                return replayToMessage(
                    reply
                );
            default:
                reply.text = "Apologies, I don't understand that command. Please use /help to see all available commands.";
                return replayToMessage(
                    reply
                );

        }

    }else {
        reply.text = "Apologies, please use a proper command (e.g., /start, /help) instead of plain text.";
        return replayToMessage(
            reply
        );
    }
    
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

async function getHandler(_req: Request, res: Response) {
    res.sendStatus(200);
}

export { postHandler, getHandler, sendBasedOnText };
