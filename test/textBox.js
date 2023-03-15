const { Builder , By , Key} = require("selenium-webdriver");
const Chrome = require('selenium-webdriver/chrome')
const assert = require ("assert");
const { Verify } = require("crypto");
const should = require("chai").should();




describe("add another todo tests",function(){

    // it block

    it("successfully adds an another todo to applocation", async function(){
    

    
       const driver = await new Builder()
       .forBrowser('chrome')
       .build();

    await driver.manage().window().maximize();
   // let driver = await new Builder().forBrowser('chrome').build();
    
   await driver.get("https://demoqa.com/select-menu");
    



await driver.findElement(By.id("userName")).sendKeys("Priyam Patel");
await driver.findElement(By.id("userEmail")).sendKeys("priyampatel@gmail.com");
await driver.findElement(By.id("currentAddress")).sendKeys("B-301,Sainath hight, adajan,Surat.");
await driver.findElement(By.id("permanentAddress")).sendKeys("B-301,Sainath hight, adajan,Surat.");
await driver.findElement(By.id("submit")).click();





let todoText = await driver.findElement(By.xpath("//p[@id='name']")).getText();
let todoTexta = await driver.findElement(By.xpath("//p[@id='email']")).getText();
let todoTextb = await driver.findElement(By.xpath("//p[@id='currentAddress']")).getText();
let todoTextc = await driver.findElement(By.xpath("//p[@id='permanentAddress']")).getText();

// asser using node assertion
await assert.strictEqual(todoText,"Name:Priyam Patel");
await assert.strictEqual(todoTexta,"Email:priyampatel@gmail.com");
await assert.strictEqual(todoTextb,"Current Address :B-301,Sainath hight, adajan,Surat.");
await assert.strictEqual(todoTextc,"Permananet Address :B-301,Sainath hight, adajan,Surat.");


// sert using chai should

todoText.should.equal("Name:Priyam Patel");
todoTexta.should.equal("Email:priyampatel@gmail.com");
todoTextb.should.equal("Current Address :B-301,Sainath hight, adajan,Surat.");
todoTextc.should.equal("Permananet Address :B-301,Sainath hight, adajan,Surat.");


await driver.quit();



    
  
});

});















