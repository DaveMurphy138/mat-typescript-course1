import { $, by, element } from "protractor";

export class HomePage {

    public addProductButton = $("a.mat-flat-button.mat-primary")

    /**
     * Find a "Product" in the table 
     * 
     * @param Product - this is a product (name, description, price) that we want to find in the table.
     * @returns the element that is found (in ElementFinder)
     */
    public findProductInTable = (product: myLib.product) => {
        return element(by.cssContainingText("mat-cell", product.name));
    };


}