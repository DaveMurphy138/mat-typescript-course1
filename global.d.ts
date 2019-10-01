//Type definitions for ProductList Test Automation Framework

declare namespace myLib {

    //Enforces the format of our test data
    
    //A template for "Product" test data
    //Our global 'Product' type/interface
    interface Product{
        //Must have name
        name: string;
        //Must have description
        description: string;
        //Must have price
        price: string;
    }

    //another example, different file types
    /*interface User{

        name: string;
        age:number;
        isMarried: boolean;
    }*/

}