import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from "./app-routing.module";
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { CaloriesTableComponent } from './homepage/calories-table/calories-table.component';
import { MealsComposerComponent } from './homepage/meals-composer/meals-composer.component';
import { MealsHistoryComponent } from './homepage/meals-history/meals-history.component';
import { AngularMaterialModule } from "./angular-material.module";
import { EyesComponent } from './homepage/eyes/eyes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    CaloriesTableComponent,
    MealsComposerComponent,
    MealsHistoryComponent,
    EyesComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
