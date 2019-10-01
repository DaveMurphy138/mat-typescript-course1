import { Before, Status, After } from "cucumber";
import { browser } from "protractor";

Before({timeout: 100 * 1000}, async function(){

    //get command means 'navigate to website
    await browser.get("");
    }
    
)

After({timeout: 100 * 1000}, async function(scenario) {

    //Here we take a screenshot if the scenario fails
    //and it's attached ot the test report
    if(scenario.result.status === Status.FAILED) {
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
});