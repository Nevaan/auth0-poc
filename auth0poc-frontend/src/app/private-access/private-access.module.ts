import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateAccessRoutingModule } from './private-access-routing.module';
import { PrivateAccessComponent } from './private-access.component';

@NgModule({
  imports: [
    CommonModule,
    PrivateAccessRoutingModule
  ],
  declarations: [
    PrivateAccessComponent
  ]
})
export class PrivateAccessModule { }
