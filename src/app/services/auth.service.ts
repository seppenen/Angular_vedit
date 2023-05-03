import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import IUser from "../models/user.model";
import {delay, map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersCollection: AngularFirestoreCollection<IUser>
  public isAuthenticated$: Observable<boolean>
  public isAuthenticatedDelay$: Observable<boolean>


  constructor(private auth: AngularFireAuth, private db: AngularFirestore) {
    this.usersCollection = db.collection('users');
    this.isAuthenticated$ = this.auth.user.pipe(
      map(user => Boolean(user))
    )
    this.isAuthenticatedDelay$ = this.isAuthenticated$.pipe(
      delay(1000)
    )
  }

   async createUser(userData:IUser){

    if(!userData.password){
      throw new Error('Password is required!')
    }
    const user = await this.auth.createUserWithEmailAndPassword(userData.email, userData.password)

    if(!user.user){
      throw new Error('User not found!')
    }
    await this.usersCollection.doc(user.user.uid).set({
      name: userData.name,
      email: userData.email,
      age: userData.age,
      phone: userData.phone
    })
  }

   async login(email: string, password: string) {
       await this.auth.signInWithEmailAndPassword(email, password)
   }
}
