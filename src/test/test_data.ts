const telegramSendMessageResponse = {
    ok: true,
    message: {
        message_id: 12345,
        from: {
            id: 5128622165,
            is_bot: true,
            first_name: "MyBot",
            username: "MyAwesomeBot"
        },
        chat: {
            id: 5128622165,
            first_name: "John",
            last_name: "Doe",
            username: "johndoe",
            type: "private"
        },
        date: 1711642487, // Unix timestamp
        text: "Apologies, I don't understand that command. Please use /help to see all available commands."
    }
};


const surpriceCommand = telegramSendMessageResponse

surpriceCommand.message.text = "/surprice"




export {telegramSendMessageResponse, surpriceCommand};