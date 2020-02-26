const {Builder,By,} = require("selenium-webdriver");
const driver = new Builder()
.forBrowser("firefox")
.build();


async function checkboxform(){
    try{
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/dropdown-form") 
        await driver.findElement(By.xpath("//nb-select[@formcontrolname='select1']/button")).click()

        await driver.findElement(By.xpath("//nb-optimo[@value='1']-first select")).click()
        await driver.findElement(By.xpath("//nb-optimo[@value='22']-first select")).click()
       





    }
    catch(error){
        console.log(error)
    }
}
checkboxform();