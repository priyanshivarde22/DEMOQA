const { Builder , By , Key} = require("selenium-webdriver");
const Chrome = require('selenium-webdriver/chrome')
const assert = require ("assert");
const should = require("chai").should();
require('chromedriver');
const scroll = require('../helpers/scrollwindow');


//describe block

describe("add another todo tests",function(){

    // it block

    it("successfully adds an another todo to applocation", async function(){

        const driver = await new Builder()
          .forBrowser('chrome')
          .build();
    
        await driver.manage().window().maximize();
        //let driver = await new Builder().forBrowser('chrome').build();

        await driver.get("https://demoqa.com/modal-dialogs");

        await driver.findElement(By.id('showSmallModal')).click();
        //await driver.findElement(By.id('closeSmallModal')).click();

        await driver.findElement(By.xpath("//span[@aria-hidden='true']")).click();
       
        await driver.findElement(By.id('showLargeModal')).click();
        //await driver.findElement(By.id('closeLargeModal')).click();

        await driver.findElement(By.xpath("//span[@aria-hidden='true']")).click();



    });

});