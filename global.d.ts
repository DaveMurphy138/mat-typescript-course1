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

    //Example one that we're not using in our framework
    interface CustomerDetails {
        name: string;
        address: string;
        //? means that the vehicle details are optional
        vehicledetails?: {
            make: string;
            model: string;
            year: number;
        }
    }

}