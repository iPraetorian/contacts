import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { ContactCardsComponent } from './contacts-page/contact-cards/contact-cards.component';
import { ContactDetailComponent } from './contacts-page/contact-card-detail/contact-card-detail.component';
import { RouterTestingModule } from '@angular/router/testing';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MainModule,
    AppRoutingModule,
    RouterModule,
    RouterTestingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
