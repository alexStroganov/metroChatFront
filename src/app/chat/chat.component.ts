import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatMessageDto } from '../models/chatModelsDto';
import { WebSocketService } from '../services/web-socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  constructor(public webSocketService: WebSocketService) { }


  sendMessage(sendForm: NgForm) {
    const chatMessageDto = new ChatMessageDto(1 ,sendForm.value.message, 1);
    this.webSocketService.sendMessage(chatMessageDto).subscribe(x => console.log(x));
    sendForm.controls.message.reset();
  }
}
