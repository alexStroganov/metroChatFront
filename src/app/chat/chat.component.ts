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

    const chatMessageDto = {createdat: "", sender_id: sendForm.value.sender_id, message: sendForm.value.message, lineId: 1, userName: ""};
    this.webSocketService.sendMessage(chatMessageDto).subscribe(x => console.log(x));
    
    sendForm.controls.message.reset();
  }
}
