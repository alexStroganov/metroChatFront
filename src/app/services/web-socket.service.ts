import { HttpClient, HttpClientModule,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChatComponent } from '../chat/chat.component';
import { ChatMessageDto } from '../models/chatModelsDto';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  constructor(private http: HttpClient) {

   }

  sendMessage(chatMessageDto: ChatMessageDto) {
    alert(JSON.stringify(chatMessageDto));

    const myHeaders = new HttpHeaders().set('Content-Type' , 'application/json;charset=utf8');
    return this.http.post('http://localhost:8080/chat', JSON.stringify(chatMessageDto), {headers:myHeaders});

  }

  
}
