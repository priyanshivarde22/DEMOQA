const { Builder, By, Key , until} = require("selenium-webdriver");
const Chrome = require("selenium-webdriver/chrome");
const assert = require("assert");
const { expect } = require("chai");
const should = require("chai").should();
require("chromedriver");
const scroll = require('../helpers/scrollwindow');

describe("describe is executing..", function () {
    let driver;
    // before(async function () {
        
    // });

    it("It function is executing...", async function () {
        const driver = await new Builder().forBrowser("chrome").build();
        await driver.manage().window().maximize();
        await driver.get("https://demoqa.com/login");
        // await driver.findElement(By.xpath("//button[@class='btn btn-primary']")).click();
        await driver.findElement(By.xpath("//input[@id='userName']")).sendKeys("testing");
        await driver.findElement(By.xpath("//input[@id='password']")).sendKeys("@4591*uyiP");
        await driver.findElement(By.xpath("//button[@id='login']")).click();
        await driver.wait(until.elementLocated(By.xpath("//label[text()='Books : ']")), 30000);
        await scroll.srollWindow(driver,"500");
        await driver.findElement(By.xpath('//button[text()="Go To Book Store"]')).click();
        // const BookStoreHeaderIsVisible = await driver.findElement(By.xpath, '//div[@class="main-header"][text()="Book Store"]').isEnabled()
        // expect(BookStoreHeaderIsVisible).to.be.true
        const isVisible = await driver.findElement(By.css('[href*="/books?book"]')).isDisplayed();
        expect(isVisible).to.be.true;
        await driver.findElement(By.css('[href="/books?book=9781449325862"]')).click();
    });

   
});
