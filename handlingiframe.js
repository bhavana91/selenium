const {Builder,By,Key} = require("selenium-webdriver");
const driver = new Builder()
.forBrowser("firefox")
.build();
async function handlingiframe(){
    try{
      await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/iframe-form")
      await driver.switchTo().frame(0);
      await driver.findElement(By.xpath("//input[@aria-label='Name']")).sendKeys("bhavana")
      await driver.actions().sendKeys(Key.TAB).perform()
      await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN,Key.ARROW_DOWN,Key.ARROW_DOWN,Key.ARROW_DOWN)).perform()
      await driver.actions().sendKeys(Key.chord(key.TAB,key.TAB)).perform()
      await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN,Key.ARROW_DOWN,Key.ARROW_DOWN,key.SPACE)).perform()
      await driver.actions().sendKeys(Key.chord(Key.TAB,"12")).perform()
      await driver.actions().sendKeys(Key.chord(Key.TAB,"23")).perform()
      await driver.actions().sendKeys(Key.chord(Key.TAB,"2020")).perform()
      await driver.actions().sendKeys(Key.chord(Key.TAB,key.SPACE)).perform()
      await driver.actions().sendKeys(Key.chord(Key.TAB,key.SPACE)).perform()
      await driver.actions().sendKeys(Key.chord(Key.TAB,"secret answer")).perform()
      await driver.actions().sendKeys(Key.chord(Key.TAB,key.SPACE)).perform()
      //await driver.findElement(By.id("submit")).click()
    }catch(error){
        console.log(error)
    }
}
handlingiframe()