import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-directory',
  templateUrl: './contacts-directory.component.html',
  styleUrls: ['./contacts-directory.component.css']
})
export class ContactsDirectoryComponent implements OnInit {
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
      },
      {
        "firstName": "patient5",
        "lastName": "zero"
      },
      {
        "firstName": "patient6",
        "lastName": "zero"
      },
      {
        "firstName": "patient7",
        "lastName": "zero"
      },
      {
        "firstName": "patient8",
        "lastName": "zero"
      },
      {
        "firstName": "patient9",
        "lastName": "zero"
      },
      {
        "firstName": "patient10",
        "lastName": "zero"
      }
    ]
  }

}