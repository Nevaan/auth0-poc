import { Component, OnInit } from '@angular/core';
import { PublicApiService } from './public-api.service';
import { Observable } from 'rxjs';
import { Message } from '../dto/message';

@Component({
  selector: 'app-public-message',
  templateUrl: './public-message.component.html',
  styleUrls: ['./public-message.component.css']
})
export class PublicMessageComponent implements OnInit {

  message$: Observable<Message>;

  constructor(private apiService: PublicApiService) { }

  ngOnInit() {
    this.message$ = this.apiService.retrievePublicMessage();
  }

}
