import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from "@angular/fire/compat";
/* import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireStorageModule } from "@angular/fire/storage"; */
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //AngularFireModule.initializeApp(environment.firebaseConfig),
    /* AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFirestoreModule */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
