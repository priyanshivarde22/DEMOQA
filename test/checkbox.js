const { Builder , By , Key} = require("selenium-webdriver");
const Chrome = require('selenium-webdriver/chrome')
const assert = require ("assert");
const should = require("chai").should();
require('chromedriver');
const scroll = require('../helpers/scrollwindow');


//describe block

describe("add another todo tests",function(){

    // it block

    it("successfully adds an another todo to applocation", async function(){

        const driver = await new Builder()
          .forBrowser('chrome')
          .build();
    
        await driver.manage().window().maximize();
        //let driver = await new Builder().forBrowser('chrome').build();

        await driver.get("https://demoqa.com/checkbox");
        
        await driver.findElement(By.xpath("//button[@aria-label='Toggle']")).click();
        await driver.findElement(By.xpath("//input[@id='tree-node-desktop']//..//..//button")).click();
        await driver.findElement(By.xpath("//span[text()='Notes']/preceding-sibling::span[@class='rct-checkbox']")).click();
        await driver.findElement(By.xpath("//span[text()='Commands']/preceding-sibling::span[@class='rct-checkbox']")).click();
        await driver.findElement(By.xpath("//label[@for='tree-node-documents']/preceding-sibling::button[@class='rct-collapse rct-collapse-btn']")).click();
        await driver.findElement(By.xpath("//label[@for='tree-node-workspace']/preceding-sibling::button[@class='rct-collapse rct-collapse-btn']")).click();
        await driver.findElement(By.xpath("//span[text()='React']/preceding-sibling::span[@class='rct-checkbox']")).click();
        await driver.findElement(By.xpath("//span[text()='Angular']/preceding-sibling::span[@class='rct-checkbox']")).click();
        await driver.findElement(By.xpath("//span[text()='Veu']/preceding-sibling::span[@class='rct-checkbox']")).click();
        await driver.findElement(By.xpath("//label[@for='tree-node-office']/preceding-sibling::button[@class='rct-collapse rct-collapse-btn']")).click();
        await driver.findElement(By.xpath("//span[text()='Public']/preceding-sibling::span[@class='rct-checkbox']")).click();
        await driver.findElement(By.xpath("//span[text()='Private']/preceding-sibling::span[@class='rct-checkbox']")).click();
        await driver.findElement(By.xpath("//span[text()='Classified']/preceding-sibling::span[@class='rct-checkbox']")).click();
        await scroll.srollWindow(driver,"500");
        await driver.findElement(By.xpath("//span[text()='General']/preceding-sibling::span[@class='rct-checkbox']")).click();
        await driver.findElement(By.xpath("//label[@for='tree-node-downloads']/preceding-sibling::button[@class='rct-collapse rct-collapse-btn']")).click();
        await driver.findElement(By.xpath("//span[text()='Word File.doc']/preceding-sibling::span[@class='rct-checkbox']")).click();
        await driver.findElement(By.xpath("//span[text()='Excel File.doc']/preceding-sibling::span[@class='rct-checkbox']")).click();
       
            
        let todoText = await driver.findElement(By.xpath("//span[text()='You have selected :']")).getText();
        let todoTexta = await driver.findElement(By.xpath("//span[text()='desktop']")).getText();
        let todoTextb = await driver.findElement(By.xpath("//span[text()='notes']")).getText();
        let todoTextc = await driver.findElement(By.xpath("//span[text()='commands']")).getText();
        let todoTextd = await driver.findElement(By.xpath("//span[text()='react']")).getText();
        let todoTexte = await driver.findElement(By.xpath("//span[text()='angular']")).getText();
        let todoTextf = await driver.findElement(By.xpath("//span[text()='veu']")).getText();
        let todoTextg = await driver.findElement(By.xpath("//span[text()='Office']")).getText();
        let todoTexth = await driver.findElement(By.xpath("//span[text()='public']")).getText();
        let todoTexti = await driver.findElement(By.xpath("//span[text()='private']")).getText();
        let todoTextj = await driver.findElement(By.xpath("//span[text()='classified']")).getText();
        let todoTextk = await driver.findElement(By.xpath("//span[text()='general']")).getText();
        let todoTextl = await driver.findElement(By.xpath("//span[text()='downloads']")).getText();
        let todoTextm = await driver.findElement(By.xpath("//span[text()='wordFile']")).getText();
        let todoTextn = await driver.findElement(By.xpath("//span[text()='excelFile']")).getText();
        
        // asser using node assertion
        await assert.strictEqual(todoText,"You have selected :");
        await assert.strictEqual(todoTexta,"desktop");
        await assert.strictEqual(todoTextb,"notes");
        await assert.strictEqual(todoTextc,"commands");
        await assert.strictEqual(todoTextd,"react");
        await assert.strictEqual(todoTexte,"angular");
        await assert.strictEqual(todoTextf,"veu");
        await assert.strictEqual(todoTextg,"Office");
        await assert.strictEqual(todoTexth,"public");
        await assert.strictEqual(todoTexti,"private");
        await assert.strictEqual(todoTextj,"classified");
        await assert.strictEqual(todoTextk,"general");
        await assert.strictEqual(todoTextl,"downloads");
        await assert.strictEqual(todoTextm,"wordFile");
        await assert.strictEqual(todoTextn,"excelFile");
        
        // sert using chai should
        
        todoText.should.equal("You have selected :");
        todoTexta.should.equal("desktop");
        todoTextb.should.equal("notes");
        todoTextc.should.equal("commands");
        todoTextd.should.equal("react");
        todoTexte.should.equal("angular");
        todoTextf.should.equal("veu");
        todoTextg.should.equal("Office");
        todoTexth.should.equal("public");
        todoTexti.should.equal("private");
        todoTextj.should.equal("classified");
        todoTextk.should.equal("general");
        todoTextl.should.equal("downloads");
        todoTextm.should.equal("wordFile");
        todoTextn.should.equal("excelFile");

        
        
        //await driver.quit();

    });


});
