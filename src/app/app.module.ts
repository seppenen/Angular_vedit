import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UserModule} from "./user/user.module";
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NavComponent} from './nav/nav.component';
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import { AngularFirestoreModule} from "@angular/fire/compat/firestore";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
