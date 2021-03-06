import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsDirectoryComponent } from './contacts-directory.component';
import { ContactCardsComponent } from '../contact-cards/contact-cards.component';

describe('ContactsListsComponent', () => {
  let component: ContactsDirectoryComponent;
  let fixture: ComponentFixture<ContactsDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsDirectoryComponent ],
     
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
