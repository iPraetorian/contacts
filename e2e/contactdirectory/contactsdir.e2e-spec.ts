import { browser, by, By, $, $$, Button, ExpectedConditions, element } from 'protractor';
import { contactDirPage } from './contactdirectory.po';

describe('Contact directory', () => {
    let page: contactDirPage;
    beforeEach(() => {
        page = new contactDirPage;
    });

    it('should click view contacts button', () => {
        element(by.buttonText('View Contacts')).click();
        expect(page.getContactDirectory()).toContain('Contact Directory');
        expect(page.getContactDirectoryButton()).toContain('Home');

    });
});
