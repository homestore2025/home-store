import { inject, Injectable } from '@angular/core';
import { collection, Firestore,addDoc } from '@angular/fire/firestore';

export interface User{
  nombre:string;
  correo:string;
  direccion:string;
  telefono:string;
  tipocortina:string
}

const PATH = 'user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _firestore = inject(Firestore);

  private _collection = collection(this._firestore, PATH);

  createUser(user:any){
    return addDoc(this._collection,user)
  }
}
