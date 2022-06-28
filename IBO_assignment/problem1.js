/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}

*/


const listOfProducts = [
    {
        productName: "TV",
        quantity: 10,
        description: "television"
    },
    {
        productName: "AC",
        quantity: 5,
        description: "air conditioner"
    },
    {
        productName: "TV",
        quantity: 10,
        description: "television"
    },
    {
        productName: "AC",
        quantity: 5,
        description: "air conditioner"
    }, {
        productName: "FAN",
        quantity: 10,
        description: "Ceiling Fan"
    }
];

const getUniqueProductCount = () => {
    let obj={}
    for (let i = 0; i < listOfProducts.length; i++){
        if (obj[listOfProducts[i].productName] == null)
            obj[listOfProducts[i].productName] = 1;
        else
            obj[listOfProducts[i].productName] += 1;
    }
    return obj;
}
console.log("UniqueProducts-->", getUniqueProductCount())



