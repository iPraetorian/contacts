import { AppPage } from './contactlanding.po';
import { element, by, By, $, $$, Button, ExpectedConditions, browser } from 'protractor';

describe('contact list project home page', () => {
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




