const {Builder,By,} = require("selenium-webdriver");
const driver = new Builder()
.forBrowser("firefox")
.build();


async function radiobuttonform(){
    try{
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form")
        await driver.findElement(By.css('#title')).sendKeys('title that  has atleast 20 chars')
        await driver.findElement(By.css('#description')).sendKeys('description that  has atleast 20 chars')
        await driver.findElement(By.css('div:nth-child(1) > label > span.custom-control-indicator ')).click();
        await driver.findElement(By.css('#submit')).click();
    }
    catch(error){
        console.log(error)
    }
}
radiobuttonform();