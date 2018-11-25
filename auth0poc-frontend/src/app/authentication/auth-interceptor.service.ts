import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any>  {

    const storedToken = localStorage.getItem('access_token');
    if (storedToken) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${storedToken}`
        }
      });
    }

    return next.handle(req);

  }

}
