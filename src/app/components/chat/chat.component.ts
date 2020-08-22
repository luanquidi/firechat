import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Mensaje } from 'src/app/interface/mensaje.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit {

  mensaje = '';
  elemento: any;

  constructor(public chatService: ChatService) {
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
        })
        .catch(() => console.log('Error'));
  }
}
