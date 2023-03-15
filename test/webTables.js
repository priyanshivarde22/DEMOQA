const {By, Key, Builder} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const assert = require("assert");
const should = require("chai").should();
require("chromedriver");

describe ("this function is executing",function(){

    it("it function is executing", async function(){

        const driver = await new Builder().forBrowser('chrome').build();

        await driver.manage().window().maximize();

        await driver.get("https://demoqa.com/webtables");

        await driver.findElement(By.xpath("//button[@id='addNewRecordButton']")).click();

        await driver.findElement(By.xpath("//input[@id='firstName']")).sendKeys("Priyam");
        await driver.findElement(By.xpath("//input[@id='lastName']")).sendKeys("Patel");
        await driver.findElement(By.xpath("//input[@id='userEmail']")).sendKeys("priyampatel@gmail.com");
        await driver.findElement(By.xpath("//input[@id='age']")).sendKeys("22");
        await driver.findElement(By.xpath("//input[@id='salary']")).sendKeys("23000");
        await driver.findElement(By.xpath("//input[@id='department']")).sendKeys("EC");
        await driver.findElement(By.xpath("//button[@id='submit']")).click();

        let firstName = await driver.findElement(By.xpath("(//div[@role='row'])[5]/div[@role='gridcell'][1]")).getText();
        let lastName = await driver.findElement(By.xpath("(//div[@role='row'])[5]/div[@role='gridcell'][2]")).getText();
        let age = await driver.findElement(By.xpath("(//div[@role='row'])[5]/div[@role='gridcell'][3]")).getText();
        let userEmail = await driver.findElement(By.xpath("(//div[@role='row'])[5]/div[@role='gridcell'][4]")).getText();
        let salary = await driver.findElement(By.xpath("(//div[@role='row'])[5]/div[@role='gridcell'][5]")).getText();
        let department = await driver.findElement(By.xpath("(//div[@role='row'])[5]/div[@role='gridcell'][6]")).getText();

        

        await assert.strictEqual(firstName,"Priyam");
        await assert.strictEqual(lastName,"Patel");
        
        await assert.strictEqual(age,"22");
        await assert.strictEqual(userEmail,"priyampatel@gmail.com");
        await assert.strictEqual(salary,"23000");
        await assert.strictEqual(department,"EC");

        firstName.should.equal("Priyam");
        lastName.should.equal("Patel");
        
        age.should.equal("22");
        userEmail.should.equal("priyampatel@gmail.com");
        salary.should.equal("23000");
        department.should.equal("EC");

       await driver.findElement(By.xpath("//span[@id='edit-record-4']")).click();

       await driver.findElement(By.xpath("//input[@id='age']")).clear();
       await driver.findElement(By.xpath("//input[@id='age']")).sendKeys("21");


       await driver.findElement(By.xpath("//button[@id='submit']")).click();

       let age1 = await driver.findElement(By.xpath("(//div[@role='row'])[5]/div[@role='gridcell'][3]")).getText();

       await assert.strictEqual(age1,"21");
       age1.should.equal("21");

       await driver.findElement(By.xpath("//span[@id='delete-record-4']")).click();

       //await driver.quit();

    });

    //it("Editing the testcase...",async function(){

        //const driver = await new Builder().forBrowser('chrome').build();

        //await driver.manage().window().maximize();

        //await driver.get("https://demoqa.com/webtables");

        //await driver.findElement(By.xpath("//span[@id='edit-record-4']")).click();

       


    //});
});