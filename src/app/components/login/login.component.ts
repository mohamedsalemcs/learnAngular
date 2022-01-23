import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  appUser: UserInfo;
  constructor(private auth: AuthService) {
    this.auth.AppUser.subscribe((user) => (this.appUser = user));
  }

  ngOnInit(): void {}
  login() {
    this.auth.login();
  }
}
