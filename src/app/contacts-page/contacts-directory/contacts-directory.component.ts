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
  contactService: ContactServiceService;
  router: Router;

  constructor(contactService:ContactServiceService, router:Router) {
    this.contactService = contactService;
    this.router = router;
  }
   

  ngOnInit() {
    this.contacts = this.contactService.contacts;
  }


  backtohome() {
    this.router.navigateByUrl("");
  }

}
