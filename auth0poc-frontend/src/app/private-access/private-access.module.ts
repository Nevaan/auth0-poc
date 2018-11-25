import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateAccessRoutingModule } from './private-access-routing.module';
import { PrivateAccessComponent } from './private-access.component';
import { PrivateApiService } from './private-api.service';

@NgModule({
  imports: [
    CommonModule,
    PrivateAccessRoutingModule
  ],
  declarations: [
    PrivateAccessComponent
  ],
  providers: [ PrivateApiService ]
})
export class PrivateAccessModule { }
