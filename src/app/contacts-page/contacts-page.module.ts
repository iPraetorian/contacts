import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCardsComponent } from '../contacts-page/contact-cards/contact-cards.component';
import { ContactDetailComponent } from './contact-card-detail/contact-card-detail.component';
import { ContactsDirectoryComponent } from './contacts-directory/contacts-directory.component';
import { ContactServiceService } from './contact-service.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [ContactServiceService],

  declarations: [
    ContactCardsComponent,
    ContactsDirectoryComponent,
    ContactDetailComponent
  ],
  exports: [ContactCardsComponent,
    ContactDetailComponent]
})
export class ContactsPageModule { }
