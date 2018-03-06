import {browser, by, By, element } from 'protractor';
import { Element } from '@angular/compiler';

export class cLandingPage {
    navigateTo() {
        return browser.get('/');
    }

    getContactDetail() {
        return(element(by.css('app-contact-card-detail'))).getText();
        
    }

}