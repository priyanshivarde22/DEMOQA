const {By, Key, Builder} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const assert = require("assert");
const { title } = require("process");
const should = require("chai").should();
require("chromedriver");
const scroll = require('../helpers/scrollwindow');



describe ("this function is executing",function(){

    it("it function is executing", async function(){

        const driver = await new Builder().forBrowser('chrome').build();

        const originalWindow = await driver.getWindowHandle();

        await driver.manage().window().maximize();

        await driver.get("https://demoqa.com/links");

        await driver.findElement(By.xpath("//a[@id='simpleLink']")).click();
       


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
        url1.should.equal("https://demoqa.com/links");

       await driver.close(); 
       await driver.switchTo().window(originalWindow);
    

        

        await driver.findElement(By.xpath("//a[@id='dynamicLink']")).click();

        const windowsa = await driver.getAllWindowHandles();
        windowsa.forEach(async handle => {
          if (handle !== originalWindow) {
            await driver.switchTo().window(handle);
          }
        });
     
        //let title = await driver.getTitle();
        //Wait for the new tab to finish loading content
        //await driver.wait(titleIs('DEMOQA'));
        //title.should.equal("DEMOQA");

      let url = await driver.getCurrentUrl();
       url.should.equal("https://demoqa.com/links");
        //console.log(url);

        await driver.close(); 
        await driver.switchTo().window(originalWindow);
    
        await driver.findElement(By.id("created")).click();

        await scroll.srollWindow(driver,"500");
        await driver.sleep(3000);

       let v1 = await driver.findElement(By.xpath("//p[text()='Link has responded with staus ']")).getText();
        await assert.strictEqual(v1,"Link has responded with staus 201 and status text Created");

  



        await driver.findElement(By.id("no-content")).click();

        await scroll.srollWindow(driver,"500");
        await driver.sleep(3000);

       let v2 = await driver.findElement(By.xpath("//p[text()='Link has responded with staus ']")).getText();
        await assert.strictEqual(v2,"Link has responded with staus 204 and status text No Content");


        await driver.findElement(By.id("moved")).click();

        await scroll.srollWindow(driver,"500");
        await driver.sleep(3000);

        let v3 = await driver.findElement(By.xpath("//p[text()='Link has responded with staus ']")).getText();
        await assert.strictEqual(v3,"Link has responded with staus 301 and status text Moved Permanently");


        await driver.findElement(By.id("bad-request")).click();

        await scroll.srollWindow(driver,"500");
        await driver.sleep(3000);

        let v4 = await driver.findElement(By.xpath("//p[text()='Link has responded with staus ']")).getText();
        await assert.strictEqual(v4,"Link has responded with staus 400 and status text Bad Request");


        await driver.findElement(By.id("unauthorized")).click();

        await scroll.srollWindow(driver,"500");
        await driver.sleep(3000);

        let v5 = await driver.findElement(By.xpath("//p[text()='Link has responded with staus ']")).getText();
        await assert.strictEqual(v5,"Link has responded with staus 401 and status text Unauthorized");



        await driver.findElement(By.id("forbidden")).click();

        await scroll.srollWindow(driver,"500");
        await driver.sleep(3000);

        let v6 = await driver.findElement(By.xpath("//p[text()='Link has responded with staus ']")).getText();
        await assert.strictEqual(v6,"Link has responded with staus 403 and status text Forbidden");


        await driver.findElement(By.id("invalid-url")).click();

        await scroll.srollWindow(driver,"500");
        await driver.sleep(3000);

        let v7 = await driver.findElement(By.xpath("//p[text()='Link has responded with staus ']")).getText();
        await assert.strictEqual(v7,"Link has responded with staus 404 and status text Not Found");

        

        await driver.quit();



    });

});