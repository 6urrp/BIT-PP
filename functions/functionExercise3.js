//1. Write a program to insert a string within a string at a particular position (default is 1,
//    beginning of a string).
//    "My random string", "JS" -> "JS My random string";
//    "My random string", "JS", 10 -> "My random JS string";

var a = "My random string";
var add = "JS ";
var numb = 1;  // numb - 1 = index?? 
var result= " ";
function stringWithinAString (a, add, numb) {
    numb = numb || 1;
    if (numb === 1) {
        return add + a;
    }
    var result = "";
    for (var i = 0; i < a.length; i++) {
        if (i === numb) {
            result += add + a[i]; // sta je sa razmakom??
        } else {
            result += a[i];
        }
    }
    return result;
}

console.log(stringWithinAString(a, add, numb));



//2. Write a program to join all elements of the array into a string skipping elements that are
//undefined, null, NaN or Infinity.
//[NaN, 0, 15, false, -22, '', undefined, 47, null]


var a = [NaN, 0, 15, false, -22, '', undefined, 47, null];
function stringSkippingElements (array) {
    var result = "";
    for (var i = 0; i < array.length; i++) {
        var $float = parseFloat(array[i]);  //da dobijem brojeve
        if (isFinite($float)) {   // da bi mi ostala i 0, inace da je samo if($float) -> [ 15, -22, 47]; zato sto je 0 falsy
            result += array[i];
        }
    }
    return result;
}

console.log(stringSkippingElements(a));


//////////drugi 


var array = [NaN, 0, 15, false, -22, "", undefined, 47, null];
var result = "";
for (var i = 0; i < array.length; i++) {
    if (!isNaN(array[i]) && array[i] != null) {
        result += array[i];
    }
}


console.log(result); 


//3. Write a program to filter out falsy values from the array.
//[NaN, 0, 15, false, -22, "", undefined, 47, null] -> [15, -22, 47]


var $array = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function falsyValuesOut (array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var booleanArray = !!array[i];  // da bih dobila boolean vrednost svakog elementa u nizu
        if (booleanArray) {
            result[result.length] = array[i];
        }
    }
    return result;
}

console.log(falsyValuesOut($array));


//////////////drugi nacin 

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


//4. Write a function that reverses a number. The result must be a number.
//12345 -> 54321 // Output must be a number

var a = -12345;

function reversesNumber(numb) {
    var result = 0;
    while(numb !== 0) {
        result *= 10; // 0 * 10, 5 * 10
        result += numb % 10; // 0 + 5, 50 + 4 
        numb = numb - numb % 10; //12340, 1230
        numb = numb / 10; // 1234, 123 ... 0.0
    }
    return result;
}
console.log(reversesNumber(a));

console.log(5 % 10);







//5. Write a function to get the last element of an array. Passing a parameter "n" will return the
//last "n" elements of the array.
//[7, 9, 0, -2] -> -2
//[7, 9, 0, -2], 2 -> [0, -2]


var myArray = [7, 9, 0, -2];
var numb = 4;
function lastArrayElement (array, n) {
    n = n || 1;
    var newArr = [];
    var j = 0;
    for (var i = array.length-n; i <= array.length-1; i++) {    // 
        newArr[j] = array[i];
        j++;
    }
    return newArr;
}
console.log(lastArrayElement(myArray, numb));


//6. Write a function to create a specified number of elements with pre-filled numeric value
//array.
//6, 0 -> [0, 0, 0, 0, 0, 0]
//2, "none" -> ["none", "none"]
//2 -> [null, null]


function preFilled (numb, element) {
    if (element === undefined) {
        element = null;
    }
    var result = [];
    for (var i = 0; i < numb; i++) {
        result[result.length] = element;
    }
    return result;
}

console.log(preFilled(2));


/*7. Write a function that says whether a number is perfect.
28 -> 28 is a perfect number.
Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum
of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known
as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors
(including itself).
E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.

Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next
perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128. */

var numb = 496;
function perfectNumber (number) {
    var result = "";
    var sum = 0;
    for (var i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    if (number === sum) {
        result += "This number is PERFECT!"
    } else {
        result += "This number is NOT PERFECT!"
    }
    return result;
}

console.log(perfectNumber(numb));





/*8. Write a function to find a word within a string.
"The quick brown fox", "fox" -> "'fox' was found 1 times"
"aa bb cc dd aa", "aa" -> "'aa'" was found 2 times" */

var myString = "The quick brown fox";
var word = "fox";

function wordWithinString (string, word) {
    var result = "";
    var counter = 0;
    var counter2 = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === word[0]) {
            for (var j = i; j < i + word.length; j++) { //j = 16; 16 < 16(i) + word.length(2) => 18; j++
                    if (string[j] === word[j - i]) {
                        counter2++;
                    } if (counter2 === word.length) {
                        counter++;
                    }
            }
            counter2 = 0;
        }
       
    }
    return "'" + word + "'" + " was found " + counter + " times"; 
}

console.log(wordWithinString(myString, word));



//9. Write a function to hide email address.
//"myemailaddress@bgit.rs" -> "mye...@bgit.rs"

var mail = "sndrtasic@gmail.com";

function hideEmail (email) {
    var result = "";
    var mailIndex = 0;
    for (var i = 0; i < email.length; i++) {
        if (i < 3) {
            result += email[i];
        }
    } result += "...";
    for (var j = 0; j < email.length; j++) {
        if (email[j] === "@") {
            mailIndex = j;
        }
    }
    for (var k = mailIndex; k < email.length; k++) {
        result += email[k];
    }
    return result;
}

console.log(hideEmail(mail));


//10. Write a program to find the most frequent item of an array.

var array = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3,];

function mostFrequent (array) {
    var result = "";
    var counter = 0;
    var counterMain = 0;
    var item = "";
    var mainItem = "";
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                counter++;
                item = array[i];
            }
        } 
        if(counter > counterMain) {
            counterMain = counter; 
            mainItem = item;
        } 
        counter = 0;
    }
    return result += "Most frequent item of this array is '" + mainItem + "' and it appears in total " + counterMain + " times!";
}

console.log(mostFrequent(array));