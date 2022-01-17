# Flixbus
Flixbus Checkout Page

Initiate a WebdriverIO Setup

Create a Web driver IO Project using following command:

npm init wdio ./FLIXBUSAUTOMATION

Create pageobjects typescript files contain web elements of different pages:
home.page.ts (Contains web element of the Home Page of https://global.flixbus.com/)
page.ts (Generic file which is used by all other page files)
checkout.page.ts (Contains web element of the checkout page)
listing.page.ts (Contains web element of the listing page of buses available)

Test files are placed under spec folder.

We have two spec files as follows:
flixbus.checkout.ts (Contains script for Flixbus Checkout Page test cases)

The allure report is configured to view the test result status.

The suite can be run using the following command:
npx wdio run ./wdio.conf.ts

To run specific test spec file we can use the below commands:
npx wdio run ./wdio.conf.ts --spec flixbus.checkout.ts


Total Number of Test Cases: 5
FlixBus Application Checkout Page Test Test Cases:5

Allure Report can be generated using below command (allure generate ./allure-results --clean && allure open)
which is already written under script section in package.json:

"scripts": {
        "wdio": "wdio run wdio.conf.ts",
        "allure": "allure generate ./allure-results --clean && allure open"}