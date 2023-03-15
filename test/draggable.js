const { Builder , By , Key} = require("selenium-webdriver");
require('chromedriver');
const scroll = require('../helpers/scrollwindow');


describe("describe is executing..",function(){

    it("It function is executing...",async function(){

        const driver = await new Builder()
        .forBrowser('chrome')
        .build();

        await driver.manage().window().maximize();

        await driver.get("https://demoqa.com/dragabble");

        

    const draggable = driver.findElement(By.id("dragBox"));
      let start = await draggable.getRect();
      const actions = driver.actions({async: true});
      await actions.dragAndDrop(draggable, {x: parseInt(start.x)+110, y: parseInt(start.y)+10}).perform();

      await driver.findElement(By.id("draggableExample-tab-axisRestriction")).click();

      const draggableAxisRistrictedx = driver.findElement(By.id("restrictedX"));
      let startAxisRistrictedx = await draggableAxisRistrictedx.getRect();
      const actionsAxisRistrictedx = driver.actions({async: true});
      await actionsAxisRistrictedx.dragAndDrop(draggableAxisRistrictedx, {x: parseInt(startAxisRistrictedx.x)+110, y: parseInt(startAxisRistrictedx.y)}).perform();

      
      
    // await scroll.srollWindow(driver,"500");
    //  const draggableAxisRistrictedY = driver.findElement(By.id("restrictedY"));
    //  let startAxisRistrictedY = await draggableAxisRistrictedY.getRect();
    //  const actionsAxisRistrictedY = driver.actions({async: true});
    // // //await scroll.srollWindow(driver,"500");
    //   await actionsAxisRistrictedY.dragAndDrop(draggableAxisRistrictedY, {x: parseInt(startAxisRistrictedY.x), y: parseInt(startAxisRistrictedY.y)+5}).perform();

      await driver.findElement(By.id("draggableExample-tab-containerRestriction")).click();
     
     

      const draggableContainerRistrictedx = driver.findElement(By.xpath("//div[@class='draggable ui-widget-content ui-draggable ui-draggable-handle']"));
      let startContainerRistrictedx = await draggableContainerRistrictedx.getRect();
      const actionsContainerRistrictedx = driver.actions({async: true});
      await actionsContainerRistrictedx.dragAndDrop(draggableContainerRistrictedx, {x: parseInt(startContainerRistrictedx.x)+5, y: parseInt(startContainerRistrictedx.y)+5}).perform();

      await driver.findElement(By.xpath("//div[@class='draggable ui-widget-content m-3']")).getRect();
     

      const draggableContainerRistrictedy = driver.findElement(By.xpath(`//span[text()="I'm contained within my parent"]`));
       let startContainerRistrictedy = await draggableContainerRistrictedy.getRect();
       const actionsContainerRistrictedy = driver.actions({async: true});
       await actionsContainerRistrictedy.dragAndDrop(draggableContainerRistrictedy, {x: parseInt(startContainerRistrictedy.x), y: parseInt(startContainerRistrictedy.y)}).perform();
       



    // await driver.findElement(By.id("draggableExample-tab-cursorStyle")).click();

    // const draggableCursorstyle = driver.findElement(By.id("cursorCenter"));
    // let startCursorstyle = await draggableCursorstyle.getRect();
    // const actionsCursorstyle = driver.actions({async: true});
    // await actionsCursorstyle.dragAndDrop(draggableCursorstyle, {x: parseInt(startCursorstyle.x)+10, y: parseInt(startCursorstyle.y)+10}).perform();

    // const draggableCursorstylex = driver.findElement(By.id("cursorTopLeft"));
    // let startCursorstylex = await draggableCursorstylex.getRect();
    // const actionsCursorstylex = driver.actions({async: true});
    // await actionsCursorstylex.dragAndDrop(draggableCursorstylex, {x: parseInt(startCursorstylex.x)+12, y: parseInt(startCursorstylex.y)+8}).perform();









    });

});