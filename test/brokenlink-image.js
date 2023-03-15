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

        await driver.get("https://demoqa.com/broken");

        // if( driver.findElement(By.cssSelector("a > font")).isDisplayed()){

        //     System.out.println("Element is Visible");
            
        //     }else{
            
        //     System.out.println("Element is InVisible");
            
        //     }

       await driver.findElement(By.xpath("//a[text()='Click Here for Valid Link']")).click();

       await driver.wait(
        async () => (await driver.getAllWindowHandles()).length === 1
        );

       const windows = await driver.getAllWindowHandles();
        windows.forEach(async handle =>{
            if(handle !== originalWindow){
                await driver.switchTo().window(handle);
            }
        });

        let url1 = await driver.getCurrentUrl();
        url1.should.equal("https://demoqa.com/");



        await driver.navigate().to("https://demoqa.com/broken");

        let url2 = await driver.getCurrentUrl();
        url2.should.equal("https://demoqa.com/broken");

        await driver.findElement(By.xpath("//a[text()='Click Here for Broken Link']")).click();

        let url3 = await driver.getCurrentUrl();
        url3.should.equal("http://the-internet.herokuapp.com/status_codes/500");




    });

});

