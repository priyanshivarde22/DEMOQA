const {By, Keys, Builder} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const assert = require("assert");
require("chromedriver");

//const should = ("chai").should();



describe("describe is executing..",function(){

    it("It function is executing...",async function(){

        const driver = await new Builder()
        .forBrowser('chrome')
        .build();

        await driver.get("https://demoqa.com/tool-tips");
         //const mouseHoverJScript = require("mouseHoverJScript");

         const hoverButton = driver.findElement(By.id("toolTipButton"));
         const action = driver.actions({async: true});
         await action.move({origin: hoverButton}).perform();

         const hoverTextarea = driver.findElement(By.id("toolTipTextField"));
         const actions = driver.actions({async: true});
         await actions.move({origin: hoverTextarea}).perform();

         const hoverText1 = driver.findElement(By.xpath("//a[text()='Contrary']"));
         const action1 = driver.actions({async: true});
         await action1.move({origin: hoverText1}).perform();

         const hoverText2 = driver.findElement(By.xpath("//a[text()='1.10.32']"));
         const action2 = driver.actions({async: true});
         await action2.move({origin: hoverText2}).perform();

    })
})