import { Request, Response } from "express";
import { replayToMessage } from "./message/replay";
import { Message } from "../types/types";

async function postHandler(req: Request, res: Response) {
    const { chat, text } = req.body.message;
    console.log("received", text);

    // Immediately send a 200 response to acknowledge the update.

    try {
        const reply = {
            chat_id: chat.id,
            text: text,
        };

        console.log("sending", reply.text);

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
                reply.text = "Welcome to the bot. You can use the /help command to see all available commands.";
                return replayToMessage(
                    reply
                );
            case '/surprice':
                // TODO : Implement the logic of image pull 
            case '/help':
                reply.text = "Available commands: /start and /surprice. /start starts the command and /surprice pulls an image from photo.";
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


async function getHandler(_req: Request, res: Response) {
    res.sendStatus(200);
}

export { postHandler, getHandler };
