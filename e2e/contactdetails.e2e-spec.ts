import { browser, by, By, $, $$, Button, ExpectedConditions, element } from 'protractor';
import { AppPage } from './app.po';

describe('Contact details', () => {
    let page: AppPage;
    beforeEach(() => {
        page = new AppPage;
    });

    it('should display contact details', () => {
        expect(page.getContactDetail()).toContain('Contact Details');

    });

});