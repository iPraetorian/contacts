import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCardsComponent } from '../contacts-page/contact-cards/contact-cards.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactsListsComponent } from './contacts-lists/contacts-lists.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContactCardsComponent,
    ContactDetailComponent,
    ContactsListsComponent
  ],
  exports: [ContactCardsComponent,
  ContactDetailComponent]
})
export class ContactsPageModule { }
