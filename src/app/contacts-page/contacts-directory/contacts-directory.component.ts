import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../contact-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-directory',
  templateUrl: './contacts-directory.component.html',
  styleUrls: ['./contacts-directory.component.css']
})
export class ContactsDirectoryComponent implements OnInit {
  contacts: Array<object>;
  contactService: Object;
  router: Router;

  constructor(contactService:ContactServiceService, router:Router) {
    this.contactService = contactService;
    this.router = router;
  }
   

  ngOnInit() {
    this.contacts = [
      {
        "firstName": "Erlich",
        "lastName": "Bachman",
        "title": "Investor",
        "telephoneNumber": '555-555-5555',
        "img_src": "assets/images/ErlichB.jpeg"
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

  backtohome() {
    this.router.navigateByUrl("");
  }

}
