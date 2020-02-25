const {Builder} = require("selenium-webdriver");
const firefox=require("selenium-webdriver/firefox");
const proxy=require("selenium-webdriver/proxy");

const options = new firefox.Options();
//options.setProfile("/home/ad.rapidops.com/bhavana.polireddy/Trash")
const proxyserverpath="206.189.154.182:8080"
const driver = new Builder()
.forBrowser("firefox")
.setFirefoxOptions(options)
.setProxy(proxy.manual({
    http:proxyserverpath,
    https:proxyserverpath
}))
.build();
driver.get("http://google.com");