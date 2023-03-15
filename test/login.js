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

        await driver.get("https://demoqa.com/login");
        await driver.findElement(By.xpath("//button[text()='New User']")).click();
        await driver.findElement(By.xpath("//input[@id='firstname']")).sendKeys("Priyam");
        
        await driver.findElement(By.xpath("//input[@id='lastname']")).sendKeys("Patel");
        await driver.findElement(By.xpath("//input[@id='userName']")).sendKeys("priyam_patel");
        await driver.findElement(By.xpath("//input[@id='password']")).sendKeys("Priyam1234");

      await driver.findElement(By.xpath("//button[text()='Register']")).click();
    //   await driver.findElement(By.xpath("//button[text()='Back to Login']")).click();
    //   await driver.findElement(By.xpath("//input[@id='userName']")).sendKeys("priyam_patel");
    //   await driver.findElement(By.xpath("//input[@id='password']")).sendKeys("Priyam1234");
    //   await driver.findElement(By.xpath("//button[text()='Login']")).click();






    });

});