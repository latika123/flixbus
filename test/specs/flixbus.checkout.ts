import HomePage from '../pageobjects/home.page';
import ListingPage from '../pageobjects/listing.page';
import CheckoutPage from '../pageobjects/checkout.page';

describe('FlixBus Application Checkout Page Test', () => {
    it('should successfully navigate to home page', async () => {
        await HomePage.open();
        browser.maximizeWindow();
        await expect(HomePage.flixBusIcon).toBeExisting();     
    });

    it('should successfully navigate to listing page', async () => {
      await expect(HomePage.departureDateCalendar).toBeClickable();
      await HomePage.departureDateCalendar.click();
      await expect(HomePage.selectDate).toBeClickable();
      await HomePage.selectDate.click();
      await expect(HomePage.searchButton).toBeClickable();
      await HomePage.searchButton.click();
      await expect(ListingPage.outBoundTripLabel).toBeExisting();
      console.log(await browser.getUrl());
      expect(browser.getUrl()).toHaveText("https://shop.global.flixbus.com/search")
      
    });

    it('should successfully navigate to checkout page', async () => {
      await expect(ListingPage.topMostReserveSeat).toBeClickable();
      await ListingPage.topMostReserveSeat.click();
      await expect(CheckoutPage.passengersLabel).toBeExisting();
      console.log(await browser.getUrl());
      expect(browser.getUrl()).toHaveText("https://shop.global.flixbus.com/checkout"); 
    });

    it('should successfully fill the passenger details', async () => {
      await expect(CheckoutPage.passengerFirstNameTxtBox).toBeExisting();
      await CheckoutPage.passengerFirstNameTxtBox.setValue("Latika")
      await expect(CheckoutPage.passengerLastNameTxtBox).toBeExisting();
      await CheckoutPage.passengerLastNameTxtBox.setValue("Soni")
      await expect(CheckoutPage.passengerEmailTxtBox).toBeExisting();
      await CheckoutPage.passengerEmailTxtBox.setValue("dummy@gmail.com")
    });

    it('should successfully navigate to payment page via google pay option', async () => {
      await CheckoutPage.paymentItemPaywithGoogle.scrollIntoView();
      await expect(CheckoutPage.paymentItemPaywithGoogle).toBeClickable();
      await CheckoutPage.paymentItemPaywithGoogle.click();
      await CheckoutPage.paymentItemPaywithGoogle.click();
      await browser.pause(1000);
      await expect(CheckoutPage.termsConditionsChkBox).toBeClickable();
      await CheckoutPage.termsConditionsChkBox.click();
      await browser.pause(1000);
      await expect(CheckoutPage.payGooglePay).toBeClickable();
      await CheckoutPage.payGooglePay.click();
      await CheckoutPage.payGooglePay.click();
      await browser.pause(1000);
    });


    // it('should successfully navigate to payment page via credit card', async () => {
    //   await CheckoutPage.paymentItemPaywithGoogle.scrollIntoView();
    //   await expect(CheckoutPage.paymentItemPaywithGoogle).toBeClickable();
    //   await CheckoutPage.paymentItemPaywithGoogle.click();
    //   await CheckoutPage.paymentItemPaywithGoogle.click();
      
      

    //   // await CheckoutPage.paymentItemPaywithCC.scrollIntoView();
    //   // await browser.waitUntil(
    //   //   async () => (await CheckoutPage.paymentItemPaywithCC).isClickable(),
    //   //   {
    //   //       timeout: 5000,
    //   //       timeoutMsg: 'expected text to be different after 5s'
    //   //   }
    //   // );
    //   // await expect(CheckoutPage.paymentItemPaywithCC).toBeClickable();
    //   // await CheckoutPage.paymentItemPaywithCC.click();
    //   // await CheckoutPage.paymentItemPaywithCC.click();
    //   // await browser.waitUntil(
    //   //   async () => (await CheckoutPage.cardNumberTxtBox).isClickable(),
    //   //   {
    //   //       timeout: 5000,
    //   //       timeoutMsg: 'expected text to be different after 5s'
    //   //   }
    //   // );
    //   await browser.pause(1000);
    //   // await CheckoutPage.cardNumberSpan.scrollIntoView();
    //   // await browser.pause(1000);
    //   // await CheckoutPage.cardDetailsFrame.isDisplayed();
    //   // await CheckoutPage.cardDetailsFrame.scrollIntoView();
    //   // browser.switchToFrame($('//iframe[@class="js-iframe" and @title="Iframe for secured card number"]'))
    //   // browser.pause(10000);
    //   // $('//input[@data-fieldtype="encryptedCardNumber"]').isDisplayed()
    //   // $('//input[@data-fieldtype="encryptedCardNumber"]').click()
    //   // await $('//input[@data-fieldtype="encryptedCardNumber"]').setValue("4646464646464644")
    //   // browser.elementSendKeys($('//input[@data-fieldtype="encryptedCardNumber"]'), "4646464646464644")
    //   // await CheckoutPage.cardNumberTxtBox.isDisplayed();
    //   // await CheckoutPage.cardNumberTxtBox.click();
    //   // await CheckoutPage.cardNumberTxtBox.setValue("4646464646464644")

    //   // $('//input[@data-fieldtype="encryptedExpiryDate"]').isDisplayed()
    //   // $('//input[@data-fieldtype="encryptedExpiryDate"]').click()
    //   // $('//input[@data-fieldtype="encryptedExpiryDate"]').setValue("03/30")

    //   // await expect(CheckoutPage.expiryDateTxtBox).toBeExisting();
    //   // await CheckoutPage.expiryDateTxtBox.setValue("03/30")

    //   // $('//input[@data-fieldtype="encryptedSecurityCode"]').isDisplayed()
    //   // $('//input[@data-fieldtype="encryptedSecurityCode"]').click()
    //   // $('//input[@data-fieldtype="encryptedSecurityCode"]').setValue("737")
      
    //   // await expect(CheckoutPage.cvvTxtBox).toBeExisting();
    //   // await CheckoutPage.cvvTxtBox.setValue("737")

    //   // $('//input[@id="adyen-checkout-holderName-1642312387296"]').isDisplayed()
    //   // $('//input[@id="adyen-checkout-holderName-1642312387296"]').click()
    //   // $('//input[@id="adyen-checkout-holderName-1642312387296"]').setValue("Latika")

    //   // await expect(CheckoutPage.cardHolderNameTxtBox).toBeExisting();
    //   // await CheckoutPage.cardHolderNameTxtBox.setValue("Latika")
    //   await expect(CheckoutPage.termsConditionsChkBox).toBeClickable();
    //   await CheckoutPage.termsConditionsChkBox.click();
    //   await browser.pause(1000);
    //   await expect(CheckoutPage.payGooglePay).toBeClickable();
    //   await CheckoutPage.payGooglePay.click();
    //   await CheckoutPage.payGooglePay.click();
    //   await browser.pause(1000);
    // });

   
});
