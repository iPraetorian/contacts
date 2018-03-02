import { Injectable } from '@angular/core';

@Injectable()
export class ContactServiceService {
  currentContact: Object;
  contacts: Array<Object>;
  constructor() { 
    this.contacts = [{
      "firstName": "Erlich",
      "lastName": "Bachman",
      "title": "Investor",
      "telephoneNumber": '555-555-5555',
      "img_src": "assets/images/ErlichB.jpeg"
    }]
  }

  setCurrentContact(contact) { 
    this.currentContact = contact; 
    console.log(this.currentContact);
  }



}

