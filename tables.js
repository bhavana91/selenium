const {Builder,By,Key} = require("selenium-webdriver");
const driver = new Builder()
.forBrowser("firefox")
.build();
async function tables(){
    try{
      await driver.get("https://rori4.github.io/selenium-practice/#/pages/tables/smart-table")
      let results=[];

      for(let i=0;i<6;i++){
        let rows= await driver.findElements(By.xpath("//tbody/tr"));

      for (const row of rows) {
          let rowData= await row.getText()
          let user=rowData.split(/\n/);
          results.push({
              id:user[0],
              firstname:user[1],
              lastname:user[2],
              username:user[3],
              email:user[4],
              age:user[5]
          })
      }
      await driver.findElement(By.css(".page-link-next")).click();

    }
      console.log(results)
    }catch(error){
        console.log(error)
    }
}
tables()