import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ListingPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get topMostReserveSeat() {
        return $('(//span[@data-e2e="search-result-prices"])')
    }
    
    public get outBoundTripLabel()
    {
        return $('//div[@data-e2e="search-result-title"]')
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    public open(): Promise<string> {
        return super.open();
    }
}

export default new ListingPage();
