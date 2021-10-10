import { HttpClient, HttpClientModule,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { ChatComponent } from '../chat/chat.component';
import { ChatMessageDto } from '../models/chatModelsDto';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  
  constructor(private http: HttpClient) {

   }

  showMessages(): Observable<ChatMessageDto[]> {
    const myHeaders = new HttpHeaders().set('Content-Type' , 'application/json;charset=utf8');
    return interval(3000).pipe(mergeMap(() => {
      return this.http.get<ChatMessageDto[]>('http://localhost:8080/chatmessages?line_id=1', {headers:myHeaders});
    }) );
  }
  
  sendMessage(chatMessageDto: ChatMessageDto) {
    alert(JSON.stringify(chatMessageDto));
    //this.chatMessages.push(chatMessageDto);
    const myHeaders = new HttpHeaders().set('Content-Type' , 'application/json;charset=utf8');
    return this.http.post('http://localhost:8080/chat', JSON.stringify(chatMessageDto), {headers:myHeaders});

  }

  
}

