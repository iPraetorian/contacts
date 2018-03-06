import { browser, by, element } from 'protractor';
import { Element } from '@angular/compiler';

export class AppPage {
  navigateTo() {

    return browser.get('/');
  }

  getContactPageText() {
    return element(by.css('app-root h1')).getText();
  }

  getViewContactsButton() {
    return element(by.buttonText('View Contacts')).getText();
  }

}
