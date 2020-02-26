const {Builder,By,} = require("selenium-webdriver");
const driver = new Builder()
.forBrowser("firefox")
.build();


async function checkboxform(){
    try{
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/checkbox-form") 
        await driver.findElement(By.xpath("//input[@id='name']")).sendKeys("hAGJHDA")
        await driver.findElement(By.xpath("//input[@id='comment']")).sendKeys("DSDASSDFSDAFSADF")
        await driver.findElement(By.xpath("//input[@value='presidential-suite']/following::span")).click()
        await driver.findElement(By.xpath("//nb-checkbox[@value='breakfast']/label/span")).click()
        await driver.findElement(By.xpath("//nb-checkbox[@value='lunch']/label/span")).click()
        await driver.findElement(By.xpath("//nb-checkbox[@value='dinner']/label/span")).click()
        await driver.findElement(By.xpath("//button[@id='submit']")).click()





    }
    catch(error){
        console.log(error)
    }
}
checkboxform();