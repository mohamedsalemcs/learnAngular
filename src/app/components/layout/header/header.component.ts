import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../../interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
// import * as firebase from 'firebase/compat/app';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  appUser: UserInfo;

  constructor(private auth: AuthService) {
    this.auth.AppUser.subscribe((user) => (this.appUser = user));
  }

  ngOnInit(): void {
    console.log(this.appUser);
  }

  logout() {
    this.auth.logout();
  }
}
