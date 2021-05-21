/*1. Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1] */

var myArr = [2, 4, 7, 11, -2, 1];

function duplicateElement (array) {
    var newArr =[];
    for (var i = 0; i < array.length; i++) {
        newArr.push(array[i]);
        newArr.push(array[i]);
    }
    return newArr;
}

var result = duplicateElement(myArr);
console.log(result);

//drugi nacin (dario)

function duplicateArray(array) {
    var output = [];
    array.forEach(function (element) {
      output.push(element, element);
    });
    return output;
}

var arr = [2, 4, 7, 11, -2, 1];
var dupArr = duplicateArray(arr);
console.log(dupArr);


/* 2. Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13]*/

function deleteDuplicate (array) {
    var output = [];
    for (var i = 0; i < array.length; i++) {
        if (!output.includes(array[i])) {
            output.push(array[i]);
        } else 
        continue;
    }
    return output;
}

var someArr = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

var arr = deleteDuplicate(someArr);
console.log(arr);


/*3.  a. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true */

var someArr = [1, 2, 9, 2, 1];

function oddOrNot (array) {
    return (array.length % 2 === 1);
}

var result = oddOrNot(someArr);
console.log(result);



/*b. Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4*/

var printArray = [-1, 8.1, 3, 6, 2.3, 44, 2.11];

function countLess (array) {
    var counter = 0;
    if (array.length % 2 === 0) {
        return "Error";
    }
    var middleIndex = Math.floor(array.length / 2);
    var middleElement = array[middleIndex];
    array.forEach(function (element) {
        if (element < middleElement) {
            counter++;
        }
    });
    return counter;
}
var output = countLess(printArray);
console.log(output);

/*4. Write a function that finds the smallest element of a given array. The function should
return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output: { minValue: -2, minLastIndex: 6 }*/

var arrStr = [1, 4, -2, 11, 8, 1, -2, 3];

function arrayIntoObject (array) {
    var min = array[0];
    array.forEach(function (el) {
        if (el < min) {
            min = el;
        }
    });
    var object = {
        minValue : min,
        minLastIndex : array.lastIndexOf(min)
    };
    return object;
}

var outp = arrayIntoObject(arrStr);
console.log(outp);


/*5.  a. Write a function that finds all the elements in a given array less than a given
element.
Input: [2, 3, 8, -2, 11, 4], 6
Output: [2, 3, -2, 4]*/

function lessThanGiven (array, el) {
    var newArr = array.filter(function (element){
        return element < el;
    });
    return newArr;
}

var input = [2, 3, 8, -2, 11, 4];
var el = 6;

var outputtt = lessThanGiven(input, el);
console.log(outputtt);

/*b. Write a function that finds all the elements in a given array that start with the “pro”
substring. The function should be case insensitive.
Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
Output: [’Programming’, ‘product’]*/

var someArray = ["JavaScript", "Programming", "fun", "product"];

function substringElements (array) {
    var newArr = array.filter (function (element) {
        var lower = element.toLowerCase();
        return (lower.slice(0, 3) === "pro");
    });
    return newArr;
}

var res = substringElements(someArray);
console.log(res);


/*c. Write a function that expects an array and a callback function that filters out
some of the elements. Use functions defined in a) or b) to test it.*/




/*6.
a. Write a list (array) of products you usually buy in the supermarket. Write a price
and name for each product. For example,
[{name: ‘apples’, price: 100}, {name: ‘milk’, price: 80}, {name:’bananas’, price: 150}]*/

var products = [{product: "strawberries", price: 129}, {product: "nescafe", price: 500}, {product: "balans yoghurt", price: 99}];


//b. Write a function that calculates the total price of your shopping list.

function totalPrice(arr) {
    var calc = 0;
    arr.forEach (function (element) {
        calc += element.price;
    });
    return calc;
}
var priceE = totalPrice(products);
console.log(priceE);


//c. Write a function that calculates the average product price of your shopping list.
//Print this value with the precision of three decimals.

function averagePrice (arr) {
    var avg = totalPrice(arr) / arr.length;
    return avg.toFixed(3);
}
var average = averagePrice(products);
console.log(average);


/*
d. Write a function that prints out the name of the most expensive product on your
shopping list. Write the name in uppercase.*/

function mostExpensive (arr) {
    var max = -Infinity;
    var productName;
    arr.forEach(function (el) {
        if (el.price > max) {
            max = el.price;
            productName = el.product.toUpperCase();
        }
    });
    return "The most expensive product of your list is " + productName + " and it costs " + max + " dinara!";
}
var expensive = mostExpensive(products);
console.log(expensive);




