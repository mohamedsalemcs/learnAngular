import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<firebase.User | null>;

  constructor(private afauth: AngularFireAuth, private router: ActivatedRoute) {
    this.user$ = afauth.authState;
  }

  login() {
    // let returnUrl = this.router.snapshot.queryParamMap.get('returnUrl') || '/';
    this.afauth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    // if (this.router.url != '/login') {
    //   this.router.navigate(['/login']);
    // } else {
    //   this.router.navigate(['/login']);
    // }
    this.afauth.signOut();
  }
}
