import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get flixBusIcon() {
        return $(".hcr-header-brand__img-3-0-0");
    }

    public get departureDateCalendar(){
        return $('//input[@data-e2e="departure-date-input-field"]');
    }

    public get selectDate(){
        return $('//span[@data-date="2022-01-27"]');
    }

    public get searchButton(){
    return $('//div[@data-e2e="search-button"]')
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open(): Promise<string> {
        return super.open();
    }
}

export default new HomePage();
