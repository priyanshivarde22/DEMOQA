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

        await driver.get("https://demoqa.com/menu#");

        //const hoverManu1 = await driver.findElement(By.xpath("//a[text()='Main Item 1']"));

         const hoverManu1 = driver.findElement(By.xpath("//a[text()='Main Item 1']"));
          const action = driver.actions({async: true});
          await action.move({origin: hoverManu1}).perform();

         const hoverManu2 = driver.findElement(By.xpath("//a[text()='Main Item 2']"));
         const action1 = driver.actions({async: true});
         await action1.move({origin: hoverManu2}).perform();

         const subSubList  = driver.findElement(By.xpath("//a[text()='SUB SUB LIST »']"));
         const action2 = driver.actions({async: true});
         await action2.move({origin: subSubList}).perform();

         const subSubItem1  = driver.findElement(By.xpath("//a[text()='Sub Sub Item 1']"));
         const action3 = driver.actions({async: true});
         await action3.move({origin: subSubItem1}).perform();

         const hoverManu3  = driver.findElement(By.xpath("//a[text()='Main Item 3']"));
         const action4 = driver.actions({async: true});
         await action4.move({origin: hoverManu3}).perform();





    });

});