import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../dto/message';
import { Observable } from 'rxjs';

const apiRoutes = {
  publicMessage: () => 'http://localhost:8080/api/public'
};

@Injectable({
  providedIn: 'root'
})
export class PublicApiService {

  constructor(private http: HttpClient) { }

  public retrievePublicMessage(): Observable<Message> {
    return this.http.get<Message>(apiRoutes.publicMessage());
  }

}
