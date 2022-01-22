import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private auth: AuthService,
    private router: ActivatedRoute,
    route: Router
  ) {
    this.auth.user$.subscribe((user) => {
      if (user) {
        let returnUrl =
          this.router.snapshot.queryParamMap.get('returnUrl') || '/';
        route.navigateByUrl(returnUrl);
      }
    });
  }
}
