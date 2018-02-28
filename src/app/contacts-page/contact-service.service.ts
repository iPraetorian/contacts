import { Injectable } from '@angular/core';

@Injectable()
export class ContactServiceService {
  currentContact: Object;
  constructor() { }

  setCurrentContact(contact) { 
    this.currentContact = contact; 
    console.log(this.currentContact);
  }



}

