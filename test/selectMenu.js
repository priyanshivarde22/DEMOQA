const { Builder , By , Key} = require("selenium-webdriver");
const Chrome = require('selenium-webdriver/chrome')
const assert = require ("assert");
const should = require("chai").should();
require('chromedriver');
const scroll = require('../helpers/scrollwindow');


const Keys = {
    ENTER: '\uE007',
}

describe("describe is executing..",function(){

    it("It function is executing...",async function(){

        const driver = await new Builder()
        .forBrowser('chrome')
        .build();
        
        await driver.manage().window().maximize();
        await driver.get("https://demoqa.com/select-menu");


        await driver.findElement(By.xpath("//div[text()='Select Option']")).click();

        await driver.findElement(By.id("react-select-2-input")).sendKeys("Group 1, option 2");
        await driver.findElement(By.id("react-select-2-input")).sendKeys(Keys.ENTER);


        await driver.findElement(By.xpath("//div[text()='Select Title']")).click();

        await driver.findElement(By.id("react-select-3-input")).sendKeys("Dr.");
        await driver.findElement(By.id("react-select-3-input")).sendKeys(Keys.ENTER);

        await scroll.srollWindow(driver,"500");
        await driver.findElement(By.id("oldSelectMenu")).click();
        await driver.findElement(By.xpath("//option[text()='Blue']")).click();
        await driver.findElement(By.id("oldSelectMenu")).sendKeys(Keys.ENTER);

       
        

          await driver.findElement(By.xpath("//div[text()='Select...']")).click();

          await driver.findElement(By.id("react-select-4-input")).sendKeys("Red");
          await driver.findElement(By.id("react-select-4-input")).sendKeys(Keys.ENTER);
          await driver.findElement(By.id("react-select-4-input")).sendKeys("Green");
           await driver.findElement(By.id("react-select-4-input")).sendKeys(Keys.ENTER);
          await driver.findElement(By.id("react-select-4-input")).sendKeys("Blue");
          await driver.findElement(By.id("react-select-4-input")).sendKeys(Keys.ENTER);

          await driver.findElement(By.xpath("//option[text()='Saab']")).click();








    });

});