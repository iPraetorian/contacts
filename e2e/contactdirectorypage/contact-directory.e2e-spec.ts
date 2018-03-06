import { ConDirPage } from './contact-directory.po';
import { element, by, By, $, $$, Button, ExpectedConditions, browser } from 'protractor';

describe('contact directory list', () => {
    let page: ConDirPage;

    beforeEach(() => {
        page = new ConDirPage

});

it('should display a list of contacts', () => {
    expect(page.getContactDirectoryInfo()).toEqual('Contacts Directory');
});
});