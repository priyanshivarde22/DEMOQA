const { Builder , By , Key,until} = require("selenium-webdriver");
const Chrome = require('selenium-webdriver/chrome')
const assert = require ("assert");
const should = require("chai").should();
const timeunit = require('timeunit')


//describe block

describe("add todo tests",function(){

    // it block

    it("successfully adds a todo to applocation", async function(){
    
        const driver = await new Builder()
          .forBrowser('chrome')
          .build();
    
        await driver.manage().window().maximize();
        // let driver = await new Builder().forBrowser('chrome').build();

        await driver.get("https://demoqa.com/alerts");

        await driver.findElement(By.id('alertButton')).click();

        await driver.switchTo().alert().accept();

        await driver.findElement(By.id('timerAlertButton')).click();

        await driver.manage().setTimeouts( { implicit: 5000 } )
        await driver.switchTo().alert().accept();

        await driver.findElement(By.id('promtButton')).click();
        await driver.switchTo().alert().sendKeys("priyanshi");
        await driver.switchTo().alert().accept();



    });

});