import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get passengersLabel() {
        return $('//h2[contains(text(),"Passengers")]')
    }
    
    public get passengerFirstNameTxtBox(){
        return $('//input[@name="passengers.0.firstName"]')
    }

    public get passengerLastNameTxtBox(){
        return $('//input[@name="passengers.0.lastName"]')
    }

    public get passengerEmailTxtBox(){
        return $('//input[@name="contact.email"]')
    }

    public get passengerPhoneNumberTxtBox(){
        return $('//input[@name="contact.phoneNumber"]')
    }

    public get paymentItemPaywithCC()
    {
        return $('fieldset.hcr-fieldset-2-4-3>div+div>div>div>div>div>label')
    }

    public get paymentItemPaywithGoogle()
    {
        return $('//label[@for="adyen_paywithgoogle"]')
    }

    public get paymentItemPaywithPaypal()
    {
        return $('//input[@name="payment_item"][@id="braintree_PAYPAL"]')
    }

    public get payGooglePay()
    {
        return $('//button[@aria-label="Google Pay"]')
    }

    public get cardNumberSpan()
    {
        return $('//span[@data-cse="encryptedCardNumber"]')
    }

    public get cardDetailsFrame()
    {
        return $('//iframe[@class="js-iframe" and @title="Iframe for secured card number"]')
    }

    public get cardNumberTxtBox()
    {
         return $('//input[@id="shiftTabField"]')
    }

    public get expiryDateTxtBox()
    {
        return $('//input[@data-fieldtype="encryptedExpiryDate"]')
    }

    public get cvvTxtBox()
    {
        return $('//input[@data-fieldtype="encryptedSecurityCode"]')
    }

    public get cardHolderNameTxtBox()
    {
    return $('//input[@id="adyen-checkout-holderName-1642312387296"]')
    }

    public get invoiceChkBox()
    {
    return $('//div[contains(text(),"I require an invoice.")]')
    }
    public get termsConditionsChkBox()
    {
    return $('label.hcr-checkbox__label-2-4-3')
    }

    public get proceedToPaymentBtn()
    {
    return $('//button[@data-test="payment-button"]')
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    public open(): Promise<string> {
        return super.open();
    }
}

export default new CheckoutPage();
