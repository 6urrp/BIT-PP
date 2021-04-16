/*1. Write a function that converts an array of strings into an array of numbers. Filter
out all non-numeric values.
// Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]*/

var array = ["1", "21", undefined, "42", "1e+3", Infinity];
function stringIntoNumber(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (isFinite(array[i])) {
            result[result.length] = parseFloat(array[i]);
        }
    }return result;
}

console.log(stringIntoNumber(array));


//tanjin zadatak

var array = ["1", "21", undefined, "42", "1e+3", Infinity];
var array = ["1", "21", undefined, "42", "1e+3", Infinity];
function stringIntoNumber(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var converted = parseFloat(array[i]);
        if (isFinite(converted)) {
            result[result.length] = converted;
        }
    }return result;
}

console.log(stringIntoNumber(array));



/*2. Write a program to join all elements of the array into a string skipping elements
that are undefined, null, NaN or Infinity.
Input: [NaN, 0, 15, false, -22, "", undefined, 47, null]
Output: “015false-2247” */

var array = [NaN, 0, 15, false, -22, "", undefined, 47, null];
var result = "";
for (var i = 0; i < array.length; i++) {
    if (i(array[i]) && array[i] != null) {
        result += array[i];
    }
}


console.log(result);  //STA JE SA NULL?




/*3. Write a program to filter out falsy values from the array.
Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47]*/


var array = [NaN, 0, 15, false, -22, '', undefined, 47, null]; 

function filterFalsy(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var float = parseFloat(array[i]); 
        if (float) { //float === true
            result[result.length] = array[i];
        }
    }
    return result;
}

console.log(filterFalsy(array));



/* 4. Write a program that calculates a number of integer values in the array.
Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3*/


var a = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
function integerValuesInArray (a) {
    var counter = 0;
    for (var i = 0; i < a.length; i++) {
        var int = parseInt(a[i]);  //
        var float = parseFloat(a[i]);
        if (int === float) {  //potrebni su oni koji su isti, integer, celi brojevi!!
            counter++;
        }
        
    }
    return counter;
}

console.log(integerValuesInArray(a));



/*5. Write a program that calculates a number of float values in the array.
Input: [NaN, 23.1, 15, false, -22.5, "", 4, 7, null]
Output: 2 */

var array = [NaN, 23.1, 15, false, -22.5, "", 4, 7, null];
function floatValues (array) {
    var counter = 0;
    for (var i = 0; i < array.length; i++) {
        var float = parseFloat(array[i]); //svi brojevi
        var int = parseInt(array[i]); 
        if (isFinite(float) && float != int) {
            counter++;
        }
        
    }

    return counter;
}

console.log(floatValues(array));

