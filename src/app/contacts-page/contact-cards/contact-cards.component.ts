import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ContactServiceService } from '../contact-service.service';

@Component({
  selector: 'app-contact-cards',
  templateUrl: './contact-cards.component.html',
  styleUrls: ['./contact-cards.component.css']
})
export class ContactCardsComponent implements OnInit {
  router:Router;
  contactService: ContactServiceService;

  @Input() contact: object;

  constructor(router:Router, contactService:ContactServiceService) {
    this.router = router
    this.contactService = contactService;
  }



  ngOnInit() {
    
  }
  navigate(){
    this.contactService.setCurrentContact(this.contact)
    this.router.navigateByUrl("contactdetail");
  }

}
