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

        await driver.get("https://demoqa.com/automation-practice-form");

        
        await driver.findElement(By.id('firstName')).sendKeys("Priyam");
        await driver.findElement(By.id('lastName')).sendKeys("Patel");
        await driver.findElement(By.id('userEmail')).sendKeys("priyampatel@gmail.com");
// here you can define percentage to zomm in or zoom out 
         

        //await driver.findElement(By.id('gender-radio-1')).click();
        let genderRadioBtn = await driver.findElement(By.xpath("//input[@id='gender-radio-1']"))
        await driver.actions().click(genderRadioBtn).perform()

        await driver.findElement(By.id('userNumber')).sendKeys("9898787898");
        await driver.findElement(By.id('dateOfBirthInput')).click();
        await driver.findElement(By.xpath("//select[@class='react-datepicker__month-select']")).click();
        await driver.findElement(By.xpath("//option[text()='January']")).click();
        await driver.findElement(By.xpath("//select[@class='react-datepicker__year-select']")).click();
        await driver.findElement(By.xpath("//option[text()='1999']")).click();
        await driver.findElement(By.xpath("//div[@class='react-datepicker__day react-datepicker__day--020']")).click();
        //await driver.findElement(By.xpath("//div[@class='subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3']")).sendKeys("Computer Science");
        //await driver.findElement(By.id('hobbies-checkbox-2')).click();
        let hobbycheckBox = await driver.findElement(By.id("hobbies-checkbox-2"))
        await driver.actions().click(hobbycheckBox).perform()

        // let chooseFile = await driver.findElement(By.id("uploadPicture"))
        // await driver.actions().click(chooseFile).perform()

        await driver.findElement(By.id('currentAddress')).sendKeys("B-502,Sainath Hights,Adajan,Surat.");

        let zoomPer=70;
         await driver.executeScript("document.body.style.zoom = '"+zoomPer+"%'");

        //await driver.findElement(By.xpath("(//div[@class=' css-1hwfws3'])[1]")).click();

        // let selectState = await driver.findElement(By.xpath("(//div[@class=' css-1hwfws3'])[1]"))
        // await driver.actions().click(selectState)
        // let text = await driver.executeScript("return document.getElementById('css-1uccc91-singleValue')")
        // const state = await text.getText()
        // console.log('-------',state);

        // await driver.findElement(By.xpath("(//div[@class=' css-1wa3eu0-placeholder'])[1]")).isDisplayed()
        // let text = await driver.findElement(By.xpath("(//div[@class=' css-1wa3eu0-placeholder'])[1]")).getText()
        // console.log(text);
        // text = text.innerText
        let editText = await driver.findElement(By.id("react-select-6-input")).sendKeys('Rajasthan')
        console.log(editText);

      //   var result = await driver.executeScript("return document.getElementsByClassName('css-1uccc91-singleValue')");

      //  result.forEach(element => {
      //   console.log(element.textContent)





});


        




    });
