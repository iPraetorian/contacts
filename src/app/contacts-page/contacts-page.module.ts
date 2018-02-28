import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCardsComponent } from '../contacts-page/contact-cards/contact-cards.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactsDirectoryComponent } from './contacts-directory/contacts-directory.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContactCardsComponent,
    ContactDetailComponent,
    ContactsDirectoryComponent
  ],
  exports: [ContactCardsComponent,
  ContactDetailComponent]
})
export class ContactsPageModule { }
