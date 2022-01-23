import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireObject,
} from '@angular/fire/compat/database';
import firebase from 'firebase/compat/app';
import { UserInfo } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private db: AngularFireDatabase) {}

  // Save logged user to firebase db
  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email,
    });
  }

  // get all users
  getUserInfo(uid: string): AngularFireObject<UserInfo> {
    return this.db.object('/users/' + uid);
  }
}
