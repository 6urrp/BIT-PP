//1. Write a program that checks if a given element e is in the array a.
//Input: e = 3, a = [5, -4.2, 3, 7]
//Output: yes

var array = [5, -4.2, 3, 7];
var e = 3;

function elementInArray (array, element) {
    var result = "";
    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            result = "yes";
            break;
        } else { 
            result = "no";
        }
    }
    return result;
}

console.log(elementInArray(array, e));

//Input: e = 3, a = [5, -4.2, 18, 7]
//Output: no

var a = [5, -4.2, 18, 7];
var element = 3;

function inArray(array, element ) {
    var result = ""
    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            result = "yes";
            break;
        } else {
            result = "no";
        }
    }
    return result;
}
var output = inArray(a, element);
console.log(output);

//2. Write a program that multiplies every positive element of a given array by 2.
//Input array: [-3, 11, 5, 3.4, -8]
//Output array: [-3, 22, 10, 6.8, -8]

var array = [-3, 11, 5, 3.4, -8];

function multipliesPositive (array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[i] = array[i] * 2;
        }
    }
    return array;
}

console.log(multipliesPositive(array));


//3. Write a program that finds the minimum of a given array and prints out its value and
//index.
//Input array: [4, 2, 2, -1, 6]
//Output: -1, 3

var array = [4, 2, 2, -1, 6];

function minimumInArray (array) {
    var result = "";
    var index = 0;
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if(array[i] < min) {
            min = array[i];
            index = i;
        }
    }
    return result += "The minimum number of this array is " + min + " and his index is " + index;
}

console.log(minimumInArray(array));


//4. Write a program that finds the second smallest number and prints out its value.
//Input array: [4, 2, 2, -1, 6]
//Output: 2

var array = [4, 2, 2, -1, 6, -10];

function secondSmallest (array) {

    var min = array[0];
    var scdmin = array[0];
    for (var i = 0; i < array.length; i++) { 
        if(array[i] < min) {
            min = array[i];  
        }
    }
    for (var j = 0; j < array.length; j++) {
        if (array[j] < scdmin && array[j] > min) {
            scdmin = array[j];
        }
    } return scdmin;
}
console.log(secondSmallest(array));


//5. Write a program that calculates the sum of positive elements in the array.
//Input array: [3, 11, -5, -3, 2]
//Output: 16

var array = [3, 11, -5, -3, 2];

function sumOfPositive (array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if(array[i] > 0) {
            sum += array[i];
        }
    }
    return sum;
}

console.log(sumOfPositive(array));


/*6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.*/


var array = [2, 4, -2, 7, -2, 4, 2];
function isSymmetric (array) {
    var result = "";
    for (var start = 0, end = array.length-1; start < end; start ++, end --) {
        if (array[start] === array[end]) {
            result = "This array is symmetric!!!";
        } else {
            result = "This is not symmetric array";
        }
    }
    return result;
}

console.log(isSymmetric(array));


/*7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]*/

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];

function intertwinesTwo (array, array2) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result[result.length] = array[i]; // result = [4] /// result[2] = [4, 3, 5]
        result[result.length] = array2[i]; // result[1] = [4, 3]
    }
    return result;
}
console.log(intertwinesTwo(a, b));



//drugi nacin

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];

[4, 3, 5, 8, 6, 11, 2, 9]

function intertwinesTwo (array, array2) {
    var result = [];
    var index1 = 0;
    var index2 = 1;
    for (var i = 0; i < array.length; i++) {
        result[index1] = array[i];
        index1 += 2; // result = [4] /// result[2] = [4, 3, 5]
        result[index2] = array2[i]; // result[1] = [4, 3]
        index2 += 2;
    }
    return result;
}
console.log(intertwinesTwo(a, b));

//8. Write a program that concatenates two arrays.
//Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
//Output array: [4, 5, 6, 2, 3, 8, 11, 9]

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];

function concatenateArrays (array1, array2) {
    var result = [];
    for (var i = 0; i < array2.length; i++) {
        array1[array1.length] = array2[i];
    }
    return array1;
}
console.log(concatenateArrays(a, b))


/*9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]*/


var a = [4, 6, 2, 8, 2, 2];
var e = 2;

function deleteElement (array, element) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== e) {
            newArr[newArr.length] = array[i];
        }
    }
    return newArr;
}

console.log(deleteElement(a, e));


/*10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]*/

var a = [2, -2, 33, 12, 5, 8];
var e = 78;
var p = 3;

function insertElement (array, element, position) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        if (i === position) {
            newArr[newArr.length] = element;
            newArr[newArr.length] = array[i];
        } else {
            newArr[newArr.length] = array[i];
        }
    }
    return newArr;
}

console.log(insertElement(a, e, p));