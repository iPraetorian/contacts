import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {

    return browser.get('/');
  }

  getContactPageText() {
    return element(by.css('app-root h1')).getText();
  }

  getViewContactsButton() {
    return element(by.cssContainingText('button', 'View Contacts'));
  }

 

  }

