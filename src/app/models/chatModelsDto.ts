export class ChatMessageDto {
    sender_id: number;
    //user: string;
    message: string;
    line_id: number;

    constructor(sender_id: number, message: string, line_id: number) {
        this.sender_id = 1;
     //   this.user = user;
        this.message = message;
        this.line_id = 1;
    }
}