interface Message {
    chat_id: number;
    text: string;
}


interface Image {
    chat_id : number;
    photo: string;
    caption?: string;
    reply_markup? : string
}

interface Audio { 
    chat_id : number;
    audio: string;
    caption?: string;
    reply_markup? : string   
}

interface Video {
    chat_id : number;

    video: string;
    caption?: string;
    reply_markup? : string
}

interface Document {
    chat_id : number;
    document: string;
    caption?: string;
    reply_markup? : string
}


export {Message, Image, Audio, Video, Document};