/*1. Write a function that checks if a given string contains digit 5.
Input: “1b895abd”
Output: true
Input: “1bser9re”
Output: false*/

function containsDigit (string, digit) {
    for (var i = 0; i < string.length; i++) {
        var parseString = parseFloat(string[i]);
        if (parseString === digit) {
            return true;
        }
    }
    return false;
}
var output = containsDigit("1b895abd", 5);
console.log(output);

var output2 = containsDigit("1bser9re", 5);
console.log(output2);


/*2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with
‘**’.
Input: “Programming in JS is super interesting!”
Output: “Programming in ** is super interesting!” */

function replaceString (string) {
    var newString = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "J" && string[i+1] === "S") {
            newString += "*";
            newString += "*";
            i++;
        } else {
            newString += string[i];
        }
    }
    return newString;
}
var result = replaceString("Programming in JS is super interesting!");
console.log(result);


/*3. Write a function that inserts a given character on a given position in the string.
Input: “Goo morning”, 4, ‘d’
Output: “Good morning”*/



function insertCharacter (string, position, char) {
    var newString = "";
    for (var i = 0; i < string.length; i++) {
        if (i === position-1) {
            newString += char;
            newString += string[i];
        } else {
            newString += string[i];
        }
    }
    return newString;
}

var output = insertCharacter("Goo morning", 4, "d");
console.log(output);


/*4. Write a function that deletes a character from the given position in the string.
Input: “Goodd morning!”, 3
Output: “Good morning!” */


function deletesCharacter (string, position) {
    var newString = "";
    for (var i = 0; i < string.length; i++) {
        if (i === position) {
            newString += ""; //DA LI OVO MOZE OVAKO ILI POSTOJI DRUGI NACIN DA IZOSTAVIM TAJ STRING[I]?!
        } else {
            newString += string[i];
        }
    }
    return newString;
}

var output = deletesCharacter("Goodd morning", 3);
console.log(output);


/*5. Write a function that deletes every second element of the given array.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
Output: [3, 1, 90, 23, 67]*/


var myArr = [3, 5, 1, 8, 90, -4, 23, 1, 67];

function deleteEverySecond (array) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArr[newArr.length] = array[i];
        } 
    }
    return newArr;
}

var output = deleteEverySecond(myArr);
console.log(output);


/* 6. Write a function that replaces the elements of the given array between two positions with
their doubled values.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6
Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]*/

var arrayOfMine = [3, 5, 1, 8, 90, -4, 23, 1, 67];
function betweenTwoPositions (array, position1, position2) {
    for (var i = position1; i <= position2; i++) {
        array[i] = array[i] * 2;
    }
    return array;
}

var output = betweenTwoPositions(arrayOfMine, 2, 6);
console.log(output);

/*7. Write a function that checks if a given object has a given property with the given value.
Input: {x: 20, y: 30}, “x”, 20
Output: true
Input: {x: 20, y: 30}, “z”, 20
Output: false
Input: {x: 20, y: 30}, “x”, 10
Output: false */