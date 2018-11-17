import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { NaviBarComponent } from './navi-bar/navi-bar.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PrivateAccessModule } from './private-access/private-access.module';
import { PrivateAccessRoutingModule } from './private-access/private-access-routing.module';
import { CallbackComponent } from './callback/callback.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NaviBarComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    PrivateAccessModule,
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
