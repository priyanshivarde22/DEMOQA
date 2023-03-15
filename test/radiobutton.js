const { Builder , By , Key} = require("selenium-webdriver");
const Chrome = require('selenium-webdriver/chrome')
const assert = require ("assert");
const should = require("chai").should();
require('chromedriver');



//describe block

describe("add another todo tests",function(){

    // it block

    it("successfully adds an another todo to applocation", async function(){

        const driver = await new Builder()
          .forBrowser('chrome')
          .build();
    
        await driver.manage().window().maximize();

        await driver.get("https://demoqa.com/radio-button");

        await driver.findElement(By.id('yesRadio')).click();

        let todoText = await driver.findElement(By.xpath("//p[text()='You have selected ']")).getText();
        let todoTexta = await driver.findElement(By.xpath("//span[text()='Yes']")).getText();


        await assert.strictEqual(todoText,"You have selected ");
        await assert.strictEqual(todoTexta,"Yes");

        todoText.should.equal("You have selected ");
        todoTexta.should.equal("Yes");

    });
});