import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateAccessComponent } from './private-access.component';
import { PrivateAreaGuard } from './private-area.guard';

const routes: Routes = [
  {path: 'private', component: PrivateAccessComponent, canActivate: [PrivateAreaGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateAccessRoutingModule { }
