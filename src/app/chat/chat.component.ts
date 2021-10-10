import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatMessageDto } from '../models/chatModelsDto';
import { WebSocketService } from '../services/web-socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  
  chatMessages: any[] = [];
  constructor(public webSocketService: WebSocketService) { }

  ngOnInit() {
    this.webSocketService.showMessages().subscribe((data: ChatMessageDto[]) => { 
      console.log(data);
      console.log(this.chatMessages);
      this.chatMessages = this.chatMessages.slice().concat(data);
    });
  } 

  ngOnDestroy() {

  }

  sendMessage(sendForm: NgForm) {
    // const chatMessageDto = ChatMessageDto(1 ,sendForm.value.message, 1);

    const chatMessageDto = {sender_id: 1, message: sendForm.value.message, line_id: 1};
    this.webSocketService.sendMessage(chatMessageDto).subscribe(x => console.log(x));
    //this.webSocketService.showMessages().subscribe(data => {
     // console.log(data);

  //});
    sendForm.controls.message.reset();
  }
}
