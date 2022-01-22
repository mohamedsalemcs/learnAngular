import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
// import * as firebase from 'firebase/compat/app';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public service: AuthService) {}

  ngOnInit(): void {
    // console.log(this.user);
  }

  logout() {
    this.service.logout();
  }
}
