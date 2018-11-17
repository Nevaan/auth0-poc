import { Component } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthenticationService) {}

  login() {
    this.auth.login();
  }

  isLogged(): boolean {
    return this.auth.isAuthenticated();
  }

  logout() {
    this.auth.logout();
  }

}
