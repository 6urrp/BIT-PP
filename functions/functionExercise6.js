/*1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U.*/

var myString = "Remember that I tried to..";

function countVowels (string) {
    var counter = 0;
    var vowelsArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    for (var i = 0; i < string.length; i++) {
        for (var j = 0; j < vowelsArray.length; j++) {
            if (string[i] === vowelsArray[j]) {
                counter++;
            }
        }
    }
    return counter;
}

console.log(countVowels(myString));

/*2. Write a function that combines two arrays by alternatingly taking elements.
[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]*/

var $first = ["a", "b", "c"];
var $second = [1, 2, 3];

function combineTwoArrays (array1, array2) {
    var result = [];
    for (var i = 0; i < array1.length; i++) {
        result[result.length] = array1[i];
        result[result.length] = array2[i];
    }
    return result;
}

console.log(combineTwoArrays($first, $second));


/*3. Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]*/

var $rotate = [1, 2, 3, 4, 5, 6];
var place = 2;

function rotateElement (array, k) {
    var result = [];
    for (var i = k; i < array.length; i++) {
        result[result.length] = array[i];
    }
    for (var j = 0; j < k; j++) {
        result[result.length] = array[j];
    }
    return result;
}

console.log(rotateElement($rotate, place));


/* 4. Write a function that takes a number and returns array of its digits.*/

var myNumber = 856147;

function numberInArray (number) {
    var digitArray = [];
    var digitString = number + "";
    for (var i = 0; i < digitString.length; i++) {
        digitArray[digitArray.length] = digitString[i];
    }
    return digitArray;
}

console.log(numberInArray(myNumber));

/*5. Write a program that prints a multiplication table for numbers up to 12.*/

function multiplicationTable () {
    var result = 0;
    for (var i = 0; i <= 12; i++) {
        for (var j = 0; j <= 12; j++) {
            result = i * j;
            console.log( i + " * " + j + " = " + result);
            
        }
    }
}

multiplicationTable();

/*6. Write a function to input temperature in Centigrade and convert to Fahrenheit.*/

var centigrade = 15;

function temperatureToFahrenheit (centigrade) {
    var convertCtoF;
    convertCtoF = (centigrade * 9 / 5) + 32;
    return centigrade + " centigrade is equal to " + convertCtoF + " Fahrenheit!";
}

console.log(temperatureToFahrenheit(centigrade));

/*7. Write a function to find the maximum element in array of numbers. Filter out all non-number elements.*/

var randomArray = ["white", "iverson", 7, 2, true, 13, null, 9, false, 11, ""];

function maximumNumber (array) {
    var maxX = -Infinity;
    for (var i = 0; i < array.length; i++) {
        if (isFinite(array[i]) && array[i] > maxX) {
            maxX = array[i];
        }
    }
    return maxX;
}

console.log(maximumNumber(randomArray));


//8. Write a function to find the maximum and minimum elements. Function returns an array.

var $random = ["white", "iverson", 7, 2, true, 13, null, 9, false, 11, "", -34, -2];

function maxAndMin (array) {
    var maximum = [-Infinity];
    var minimum = [Infinity];
    for (var i = 0; i < array.length; i ++) {
        var numbersOnly = parseFloat(array[i]);
        if (numbersOnly > maximum) {
            maximum = array[i];
        }
        if (numbersOnly < minimum) { 
            minimum = array[i];
        }
    }
    return "Maximum is " + maximum + ", and minimum is " + minimum;
}

console.log(maxAndMin($random));

//9. Write a function to find the median element of array.



//10. Write a function to find the element that occurs most frequently.

var $array = [1, 2, "some", null, 2, "some", true, Infinity, "some", true, true, true] 

function theMostFrequent (array) {
    var counter = 0;
    var element;
    var frequent = 0;
    for (var i = 0; i < array.length; i ++) {
        for (var j = 0; j < array.length; j++) {
            if(array[i] === array[j]){
                counter++;
                element = array[i];
            }
        }
        if (counter > frequent){
            frequent = counter;
            element = array[i];
        }
    }
    return element;
}

console.log(theMostFrequent($array));


/*11. Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.*/ 

var oddArray = [1, true, Infinity, "strawberry", false];
var evenArray = [2, false, "future", Infinity];
var emptyArray = [];


function returnElement (array) {
    var newArr = [];
    if(array.length === 0 ) {
        newArr = array;
    }
    for (var i = 0; i < array.length; i++){
        if (array.length % 2 === 0) {
            newArr[newArr.length] = array[0];
            newArr[newArr.length] = array[array.length-1];
        } else {
            newArr[newArr.length] = array[0];
            newArr[newArr.length] = array[((array.length-1)/2)]; //ide -1 pa podeljeno sa 2, zato sto nam ova duzina niza oznacava index
            newArr[newArr.length] = array[array.length-1];
        }
        return newArr;
    }
}

console.log(returnElement(emptyArray));


