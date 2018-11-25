import { Component, OnInit } from '@angular/core';
import { PrivateApiService } from './private-api.service';
import { Observable } from 'rxjs';
import { Message } from '../dto/message';

@Component({
  selector: 'app-private-access',
  templateUrl: './private-access.component.html',
  styleUrls: ['./private-access.component.css']
})
export class PrivateAccessComponent implements OnInit {

  message$: Observable<Message>;

  constructor(private apiService: PrivateApiService) { }

  ngOnInit(): void {
    this.message$ = this.apiService.retrievePrivateMessage();
  }

}
