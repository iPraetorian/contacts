import { AppPage } from './app.po';
import { element, by, By, $, $$, Button, ExpectedConditions, browser } from 'protractor';

describe('contact-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  it('should display landing page', () => {
    page.navigateTo();
    expect(page.getContactPageText()).toEqual('Contact List Project');
    expect(page.getViewContactsButton()).toEqual('View Contacts');
  });
});



