import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-cards',
  templateUrl: './contact-cards.component.html',
  styleUrls: ['./contact-cards.component.css']
})
export class ContactCardsComponent implements OnInit {

  @Input() contact: object;

  constructor() { }

  ngOnInit() {
  }

}
