/*1. Write a JavaScript function that reverses a number. typeof result of the function should
be “number”.
12345 -> 54321*/

var $number = 12345;

function reverseNumber (number) {
    var reverse = number.toString().split("").reverse().join("");
    return parseFloat(reverse); //parsiram da bi bio broj a ne string
}
var result = reverseNumber($number);
console.log(result);
console.log(typeof result);




/*2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
Note: Assume punctuation, numbers and symbols are not included in the passed string.
“Webmaster” -> “abeemrstw”*/

var letters = "WebmAster";

function alphabeticalOrder (string) {
    var lowerString = string.toLowerCase();
    return lowerString.split("").sort().join("");
}

var result1 = alphabeticalOrder(letters);
console.log(result1);





/*3. Write a function to alphabetize words of a given string. Alphabetizing a string means
rearranging the letters so they are sorted from A to Z.
"Republic Of Serbia" -> "Rbceilpu Of Sabeir"*/



var a = "Republic Of Serbia";


function alphabetizingString (string) {
    var arr = string.split(" ");
    var newArr = [];
    arr.forEach(function(el) {
        var sortEl = el.split("").sort().join("");
        newArr.push(sortEl);
    }) 
    return newArr.join(" ");
}

var result2= alphabetizingString (a);
console.log(result2);


/*4. Write a function to split a string and convert it into an array of words.
"John Snow" -> [ "John", "Snow" ]*/

var stringToSplit = "John Snow";

function stringInArray (string) {
    return string.split(' ');
}

var result3 = stringInArray(stringToSplit);
console.log(result3);


/*5. Write a function to convert a string to its abbreviated form.
"John Snow" -> "John S."*/

var $string = "John Snow";


function abbreviatedString (string) {
    var splitString = string.split(" ");
    splitString[1] = splitString[1].charAt(0) + ".";


    return splitString.join(" ");
}

var output = abbreviatedString($string);
console.log(output);




/*6. Write a function that adds string to the left or right of string, by replacing it’s characters.
"0000", ‘123’, "l" -> 0123
"00000000", ‘123’, "r" -> 12300000*/

function addLeftRight (string0, string1, place) {
    var zeroLength = string0.length;
    var oneLength = string1.length;
    var mainLength = zeroLength - oneLength; 
    
    if (place === "l") {
        return string0.slice(0, mainLength).concat(string1);
    } else if (place === "r") {
        return string1.concat(string0.slice(0, mainLength));
    }
}
console.log(addLeftRight("00000000", "123", "r"));


/*7. Write a function to capitalize the first letter of a string and returns modified string.
"js string exercises" -> "Js string exercises"*/

var a = "js string exercises";

function firstCapitalize (string) {
    return string[0].toUpperCase() + string.slice(1);
};

var $output = firstCapitalize(a);
console.log($output);

//drugi nacin

var b = "js string exercises";

function firstCapitalize (string) {
    return string[0].toUpperCase().concat(string.slice(1));
}

var $output1 = firstCapitalize(b);
console.log($output1);



/*8. Write a function to hide email addresses to protect them from unauthorized users.
"somerandomaddress@example.com" -> "somerand...@example.com"*/

var email = "somerandomaddress@example.com";

function hideEmail (email) {
    var emailArr = email.split("@");
    var firstPart = emailArr[0];
    var toLength = firstPart.length / 2;
    return firstPart.slice(0, toLength).concat("...@", emailArr[1]);
}
var res = hideEmail(email);
console.log(res);



/*9. Write a program that accepts a string as input and swaps the case of each character. For
example, if you input "The Quick Brown Fox", the output should be "tHE qUICK bROWN fOX".
var UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LOWER = "abcdefghijklmnopqrstuvwxyz";
"The Quick Brown Fox" -> "tHE qUICK bROWN fOX"*/

var swap = "The Quick Brown Fox";

function swapCharacter (string) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var upperArr = upper.split("");
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var lowerArr = lower.split("");
    var arrString = string.split("");
    var space = " ";
    var result = [];
    //console.log(arrString);
    arrString.forEach(function (el){
        for (var i = 0; i < upperArr.length; i++) {
            if (el === upperArr[i]) {
                result.push(el.toLowerCase());
            } else if (el === lowerArr[i]) {
                result.push(el.toUpperCase());
            } else if (el === space) {
                result.push(el);
                break;
            }
        }
    })
    return result.join("");
}

console.log(swapCharacter(swap)); 