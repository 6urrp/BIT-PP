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
            newString += "**";
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
        if (i !== position) {
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

var myObject = { 
    x: 20,
    y: 30
};
console.log(myObject.x);


function objectPropertyValue (myObject, prop, value) {
    if (myObject[prop] !== "undefined") {
        if (myObject[prop] === value) {
            return true;
        }
    }
    return false;
} 
var output = objectPropertyValue(myObject, "x", 20);
console.log(output);



/* 8. Write a function that checks if every element of the first array is contained in the second
array. Be careful with repetitions!
Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
Output: true*/

var myArr = [3, 4, 1, 3];
var myArr2 = [8, 9, 3, 1, 11, 4, 3];

function checksEveryElement (checkArray, array) {
    var counter = 0;
    for (var i = 0; i < checkArray.length; i++ ) {
        for (var j = 0; j < array.length; j++) {
            if (checkArray[i] === array[j]) {
                counter++;
                //console.log(j);
                delete array[j];  //da li postoji drugi nacin osim brisanja?!
                break;
            } 
        }
    }
    if (counter === checkArray.length) {
        return true;
    } else {
        return false;
    }
}

var output = checksEveryElement(myArr, myArr2);
console.log(output);


/*9. Write a function that sorts an array of strings by the number of appearances of the letter
‘a’ or ‘A’.
Input: [‘apple’, ‘tea’, ‘amazing’, ‘morning’, ‘JavaScript’]
Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’] */

function sortByAppearance (array) {
    var temp;

    function countA (str){
        var counter = 0;
        for (var k = 0; k < str.length; k++) {
          if (str[k] === "A" || str[k] === "a") {
            counter++;
          }
        }
        return counter;
    }

    for (var i = 0; i < array.length; i++) {
      var min = array[i];
      var minIndex = i;
      for (var j = i; j < array.length; j++) {
        var element = array[j];
        if(countA(element) < countA(min)){
          min = array[j];
          minIndex = j;
        }
      }
      
      temp = array[i];
      array[i] = min;
      array[minIndex] = temp;
    }
    return array;
}

var array = ["apple", "tea", "amazing", "morning", "JavaScript"];
var output = sortByAppearance(array);
console.log(output);


/*10. Write a function that prints out the date of the next day.
Output: 25. 10. 2018.*/

function theNextDay () {
    var current = new Date();
    current.setDate(current.getDate() + 1);
    return current;
}
console.log(theNextDay());

/*11. Write a function that prints out the date of the previous day.
Output: 23. 10. 2018. */

function thePreviousDay () {
    var current = new Date();
    current.setDate(current.getDate() - 1);
    return current;
}

console.log(thePreviousDay());

/* 12. Write a function that prints out an array of the numbers aligned from the right side.
Input: [78, 111, 4, 4321]
Output:
78
111
4
4321*/

function arrayOfNumbers (array) {
    var result = 0;
    for (var i = 0; i < array.length; i++) {
        result = (result + array[i])  + "\n";
    }
    return result;
}

var array= [78, 111, 4, 4321];
var output = arrayOfNumbers(array);
console.log(output);
