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
var char = "o";
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
    var result = [];
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

var prime = 84;
function isPrime (prime){
    var result = "";
    if (prime === 2) {
        result = "Number is prime";  //dvojka je izuzetak od parnih brojeva i zato posebno stavljamo uslov za nju
    }
    if (prime % 2 === 0) {
        result = "Number is not a prime";  //prime brojevi nisu nikad parni (osim broja 2)
    } else {
        for (var i = 2; i < prime; i++) {  // sto znaci da ce ovde za sve neparne brojeve otvoriti petlju koja obuhvata sve brojeve koji nisu 1, i koji nisu broj koji mi imamo
            if (prime % i === 0) {  //tako da ako taj broj delimo sa i i on bude nula, to nije prime broj, jer nama treba broj deljiv samo sa 1 sa sa samim sobom
               result = "Number is not a prime";
               break; // imamo break, jer cim je deljiv sa drugim brojem i nema ostatak, onda nije prime
            } else { 
                result = "number is prime"; // sto znaci da su ostali svi prime, oni koji su nam potrebni
            }
        }
    } 
    return result;
}

console.log(isPrime(prime));



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

console.log(firstCharactersAdd("petar", 3)); // ISPRAVI



/*11. Write a function that converts an array of strings into an array of numbers. Filter out all
non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000] */


function arrayOfStringsInNumb (array) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        var numb = isFinite(array[i]);
        if (numb) {
            newArr[newArr.length] = parseFloat(array[i]); //zasto ovde array[i] a ne numb[i]??
        }
    }
    return newArr;
}

var a = ["1", "21", undefined, "42", "1e+3", Infinity];

console.log(arrayOfStringsInNumb(a));


//12. Write a function to calculate how many years there are left until retirement based on the
//year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
//already retired, a proper message should be displayed.


function untilRetirement (birthyear, sex) {
    var currentYear = 2021;
    var retirementYear;
    var tillRetirement;
    if (sex === 'male') {
        retirementYear = 65;
    } else if (sex === 'female') {
        retirementYear = 60;
    }

    tillRetirement = currentYear - birthyear;   //    till = 2021 - 1970 = 51
 
    if (retirementYear >= tillRetirement) {
        tillRetirement = retirementYear - tillRetirement;
        tillRetirement += " years till retirement";
    } else {
        tillRetirement = 'Already retired';
    }

    return tillRetirement;
}

var a = 1990;
var b = "male";
console.log(untilRetirement(a, b));

//13. Write a function to humanize a number (formats a number to a human-readable string) with
//the correct suffix such as 1st, 2nd, 3rd or 4th.
//1 -> 1st
//11 -> 11th

function humanizeNumber (number) {
    var numberString = number + "";
    var result;
    if (numberString[numberString.length-1] === 1 && numberString !== 11 ) {
        result = numberString + 'st';
    } else if (numberString[numberString.length-1] === 2 && numberString !== 12) {
        result = numberString + 'nd';
    } else if (numberString[numberString.length-1] === 3 && numberString !== 13) {
        result = numberString + 'rd';
    } else {
        result = numberString + 'th';
    }
    return result;
}

var a = 21;
console.log(humanizeNumber(a));


//drugi nacin sa %

function humanizeNumber (number) {
    var result;
    if (number % 10 === 1 && number !== 11) {
        result = number + 'st';
    } else if (number % 10 === 2 && number !==12 ) {
        result = number + 'nd';
    } else if (number % 10 === 3 && number !==13 ) {
        result = number + 'rd';
    } else {
        result = number + 'th';
    }
    return result;
}

var a = 11;
console.log(humanizeNumber(a));