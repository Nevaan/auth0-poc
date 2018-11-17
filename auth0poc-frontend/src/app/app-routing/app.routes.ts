import { Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { NaviBarComponent } from '../navi-bar/navi-bar.component';
import { CallbackComponent } from '../callback/callback.component';

export const appRoutes: Routes = [
  { path: 'navibar', component: NaviBarComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'private', loadChildren: '../private-access/private-access.module#PrivateAccessModule' },
  { path: '', redirectTo: '/navibar', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];
