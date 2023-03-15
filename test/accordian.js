const { Builder , By , Key} = require("selenium-webdriver");
const Chrome = require('selenium-webdriver/chrome')
const assert = require ("assert");
const should = require("chai").should();
require('chromedriver');
class accordian {
    constructor(driver){
        this.driver = driver
    }
   
async accordianElement(){

        const driver = await new Builder()
        .forBrowser('chrome')
        .build();

        await driver.manage().window().maximize();

        await driver.get("https://demoqa.com/accordian");

        await driver.findElement(By.id("section1Heading")).click();
        await driver.findElement(By.id("section2Heading")).click();
        await driver.findElement(By.id("section3Heading")).click();


    };


}
accordianElement();
module.exports = accordian