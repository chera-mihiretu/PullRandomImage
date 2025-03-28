import axios, { AxiosResponse } from "axios";
import { telegramSendMessageResponse, surpriceCommand} from "./test_data";
import MockAdapter from 'axios-mock-adapter';
import { sendBasedOnText } from "../controller";

import dotenv from "dotenv";


describe("Telegram send post", () => {
    let mock:MockAdapter;
    beforeAll(() => {
    mock = new MockAdapter(axios);
    });




   afterAll(() => {
    mock.restore(); 
   });



   it("This should send the message and finish all the work", async () =>{
    dotenv.config();
    const {BASE_URL, BOT_API} = process.env;
    mock.onAny().reply(200, telegramSendMessageResponse);


    const { chat, text } = telegramSendMessageResponse.message;

    const reply = {
        chat_id: chat.id,
        text: text,
    };


    const arrangeMessage : AxiosResponse<any, any> = await sendBasedOnText(reply) ;
    expect(arrangeMessage.data).toEqual(telegramSendMessageResponse);
    
   });

   it("This should send the message and finish all the work", async () =>{
    dotenv.config();
    const {BASE_URL, BOT_API} = process.env;
    mock.onAny().reply(200, surpriceCommand);


    const { chat, text } = telegramSendMessageResponse.message;

    const reply = {
        chat_id: chat.id,
        text: text,
    };


    const arrangeMessage : AxiosResponse<any, any> = await sendBasedOnText(reply) ;
    expect(arrangeMessage.data).toEqual(surpriceCommand);
    
   });




});