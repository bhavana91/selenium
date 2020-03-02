const {Builder,By,Key} = require("selenium-webdriver");
const driver = new Builder()
.forBrowser("firefox")
.build();


 async function simpleregistartion(){
    try{
   await     driver.get("http://newtours.demoaut.com/")
        await driver.findElement(By.name("userName")).sendKeys("kalptest");
       await driver.findElement(By.name("password")).sendKeys("kalptest");
        await driver.findElement(By.name("login")).click();
        await driver.get("http://newtours.demoaut.com/mercuryreservation.php")
      await driver.findElement(By.css("tr:nth-of-type(2) > td:nth-of-type(2)  font > input:nth-of-type(2)")).click();
        await driver.findElement(By.xpath("//select[@name='passCount']//option[contains(text(),'1')]")).click()
        await driver.findElement(By.xpath("//select[@name='fromPort']//option[contains(text(),'Frankfurt')]")).click()
        await driver.findElement(By.xpath("//select[@name='fromMonth']//option[contains(text(),'May')]")).click()
        await driver.findElement(By.xpath("//select[@name='fromDay']//option[contains(text(),'16')]")).click()
        await driver.findElement(By.xpath("//select[@name='toPort']//option[contains(text(),'New York')]")).click()
        await driver.findElement(By.xpath("//select[@name='toMonth']//option[contains(text(),'June')]")).click()
        await driver.findElement(By.xpath("//select[@name='toDay']//option[contains(text(),'19')]")).click()
        await driver.findElement(By.css('font > font > input:nth-of-type(1)')).click();
        await driver.findElement(By.xpath("//select[@name='airline']//option[contains(text(),'Pangea Airlines')]")).click()
        await driver.findElement(By.name("findFlights")).click();
        await driver.get("http://newtours.demoaut.com/mercurypurchase.php")
        await driver.findElement(By.xpath("//select[@name='creditCard']//option[contains(text(),'Visa')]")).click()
        await driver.findElement(By.name("creditnumber")).sendKeys("12312323421124");
        await driver.findElement(By.xpath("//select[@name='cc_exp_dt_mn']//option[contains(text(),'cc_exp_dt_mn')]")).click()
        await driver.findElement(By.xpath("//select[@name='cc_exp_dt_yr']//option[contains(text(),'2008')]")).click()
        await driver.findElement(By.name("cc_frst_name")).sendKeys("bhavana");
        await driver.findElement(By.name("cc_mid_name")).sendKeys("reddy");
        await driver.findElement(By.name("cc_last_name")).sendKeys("polireddy");
        await driver.findElement(By.name("billAddress1")).clear();
        await driver.findElement(By.name("billAddress1")).sendKeys("sciencecity");
        await driver.findElement(By.name("billCity")).clear();
        await driver.findElement(By.name("billCity")).sendKeys("ahmdabad");
        await driver.findElement(By.name("billState")).clear();
        await driver.findElement(By.name("billCity")).sendKeys("gujarat"); 
         await driver.findElement(By.name("billZip")).clear();
        await driver.findElement(By.name("billCity")).sendKeys("380009");
        await driver.findElement(By.xpath("//select[@name='billCountry']//option[contains(text(),'INDIA')]")).click()
        await driver.findElement(By.name("buyFlights")).click();
        await driver.findElement(By.css("td:nth-of-type(1) > a")).click(); 
    }
    catch(error){
        console.log(error)
    }
}
simpleregistartion()
