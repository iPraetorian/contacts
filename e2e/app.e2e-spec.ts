import { AppPage } from './app.po';
import { element } from 'protractor';

describe('contact-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getContactPageText()).toEqual('People Info');
  });

  it('should display view contacts button', () => {
    page.getViewContactsButton().isPresent();
    page.getViewContactsButton().click();

  })

  it('should render contacts page', ()=> {
    expect(page.getContactPageText()).toContain("The List");
  }) 
});
