/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a page
    */
    public open(): Promise<string> {
        return browser.url(`https://global.flixbus.com/`)
    }

    acceptCookie()
    {
        browser.acceptAlert()
    }
}
