import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-contact-cards',
  templateUrl: './contact-cards.component.html',
  styleUrls: ['./contact-cards.component.css']
})
export class ContactCardsComponent implements OnInit {
  router:Router;

  @Input() contact: object;

  constructor(router:Router) {
    this.router = router
  }



  ngOnInit() {
    
  }
  navigate(){
    this.router.navigateByUrl("contactdetail");
  }

}
