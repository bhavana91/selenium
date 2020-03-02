const {Builder,By,} = require("selenium-webdriver");
const driver = new Builder()
.forBrowser("firefox")
.build();
async function fileupload(){
    try{
      await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/file-form")
      await driver.findElement(By.xpath("//input[@formcontrolname='file']")).sendKeys("/home/ad.rapidops.com/bhavana.polireddy/Music/web"+"/b.jpeg");
      await driver.findElement(By.id("submit")).click()

    }catch(error){
        console.log(error)
    }
}
fileupload()