/*1. Write a function to check whether the `input` is a string or not.
"My random string" -> true
12 -> false*/


function stringOrNot(a) {
    var result = '';
    if (typeof a === 'string') {
        result += a  + " -> true";
    } else {
        result += a + " -> false";
    }
    return result;
}

var str = 3;
console.log(stringOrNot(str));



/*2. Write a function to check whether a string is blank or not.
"My random string" -> false
"" -> true
12 -> false
false -> false */

function blankOrNot(a) {
    var result = "";
    if (typeof a === "string") {
        if (a.length === 0) {
            result += a + " -> true";
        } else {
            result += a + " -> false";
        }
    } else {
        result += a + " -> false";
    }
    return result;

}

var a = 12;
console.log(blankOrNot(a));


/*3. Write a function that concatenates a given string n times (default is 1).
"Ha" -> "Ha";
"Ha", 3 -> "HaHaHa"*/

function concatenatesString (string, conc) {
    var result = "";
    for (var i = 0; i < conc; i++) {
        result += string;
    }
    return result;
}

console.log(concatenatesString("Ha", 3));


/*4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2*/

function letterOccurrences (string, letter) {
    var counter = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            counter++;
        }
    }
    return counter;
}

var string = "My random string";
var letter = "n";
console.log(letterOccurrences(string, letter));


/*5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1.*/


function firstCharacterOccurrence (string, char) {
    var result = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] === char) {
            result = i+1;  // treba nam pozicija a ne index, zato na i dodajemo 1!
            break;
        } else {
            result = -1;
        }
    }
    return result;
}

var a = "sandra";
var char = "a";
console.log(firstCharacterOccurrence(a, char));


/*6. Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1.*/


function lastCharacterOccurrence (string, char) {
    var result = 0;

    for (var i = 0; i < string.length; i++) {
        if (string[i] === char) {
            result = i + 1;
        } else {
            result = -1;
        }
    }
    return result;

}

var a = "sandra";
var char = "a";
console.log(lastCharacterOccurrence(a, char));


/*Write a function to convert string into an array. Space in a string should be represented as
“null” in new array.
"My random string" -> ["M", "y", null, "r", "a" ]
"Random -> ["R", "a", "n", "d", "o", "m"]"*/


function stringIntoArray (string) {
    result = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] != " ") {
            result[result.length] = string[i];
        } else {
            result[result.length] = null;
        }
    }
    return result;
}

var a = "My random string";
console.log(stringIntoArray(a));


/*8. Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.*/


function isPrime (numb) {
    if (numb <= 1) {
        return false;
    } 
    for (var i = 2; i < numb; i++) {
        if (numb % i === 0) {   
            return false;
        } else {
            return true;
        }
    }
}
console.log(isPrime(97));


/*9. Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator.
*/

function spaceSeparator (string, separator) {
    var result = "";
    var sep = "";
    if (separator === undefined) {
        sep = "-";          // ako je undefined, onda ce biti "-"
    } else {
        sep = separator;    // a ako je definisan separator, sep ce preuzeti njegovu vrednost pa cemo dalje kroz kod koristiti sep!
    }
    for (var i = 0; i < string.length; i++) {
        if (string[i] == " ") {
            result += sep;
        } else {
            result += string[i];
        }
    }
    return result;
}

var a = "My random string";
var b = "_";
console.log(spaceSeparator(a, b));



//10. Write a function to get the first n characters and add “...” at the end of newly created string.

function firstCharactersAdd (string, numb) {
    var result = "";
    var add = "..."
    for (var i = 0; i < numb; i++) {
        result += string[i];
    }
    result += add;
    
    return result;
}

console.log(firstCharactersAdd("petar", 2));