const { Builder , By , Key} = require("selenium-webdriver");
const Chrome = require('selenium-webdriver/chrome')
const assert = require ("assert");
const should = require("chai").should();

describe("DEMOQA testing", function(){
    let textBox
    before(async()=> {
        driver = await new Builder().forBrowser('chrome').build()
        await driver.manage().window().maximize() 
    });

    it("TextBox Testing", async ()=>{
        txtBox = new textBox(driver)

        await txtBox.GotoTxtBoxPage()
        await txtBox.FillUpLoginForm('dhruvi.balar+shopify@gmail.com','12qw!@QWDB')
        await txtBox.verifyHomePageDisplayed()
    });

});
