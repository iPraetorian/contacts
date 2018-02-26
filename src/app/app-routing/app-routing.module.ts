import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { MainModule } from '../main/main.module';
import { ContactCardsComponent } from '../contacts-page/contact-cards/contact-cards.component';
import { ContactsPageModule } from '../contacts-page/contacts-page.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }, {path: 'contacts',
  component: ContactCardsComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    MainModule,
    ContactsPageModule
  ],
  declarations: []
})
export class AppRoutingModule { }
