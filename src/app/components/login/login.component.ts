import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public chatService: ChatService, private router: Router) { }

  ngOnInit(): void {
    if (this.chatService.user.uid) {
      this.router.navigate(['/home']);
    }
  }

  login(provedor: string = ''): void {
    this.chatService.login(provedor);
  }
}
