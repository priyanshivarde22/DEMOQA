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

        await driver.get("https://demoqa.com/droppable");

        const draggable = driver.findElement(By.xpath("//div[text()='Drag me']"));
        const droppable = await driver.findElement(By.xpath("(//div[@class='drop-box ui-droppable'])[1]"));
        const actions = driver.actions({async: true});
        await actions.dragAndDrop(draggable, droppable).perform();

        await driver.findElement(By.id("droppableExample-tab-accept")).click();

        const draggableActive = driver.findElement(By.id("acceptable"));
        const droppableActive = await driver.findElement(By.xpath("(//div[@id='droppable'])[2]"));
        const actionsActive = driver.actions({async: true});
        await actionsActive.dragAndDrop(draggableActive, droppableActive).perform();

        await driver.findElement(By.id("droppableExample-tab-preventPropogation")).click();

        const draggablePreventPropogation = driver.findElement(By.id("dragBox"));
        const droppablePreventPropogation = await driver.findElement(By.id("notGreedyInnerDropBox"));
        const actionsPreventPropogation = driver.actions({async: true});
        await actionsPreventPropogation.dragAndDrop(draggablePreventPropogation, droppablePreventPropogation).perform();

        await scroll.srollWindow(driver,"500");

        const draggablePreventPropogation1 = driver.findElement(By.id("dragBox"));
        const droppablePreventPropogation1 = await driver.findElement(By.xpath("//p[text()='Outer droppable']"));
        const actionsPreventPropogation1 = driver.actions({async: true});
        await actionsPreventPropogation1.dragAndDrop(draggablePreventPropogation1, droppablePreventPropogation1).perform();

        await driver.findElement(By.id("droppableExample-tab-revertable")).click();

        const draggableRevertDraggable = driver.findElement(By.id("revertable"));
        const droppableRevertDraggable = await driver.findElement(By.xpath("(//div[@id='droppable'])[3]"));
        const actionsRevertDraggable = driver.actions({async: true});
        await actionsRevertDraggable.dragAndDrop(draggableRevertDraggable, droppableRevertDraggable).perform();

        const draggableRevertDraggable1 = driver.findElement(By.id("notRevertable"));
        const droppableRevertDraggable1 = await driver.findElement(By.xpath("(//div[@id='droppable'])[3]"));
        const actionsRevertDraggable1 = driver.actions({async: true});
        await actionsRevertDraggable1.dragAndDrop(draggableRevertDraggable1, droppableRevertDraggable1).perform();




    });

});