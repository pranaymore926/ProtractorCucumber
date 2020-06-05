import{After, Before, Status} from "cucumber";
import { browser } from "protractor";

Before({tags: "@calculatorTesting"}, function () {
    // This hook will be executed before scenarios tagged with @foo

    browser.manage().window().maximize();
  });

  After({tags: "@calculatorTesting"}, function () {
    // This hook will be executed before scenarios tagged with @foo

    console.log("this test is executed ")
  });

  Before({tags: "@angularTesting"}, function () {
    // This hook will be executed before scenarios tagged with @foo

    console.log("executing without maximizing");
  });
  After({tags: "@angularTesting"}, function () {
    // This hook will be executed before scenarios tagged with @foo

    console.log("executed without maximizing");
  });

  After(async function(scenario){
if(scenario.result.status==Status.FAILED){
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot , "image/png")
}
  })