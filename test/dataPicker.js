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

        await driver.get("https://demoqa.com/date-picker");

        await driver.findElement(By.xpath("(//div[@class='react-datepicker__input-container'])[1]")).click();
        await driver.findElement(By.xpath("//select[@class='react-datepicker__month-select']")).click();
        await driver.findElement(By.xpath("//option[text()='January']")).click();
        await driver.findElement(By.xpath("//select[@class='react-datepicker__year-select']")).click();
        await driver.findElement(By.xpath("//option[text()='1999']")).click();
        await driver.findElement(By.xpath("//div[@class='react-datepicker__day react-datepicker__day--020']")).click();


        await driver.findElement(By.xpath("(//div[@class='react-datepicker__input-container'])[2]")).click();
        await driver.findElement(By.xpath("//span[@class='react-datepicker__month-read-view--down-arrow']")).click();
        await driver.findElement(By.xpath("//div[text()='January']")).click();
        await driver.findElement(By.xpath("//div[text()='15']")).click();
        await driver.findElement(By.xpath("//span[@class='react-datepicker__year-read-view--down-arrow']")).click();
       
        await driver.findElement(By.xpath("//div[@class='react-datepicker__year-option react-datepicker__year-option--selected_year']")).click();
        

        await driver.findElement(By.xpath("//li[text()='11:45']")).click();


    });

});