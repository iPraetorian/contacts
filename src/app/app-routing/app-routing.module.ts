import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { MainModule } from '../main/main.module';
import { ContactsDirectoryComponent } from '../contacts-page/contacts-directory/contacts-directory.component';
import { ContactsPageModule } from '../contacts-page/contacts-page.module';
import { ContactDetailComponent } from '../contacts-page/contact-card-detail/contact-card-detail.component';
import { AppComponent } from '../app.component';
const routes: Routes = [

   {
    path: 'contactslist',
    component: ContactsDirectoryComponent
  

  },
  {
  
    path: 'contactdetail',
    component: ContactDetailComponent
    
  },
  {
    path: '',
    component: MainComponent
 
  }
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
