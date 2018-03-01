import { AppPage } from './app.po';
import { element, by, Button, browser } from 'protractor';

describe('contact-app App', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
  });


  it('should display landing page', () => {
    page.navigateTo();
    expect(page.getContactPageText()).toEqual('Contact List Project');
  });

  it('should display view contact button clickable', () => {
    page.navigateTo();
    element(element(by.linkText('View Contacts'))).click();
});
}); 
