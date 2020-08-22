import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mensaje } from '../interface/mensaje.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];
  public user: any = {};
  public isTyping = false;

  // tslint:disable-next-line: no-shadowed-variable
  constructor( private afs: AngularFirestore, public auth: AngularFireAuth, private router: Router) {
    this.auth.authState.subscribe(user => {
      if (!user) {
        this.router.navigate(['/login']);
        return;
      }
      this.router.navigate(['/home']);
      this.user.nombre = user.displayName;
      this.user.uid = user.uid;
      this.user.image = user.photoURL;
    });
  }

  login(provedor: string): void {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout(): void {
    this.auth.signOut();
    this.user = {};
  }

  loadMessages(): Observable<any> {
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha', 'desc').limit(5));
    return this.itemsCollection.valueChanges().pipe(
      map( (mensajes: Mensaje[]) => {
          this.chats = [];
          for ( const mensaje of mensajes){
            this.chats.unshift(mensaje);
          }
          return this.chats;
      })
    );
  }

  addMessage(texto: string): any {
    // tslint:disable-next-line: prefer-const
    let mensaje: Mensaje = {
      nombre: this.user.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.user.uid
    };

    return this.itemsCollection.add(mensaje);
  }
}
