const {Builder,By,} = require("selenium-webdriver");
const driver = new Builder()
.forBrowser("firefox")
.build();
async function datepickerfrom(){
    try{
      await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/datepicker-form")
      await driver.findElement(By.xpath("//input[@formcontrolname='dateOne']")).sendKeys('apr 16,2015')
      await driver.findElement(By.xpath("//input[@formcontrolname='dateTwo']")).sendKeys('apr 16,2015 - apr 16,2016')
      await driver.findElement(By.id("submit")).click()

    }catch(error){
        console.log(error)
    }
}
datepickerfrom()