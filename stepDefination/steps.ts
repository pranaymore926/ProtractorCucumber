import { Given, When, Then } from "cucumber";
import { calculator } from "../pageObjects/calculator";
import { browser, ExpectedConditions } from "protractor";
import { angularHomePage } from "../pageObjects/angularHomePage";
import{expect} from 'chai';
let calc = new calculator();
let angH = new angularHomePage();
var expect = require('chai').expect

Given('i will navigate to {string} website', async (string) =>{
  if(string == 'Calc')
  {
    await browser.get('http://juliemr.github.io/protractor-demo/');
  }
  else {
    await browser.get('https://angularjs.org/');
  }
});


  When('I add two numbers {string} and {string}', async (string, string2) =>{
    
    await calc.firstEditBox.sendKeys(string);
	await calc.secondEditBox.sendKeys(string2);
  });
  Then('the output displayed should be {string}', async (string) =>{
    
    await calc.go.click();
		
    await calc.getResult.getText().then(function(text){
       expect(text).to.equal(string);
    })
  });

  When('I clicked on header link.', async() => {
    await angH.angularLink.click();

  });

  
  When('you will navigate to angular webpage.', async () => {
    // Write code here that turns the phrase above into concrete actions
    console.log("navigated to new page ");
  });

  Then('enter {string} text in search box.', async (string) =>{
    await browser.sleep(3000);
    await angH.search.sendKeys('Hell-O!!')
  });
