import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { UserInfo } from '../interfaces/user';
import { UserService } from './user.service';
// import 'rxjs/add/operator/switchMap';
import { switchMap } from 'rxjs/operators';
// import 'rxjs/add/obsevable/of';
import { of } from 'rxjs';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<firebase.User | null>;

  constructor(
    private afauth: AngularFireAuth,
    private userService: UserService
  ) {
    this.user$ = afauth.authState;
  }

  login() {
    // let returnUrl = this.router.snapshot.queryParamMap.get('returnUrl') || '/';
    this.afauth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afauth.signOut();
  }
  // Property to return true or false
  get AppUser(): Observable<any> {
    return this.user$.pipe(
      switchMap((user) => {
        if (user) {
          return this.userService.getUserInfo(user.uid).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }
}
