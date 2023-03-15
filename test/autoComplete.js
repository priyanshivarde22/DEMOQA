const { Builder , By , Key} = require("selenium-webdriver");
const Chrome = require('selenium-webdriver/chrome')
const assert = require ("assert");
const should = require("chai").should();
require('chromedriver');
const scroll = require('../helpers/scrollwindow');


const Keys = {
    ENTER: '\uE007',
}


//describe block

describe("add another todo tests",function(){

    // it block

    it("successfully adds an another todo to applocation", async function(){

        const driver = await new Builder()
          .forBrowser('chrome')
          .build();
    
        await driver.manage().window().maximize();
        //let driver = await new Builder().forBrowser('chrome').build();

        await driver.get("https://demoqa.com/auto-complete");

        await driver.findElement(By.xpath("//div[@class='auto-complete__value-container auto-complete__value-container--is-multi css-1hwfws3']")).click();
        await driver.findElement(By.id("autoCompleteMultipleInput")).sendKeys("Red");
        await driver.findElement(By.id("autoCompleteMultipleInput")).sendKeys(Keys.ENTER);
        await driver.findElement(By.id("autoCompleteMultipleInput")).sendKeys("Green");
        await driver.findElement(By.id("autoCompleteMultipleInput")).sendKeys(Keys.ENTER);


        await driver.findElement(By.xpath("//div[@class='auto-complete__value-container css-1hwfws3']")).click();
        await driver.findElement(By.id("autoCompleteSingleInput")).sendKeys("Red");
        await driver.findElement(By.id("autoCompleteSingleInput")).sendKeys(Keys.ENTER);

        
    });

});