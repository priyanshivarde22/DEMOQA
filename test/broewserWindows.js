const { Builder , By , Key} = require("selenium-webdriver");
const Chrome = require('selenium-webdriver/chrome')
const assert = require ("assert");
const should = require("chai").should();


//describe block

describe("add todo tests",function(){

    // it block

    it("successfully adds a todo to applocation", async function(){
    
        const driver = await new Builder()
          .forBrowser('chrome')
          .build();
    
        await driver.manage().window().maximize();
        // let driver = await new Builder().forBrowser('chrome').build();

        await driver.get("https://demoqa.com/browser-windows");
        const originalWindow = await driver.getWindowHandle();

        await driver.findElement(By.id('tabButton')).click();

        await driver.wait(
            async () => (await driver.getAllWindowHandles()).length === 2
            );
           
           //Loop through until we find a new window handle
           const windows = await driver.getAllWindowHandles();
              windows.forEach(async handle => {
                   if (handle !== originalWindow) {
                   await driver.switchTo().window(handle);
               }
           });
   
        let url1 = await driver.getCurrentUrl();
        url1.should.equal("https://demoqa.com/browser-windows");
        //console.log(url1);

        await driver.close();
        driver.switchTo().window(originalWindow);

        await driver.findElement(By.id('windowButton')).click();

        await driver.wait(
            async () => (await driver.getAllWindowHandles()).length === 2
            );
           
           //Loop through until we find a new window handle
           const window = await driver.getAllWindowHandles();
              window.forEach(async handle => {
                   if (handle !== originalWindow) {
                   await driver.switchTo().window(handle);
               }
           });


        let url2 = await driver.getCurrentUrl();
        url2.should.equal("https://demoqa.com/browser-windows");
        await driver.close();
        driver.switchTo().window(originalWindow);
         


        await driver.findElement(By.id('messageWindowButton')).click();

        await driver.wait(
            async () => (await driver.getAllWindowHandles()).length === 2
            );
           
           //Loop through until we find a new window handle
           const windowz = await driver.getAllWindowHandles();
              windowz.forEach(async handle => {
                   if (handle !== originalWindow) {
                   await driver.switchTo().window(handle);
               }
           });


        let url3 = await driver.getCurrentUrl();
        url3.should.equal("https://demoqa.com/browser-windows");
        await driver.close();
        driver.switchTo().window(originalWindow);


    });

});
