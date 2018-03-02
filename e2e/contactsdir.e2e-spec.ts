import { browser, by, By, $, $$, Button, ExpectedConditions, element } from 'protractor';
import { AppPage } from './app.po';

describe('Contact directory', () => {
    let page: AppPage;
    beforeEach(() => {
        page = new AppPage;
    });

    it('should click view contacts button', () => {
        element(by.buttonText('View Contacts')).click();
        expect(page.getContactDirectory()).toContain('Contact Directory');
        expect(page.getContactDirectoryButton()).toContain('Home');

    });
});

