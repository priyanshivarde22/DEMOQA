const { Builder , By , Key} = require("selenium-webdriver");
const Chrome = require('selenium-webdriver/chrome')
const assert = require ("assert");
const should = require("chai").should();
require('chromedriver');
const scroll = require('../helpers/scrollwindow');

describe("describe is executing..",function(){

    it("It function is executing...",async function(){

        const driver = await new Builder()
        .forBrowser('chrome')
        .build();

        await driver.manage().window().maximize();

        await driver.get("https://demoqa.com/resizable");

      const resizeBox = driver.findElement(By.id("resizableBoxWithRestriction"));
      let startresizeBox = await resizeBox.getRect();
      const actionsresizeBox = driver.actions({async: true});
      await actionsresizeBox.dragAndDrop(resizeBox, {x: parseInt(startresizeBox.x)+10, y: parseInt(startresizeBox.y)+10}).perform();

      await scroll.srollWindow(driver,"500");


      const resizeSqureBox = driver.findElement(By.id("resizable"));
      let startresizeSqureBox = await resizeSqureBox.getRect();
      const actionsresizeSqureBox = driver.actions({async: true});
      await actionsresizeSqureBox.dragAndDrop(resizeSqureBox, {x: parseInt(startresizeSqureBox.x)+10, y: parseInt(startresizeSqureBox.y)+10}).perform();

    });

});