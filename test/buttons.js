

const {By, Key, Builder} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const assert = require("assert");
const should = require("chai").should();
require("chromedriver");

describe ("this function is executing",function(){

    it("it function is executing", async function(){

        const driver = await new Builder().forBrowser('chrome').build();

        await driver.manage().window().maximize();

        await driver.get("https://demoqa.com/buttons");

      


         let doubleClick = await driver.findElement(By.id('doubleClickBtn'))
          await driver.actions().doubleClick(doubleClick).perform();

          let getTextDblClick = await driver.findElement(By.xpath("//p[text()='You have done a double click']")).getText();

          await assert.strictEqual(getTextDblClick,"You have done a double click");

          getTextDblClick.should.equal("You have done a double click");
        
         let rightClick = await driver.findElement(By.id('rightClickBtn'))
         await driver.actions().contextClick(rightClick).perform();

          let getTextRightClick = await driver.findElement(By.id("rightClickMessage")).getText();

          await assert.strictEqual(getTextRightClick,"You have done a right click");

         getTextRightClick.should.equal("You have done a right click");

        
   
         await driver.findElement(By.xpath("//button[text()='Click Me']")).click();

         let click = await driver.findElement(By.xpath("//p[text()='You have done a dynamic click']")).getText();

         await assert.strictEqual(click,"You have done a dynamic click");

         click.should.equal("You have done a dynamic click");
        
       
    });

});