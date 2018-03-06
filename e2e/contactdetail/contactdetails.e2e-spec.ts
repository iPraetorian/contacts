import { browser, by, By, $, $$, Button, ExpectedConditions, element } from 'protractor';
import { cLandingPage } from './contactdetail.po';




describe('contact list details', () => {
    let page: cLandingPage;
});

it('should display contact details', () => {
    expect(browser.getContactDetail()).toContain('Contact Details');
});



