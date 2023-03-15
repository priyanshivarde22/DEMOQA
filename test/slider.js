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

        await driver.get("https://demoqa.com/slider");

        const draggable = await driver.findElement(By.xpath("//span[@class='range-slider__wrap']"));
        const droppable = await driver.findElement(By.xpath("//span[@class='range-slider__wrap']"));
        const actions = driver.actions({async: true});
        await actions.dragAndDrop(draggable, droppable).perform();
        //await actions.move()


    });

});