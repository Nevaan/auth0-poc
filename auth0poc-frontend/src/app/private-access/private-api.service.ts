import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../dto/message';


const apiRoutes = {
  privateMessage: () => 'http://localhost:8080/api/private'
};

@Injectable()
export class PrivateApiService {

  constructor(private http: HttpClient) { }

  public retrievePrivateMessage(): Observable<Message> {
    return this.http.get<Message>(apiRoutes.privateMessage());
  }

}
