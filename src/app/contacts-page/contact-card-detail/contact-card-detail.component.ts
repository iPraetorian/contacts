import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../contact-service.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-contact-card-detail',
  templateUrl: './contact-card-detail.component.html',
  styleUrls: ['./contact-card-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  router: Router;
  //routermodule: RouterModule;
  contactService: ContactServiceService;
  currentContact: Object;

  constructor(router: Router, contactService: ContactServiceService, routermodule: RouterModule) {
    this.router = router
    //this.routermodule = routermodule
    this.contactService = contactService;
  }

  ngOnInit() {
    this.currentContact = this.contactService.currentContact;

  }
  returntohome() {
    this.router.navigateByUrl("");
  }
  returntodirectory() {
    this.router.navigateByUrl('/contacts');
  }


}
