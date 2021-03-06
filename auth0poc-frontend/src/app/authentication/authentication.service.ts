import { Injectable } from '@angular/core';
import { AuthenticationModule } from './authentication.module';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { environment } from '../../environments/environment';
(window as any).global = window;

@Injectable({
  providedIn: AuthenticationModule
})
export class AuthenticationService {

  auth0 = new auth0.WebAuth({
    clientID: environment.auth0clientId,
    domain: environment.auth0domain,
    audience: environment.audience,
    responseType: 'token id_token',
    redirectUri: environment.auth0callbackUri,
    scope: 'openid'
  });

  constructor(private router: Router) { }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/private']);
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }

}
