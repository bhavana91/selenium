const {Builder} = require("selenium-webdriver");
const firefox=require("selenium-webdriver/firefox");
const options = new firefox.Options();
options.setProfile("/home/ad.rapidops.com/bhavana.polireddy/Trash")
const driver = new Builder().forBrowser("firefox").setFirefoxOptions(options).build();
driver.get("http://google.com");