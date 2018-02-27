import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-lists',
  templateUrl: './contacts-lists.component.html',
  styleUrls: ['./contacts-lists.component.css']
})
export class ContactsListsComponent implements OnInit {
  contacts: Array<object>;

  constructor() { }

  ngOnInit() {
    this.contacts = [
      {
        "firstName": "patient1",
        "lastName": "zero"
      },
      {
        "firstName": "patient2",
        "lastName": "zero"
      },
      {
        "firstName": "patient3",
        "lastName": "zero"
      },
      {
        "firstName": "patient4",
        "lastName": "zero"
      }
    ]
  }

}
