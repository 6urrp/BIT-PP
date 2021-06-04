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



//trci nacin ivan (function expression)


var input = [2, 4, 7, 11, -2, 1];
var duplicateAllElements = function (arr) {
    var duplicated = [];

    arr.forEach(function (elem, i) { //foreach nista ne vraca, ako bismo ovo dodelili nekoj varijabli ona bi bila undefined
        console.log("From forEach: index " + i + ", value: ", elem);
        duplicated.push(elem, elem);
    });

    return duplicated;
}

var result = duplicateAllElements(input);
console.log(result);

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


//drugi nacin, ivan 

var removeDuplicates = function(arr){
    var newArray = [];

    arr.forEach(function (elem){
        var indexOfCurrent = newArray.indexOf(elem);

        if(indexOfCurrent === -1) {
            newArray.push(elem);
        }
    });

    return newArray;
}

var sample = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

var result = removeDuplicates(sample);

console.log(result);


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
    var newArr = array.filter(function (element) {
        var lower = element.toLowerCase();
        return (lower.slice(0, 3) === "pro");
    });
    return newArr;
}

var res = substringElements(someArray);
console.log(res);


/*c. Write a function that expects an array and a callback function that filters out
some of the elements. Use functions defined in a) or b) to test it.*/

function filterArray(array, condition) {
    var newArr = [];
    array.forEach(function(el){
      if (condition(el)) {
        newArr.push(el);
      }
    });
    return newArr;
}



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



/*7.
a. Write a function that checks if a given string is written in all capitals.*/

function isAllCapital (string) {
    var capitalString = string.toUpperCase(); 
    return string === capitalString;
}

var myString = "mushrooms";
var result = isAllCapital(myString);
console.log(result);


//b. Write a function that checks if a given string contains any digits.

var stringNumber = "orch1d";

function hasNumber (string) {
    var output = false;
    for (var i = 0; i < string.length; i++) {
        if (!isNaN(i)) {
            output = true;
        }
    };
    return output;
}
var output = hasNumber(stringNumber);
console.log(output);



//c. Write a function that checks if a given string is a valid hexadecimal color.

function isHexadecimalColor (string) {
    if(typeof string === 'string' && (string.length >= 3 && string.length <=6) && isFinite(Number("0x" + string))){
        return "Your string is a valid hexadecimal color!";
    } else {
        return "Your string isn't a valid hexadecimal color!";
    }
}
var hex = "A55fd1";
var result = isHexadecimalColor(hex);
console.log(result);

//d. Write a function that checks if a given number belongs to the interval from 1900 to 2018.

function intervalNumber (number) {
    if (number === Math.min(Math.max(1900, number), 2018)) {
        return true;
    } else {
        return false;
    }
}

var a = 2019;
var output1 = intervalNumber(a);
console.log(output1);



//e. Write a function named validator that returns an object with properties
//stringValidator, passwordValidator, colorValidator, and yearValidator referencing
//the functions from a) to d).

function Validator (string, pass, year) {
    this.stringValidator = isAllCapital(string);
    this.passwordValidator = hasNumber(pass);
    //colorValidator: ,
    this.yearValidator = intervalNumber(year);
};

var valid = new Validator("petAr", "sifrica1", 1995);
console.log(valid);



/*8. Write a function that calculates a number of days to your birthday.

Input: 25 February
Output: 5 days*/

var date1 = new Date();
var date2 = new Date("03/06/2022");
//console.log(date2);

var differenceInTime = date2 - date1; // nije potrebno getTime, automatski to radi
var differenceInDay = Math.floor(differenceInTime / (1000 * 3600 * 24));
console.log(differenceInTime);
console.log(differenceInDay);





/*9. Write a function that for a given departure and arrival time calculates the time the trip
takes.
Input: 8:22:13 11:43:22
Output: 3 hours 21 minutes 9 seconds*/

var departure = "8:22:13";
var arrival = "11:43:22";
function trip (dep, arr) {
    var currentDep = new Date();
    var currentArr = new Date();
    dep = dep.split(":");
    arr = arr.split(":");
    currentDep.setUTCHours(parseInt(dep[0]));
    currentDep.setUTCMinutes(parseInt(dep[1]));
    currentDep.setUTCSeconds(parseInt(dep[2]));

    currentArr.setUTCHours(parseInt(arr[0]));
    currentArr.setUTCMinutes(parseInt(arr[1]));
    currentArr.setUTCSeconds(parseInt(arr[2]));
    
    var timeTravel = currentArr - currentDep;
    var h = Math.floor(timeTravel / (1000 * 3600));
    var m = Math.floor(timeTravel / (1000 * 60));
    m %= 60;
    var s = Math.floor(timeTravel / 1000);
    s %= 60;
    return h + " hours " + m + " minutes " + s + " seconds!"
}

var output = trip(departure, arrival);
console.log(output);






/*10.
a. Write a constructor function that creates points in space. Each point in space has
its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.*/


function Point (x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

var pointsSpace = new Point (3, 5, 1);
var secondPoint = new Point (4, 2, 9);

//b. Write a function that calculates the distance between two points in the space.

function distance (p1, p2) {
    var result = Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y) + (p1.z - p2.z) * (p1.z - p2.z));
    return result.toFixed(3);
}
var pointResult = distance (pointsSpace, secondPoint);
console.log(pointResult);





11.
//a. Write a function that generates a random integer value between 5 and 20.

function randomInteger (min, max) {
    return ((max - min) * Math.random()) + min;
}

var result = randomInteger(5, 20);

//b. Write a function that generates a random integer value between 50 and 100.

var result1 = randomInteger(50, 100);
console.log(result1);

//c. Write a function which expects a number and a callback generator function and
//returns an array of numbers produced by the generator function.

function arrayOfRandoms (numb, func) {
    var arr = [];
    console.log(func);
    for (var i = 0; i < numb; i++) {
        var currRandom = func(i+1, 10*(i+1));
        arr.push(Math.floor(currRandom));
    }
    return arr;
}
console.log(arrayOfRandoms(7, randomInteger));






/*12. Write a function that shuffles the elements of a given array.

Input: [3, 6, 11, 2, 9, 1]
Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)*/

var myarray = [3, 6, 11, 2, 9, 1];
//console.log(Math.random(myarray));

function shuffle (array) {
    array.forEach(function (el, i){
        var randomIndex = parseInt(Math.random() * array.length);
        var p = array[randomIndex];
        array[randomIndex] = el;
        array[i] = p;
    })
    return array;

}
var output = shuffle(myarray);
console.log(output);