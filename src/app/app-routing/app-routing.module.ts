import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { MainModule } from '../main/main.module';
import { ContactsListsComponent } from '../contacts-page/contacts-lists/contacts-lists.component';
import { ContactsPageModule } from '../contacts-page/contacts-page.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }, {path: 'contacts',
  component: ContactsListsComponent}
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
