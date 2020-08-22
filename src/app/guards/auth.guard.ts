import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ChatService } from '../services/chat.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /**
   *
   */
  constructor(private chatService: ChatService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.chatService.user.uid){
        const uid = environment.isForbbiden.indexOf(this.chatService.user.uid);
        if (uid >= 0){
          return true;
        }
        this.chatService.logout();
        return false;
      }else {
        return false;
      }
  }
}
