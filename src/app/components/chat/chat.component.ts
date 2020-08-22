import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit {

  mensaje = '';
  elemento: any;
  environmentUID: string;

  constructor(public chatService: ChatService) {
    this.environmentUID = environment.isForbbiden[1];
    this.chatService.loadMessages().subscribe(() => {
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 20);
    });
  }

  ngOnInit(): void {
    this.elemento = document.getElementById('app-mensajes');
  }

  sendMessage(): void {
    if (this.mensaje.length === 0){
      return;
    }

    this.chatService.addMessage(this.mensaje)
        .then(() => {
          console.log('Mensaje enviado');
          this.mensaje = '';
          this.chatService.isTyping = false;
        })
        .catch(() => console.log('Error'));
  }

  isTyping(): void {
    if (this.mensaje.length === 0){
      this.chatService.isTyping = false;
    } else {
      this.chatService.isTyping = true;
    }
  }
}
