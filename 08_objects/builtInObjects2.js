/*1. Write a JavaScript function that reverses a number. typeof result of the function should
be “number”.
12345 -> 54321*/

var $number = 12345;

function reverseNumber (number) {
    var reverse = number.toString().split("").reverse().join("");
    return parseFloat(reverse);
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

var alpha = "Republic Of Serbia"

function alphabetizingString (string) {
    
}

var result2= alphabetizingString (alpha);
console.log(result2);


/*4. Write a function to split a string and convert it into an array of words.
"John Snow" -> [ "John", "Snow" ]*/

var stringToSplit = "John Snow";

function stringInArray (string) {
    return string.split(" ");
}

var result3 = stringInArray(stringToSplit);
console.log(result3);


/*5. Write a function to convert a string to its abbreviated form.
"John Snow" -> "John S."*/





/*6. Write a function that adds string to the left or right of string, by replacing it’s characters.
"0000", ‘123’, "l" -> 0123
"00000000", ‘123’, "r" -> 12300000*/



/*7. Write a function to capitalize the first letter of a string and returns modified string.
"js string exercises" -> "Js string exercises"*/


var nesto = "blabla"
console.log(nesto[0].toUpperCase());

/*8. Write a function to hide email addresses to protect them from unauthorized users.
"somerandomaddress@example.com" -> "somerand...@example.com"*/




/*9. Write a program that accepts a string as input and swaps the case of each character. For
example, if you input &#39;The Quick Brown Fox&#39;, the output should be &#39;tHE qUICK bROWN fOX&#39;.
var UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LOWER = "abcdefghijklmnopqrstuvwxyz";
"The Quick Brown Fox" -> "tHE qUICK bROWN fOX"*/