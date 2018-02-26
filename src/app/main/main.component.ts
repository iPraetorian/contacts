import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  contacts: Array<Object>;
  test: number;
  router: Router;

  constructor(router:Router) {
    this.router = router
   
   /*  this.contacts = [{
      "firstName": "Drew",
      "lastName": "Morris"
    },
    {
      "firstName": "Hayden",
      "lastName": "Berge"
    }] */
  }

  ngOnInit() {
  }
  viewcontacts(){
    this.router.navigateByUrl("contacts");

  }
}
