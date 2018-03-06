import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCardsComponent } from './contact-cards.component';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactServiceService } from '../contact-service.service';

describe('ContactCardsComponent', () => {
  let component: ContactCardsComponent;
  let fixture: ComponentFixture<ContactCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCardsComponent ],
      imports: [ RouterTestingModule ],
      providers: [ContactServiceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
