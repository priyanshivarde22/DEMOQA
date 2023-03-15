const { Builder , By , Key} = require("selenium-webdriver");
const Chrome = require('selenium-webdriver/chrome')
const assert = require ("assert");
const should = require("chai").should();
require('chromedriver');

describe("describe is executing..",function(){

    it("It function is executing...",async function(){

        const driver = await new Builder()
        .forBrowser('chrome')
        .build();

        await driver.manage().window().maximize();

        await driver.get("https://demoqa.com/selectable");

        await driver.findElement(By.xpath("//li[text()='Cras justo odio']")).click();
        await driver.findElement(By.xpath("//li[text()='Dapibus ac facilisis in']")).click();
        await driver.findElement(By.id("demo-tab-grid")).click();
        await driver.findElement(By.xpath("//li[text()='One']")).click();
        await driver.findElement(By.xpath("//li[text()='Five']")).click();
        await driver.findElement(By.xpath("//li[text()='Six']")).click();

    });

});