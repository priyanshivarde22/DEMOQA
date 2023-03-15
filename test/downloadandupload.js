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

        await driver.get("https://demoqa.com/upload-download");

        await driver.findElement(By.id("downloadButton")).click();

        // WebElement image = driver.findElement(By.id("id12233445"));
        // String src = image.getAttribute("src");
        // return src.endsWith("image_true.png");

        let chooseFile = await driver.findElement(By.xpath("//input[@class='form-control-file']"))
        await driver.actions().click(chooseFile).perform()

        let  upload_file = driver.findElement(By.xpath("//input[@id='file_up']"));

        upload_file.sendKeys("C:/Users/Sonali/Desktop/upload.png");

});
});