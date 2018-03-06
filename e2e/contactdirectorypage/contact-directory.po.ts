import { browser, by, element } from 'protractor';
import { Element } from '@angular/compiler';

export class ConDirPage {
    navigateTo() {
        return browser.get('/');
    }
getViewContactsButton() {
    return element(by.buttonText('View Contacts')).click();
}

getContactDirectoryInfo() {
    return element(by.id('cdDiv'));
}


}