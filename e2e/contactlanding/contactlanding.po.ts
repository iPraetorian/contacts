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

  getContactDirectory() {
    return element(by.css('app-root app-contacts-directory')).getText();
  }
  getContactDirectoryButton() {
    return element(by.id('cdBtn')).getText();
  }

  //getContactDetail() {
    //return element(by.
//}
}
