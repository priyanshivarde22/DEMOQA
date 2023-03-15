const { Builder , By , Key} = require("selenium-webdriver");



async function srollWindow(driver,pixels){
    await driver.executeScript("window.scrollBy(0,"+pixels+")");
}
module.exports = {srollWindow}