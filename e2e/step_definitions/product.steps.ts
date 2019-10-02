import { Given, setDefaultTimeout, When, Then } from "cucumber";
import { AddProductPage } from "../page_objects/add-product.page";
import { HomePage } from "../page_objects/home.page";
import { ViewProductPage } from "../page_objects/view-product.page";

//Set Set Default Timeout for 1 minute (60, 000 milliseconds)
setDefaultTimeout(60*1000);

const homePage: HomePage = new HomePage();
const addProductPage: AddProductPage = new AddProductPage();
const viewProductPage: ViewProductPage = new ViewProductPage();

//Import chai and the `expect` command
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect

Given('a product doesn\'t exist', function (dataTable) {
    /**
     * This is where we turn our test data contained in the table in the Feature File
     * (and now a 'dataTable') into the array of products ('arrayOfProducts')
     */
    const arrayOfProducts = dataTable.hashes();
    /**
     * Then we take the first product in the array (at index 0)
     * and store it in 'product' object located in the World ('this')
     * so we can use it for all steps of the scenario
     */
    this.product = arrayOfProducts[0];

    /**
     * 
     */

    /**
     * This removes the previous product
     */
    //homePage.findProductInTable(this.product).click();
    //viewProductPage.deleteButton.click();
    //Here we make sure that the product hasn't already been created
    //before we start our test
    return expect(homePage.findProductInTable(this.product).isPresent()).to.eventually.be.false;
    });

When('I add the product', function () {
    homePage.addProductButton.click();

    addProductPage.productNameField.sendKeys(this.product.name);
    addProductPage.productDescriptionField.sendKeys(this.product.description)
    addProductPage.productPriceField.sendKeys(this.product.price)

    return addProductPage.submitButtonField.click();
      });

Then('the product is created', function () {
    //Expect that the product has now been created and can be seen on the View Product Page.
    return expect(viewProductPage.ProductName(this.product).isPresent()).to.eventually.be.true;
      });