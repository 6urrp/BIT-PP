//1. Write a program that calculates the maximum of two given numbers.

function max(a, b) {
    var max = "";

    if (a>b) {
        return max += a + " is higher than " + b;
    } else if (b>a) {
        return max+= b + " is higher than " + a;
    } else {
        return max+= a + " and " + b + " are equal";
    }
}

console.log(max(10, 10));


//2. Write a program that checks if a given number is odd.

function isOdd(a) {
    var result = '';
    if (a % 2 == 1) {
        result = 'the number is odd';
    } else {
        result = 'the number is even';
    } return result;
}


var someNumb = 5;
var res = isOdd(someNumb);
console.log(res);



//3. Write a program that checks if a given number is a three digit long number.

function isThreeDigit(a) {     
    var result = '';
    if (a >= 100 && a <= 999) {
        result = 'three digit number';
    } else {
        result = 'not a three digit number';
    } return result;
}

var someNumb = 104;
console.log(isThreeDigit(someNumb));

//bolji nacin

function isThreeDigit(a) {
    var string = "";
    var res = a;
    if(res < 0) {
        res *= -1;    //ukoliko je broj negativan!
    }

    if(res > 99 && res < 1000) {
        return string += 'Number ' + a + " is a three digit number!"
    }
    return string += 'Number ' + a + " is not a three digit number!"
}

console.log(isThreeDigit(150));



//4. Write a program that calculates an arithmetic mean of four numbers.


//sa argumentima

function arithmeticMean() {
    var sum = 0;
    var mean = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    mean = sum / arguments.length;
    return mean;
}

console.log(arithmeticMean(7, 3, 5, 9));

//bez arg.

function arithmeticMean(a, b, c, d) {
    var sum = (a + b + c + d);
    var avg = sum / 4;

    return avg;
}

 console.log(arithmeticMean(8, 9, 3, 17));



/*5. Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:
*****
*   *
*   *
*   *
*****      */


function square(a) {
    var square = '';
    for(var i = 0; i < a; i++) {
        for(var j = 0; j < a; j++) {
            if(i === 0 || i === a-1) {
                square += '*';
            } else if (j === 0 || j === a - 1) {
                square += '*'
            } else {
                square += ' ';
            }
        }
        square += '\n';
    }
    return square;
}

console.log(square(5));





//6. Write a program that draws a horizontal chart representing three given values. For
//example, if values are 5, 3, and 7, the program should draw:
//* * * * *
//* * *
//* * * * * * *


//bolji nacin:

function horizontalChart() {
    var result = '';
    var numOfArgs = arguments.length;

    for (var i = 0; i < numOfArgs; i++) {
        for (var j = 0; j < arguments[i]; j++) {
            result += '*'
        }
        result += '\n';
    }
    return result;
}

console.log(horizontalChart(5, 3, 7));



//moj prvi nacin

function horizontalChart(a, b, c) {
    var result = '';
    for (var i = 0; i < a; i++) {
        result += '* '; 
    }
    result += '\n';
    for (var j = 0; j < b; j++) {
        result += '* '; 
    }
    result += '\n';
    for (var x = 0; x < c; x++) {
        result += '* '; 
    }
    return result;
}
console.log(horizontalChart(9, 15, 3));



//7. Write a program that calculates a number of digits of a given number.


function numberOfDigits (a) {
    var string = '';
    var counter = 0;
    string += 'Number is ' + a;
    while (a >= 1) {  // mora da se pokrije i nula pa zato mora biti >= 1!!
        a/=10;
        counter++;
    }
    return string += ' and has ' + counter + ' digits';
} 
var a = 4567;
console.log(numberOfDigits(a));

/*
 var a = 456;
 while (a > 1) {
    a /= 10;
    brojac++;
  }
  console.log(brojac);
  // 456 / 10 = 45,6 brojac = 1
  // 45,6 / 10 = 4,56 brojac = 2
  // 4,56 / 10 = 0,456 brojac = 3
  // 0,456 
*/


//drugi nacin 
function numberOfDigits(a) {
    var digitCounter = 0;
    var absNum = a;

    if (a < 0) {
        a *= -1;   //negativne brojeve pretvaramo u pozitivne
    }

    for(var i = a; i >= 1; i /= 10) {
        digitCounter++;
    }


    return digitCounter;
}

console.log(numberOfDigits(-1255));


//8. Write a program that calculates a number of appearances of a given number in a given
//array.
//Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
//Result: 3

function appearances (a, e) {
    var string = '';
    var counter = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[i] === e) {
            counter++;                    // kada nam treba prebrojavanje necega, potreban je brojac ==> COUNTER!!
        }
    }
    return string += 'Appeearance of number ' + e + ' in an array [' + a + '] ' + 'is ' + counter + ' times';
}

var a = [2, 4, 7, 8, 7, 7, 1];
var e = 7;
console.log(appearances(a, e));


// ili

var e = 7;
var a = [2, 4, 7, 8, 7, 7, 1];

function numOfAppears(array, element) {
    var appearCount = 0;

    for (var i = 0; i < array.length; i++) {
        var currentElement = array[i];

        if (currentElement === element) {
            appearCount++;
        }
    }
    return appearCount;
}

console.log(numOfAppears(a, e));




//9. Write a program that calculates the sum of odd elements of a given array.

function sumOfOdd (a) {
    var string = '';
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i]%2 === 1) {            // moze se zapisati i (a[i]%2 !== 0) razlicito je od nula!!
            sum += a[i];
        }
    } return string += 'Number ' + sum + ' is sum of all odd elements in a given array [' + a + ']'; 
}

var a = [2, 4, 7, 8, 7, 7, 1];
console.log(sumOfOdd(a));



//drugi nacin 

function sumOfOdd(array) {
    var sum = 0;

    for(var i = 0; i < array.length; i++) {
        var currentElement = array[i];

        if (currentElement % 2 !== 0) {
            sum += currentElement;
        }
    }
    return sum;
}

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(sumOfOdd(a));



//10. Write a program that calculates the number of appearances of a letter a in a given string.
//Modify the program so it calculates the number of both letters a and A.

function letterAppearances(string) {
    var result = '';
    var a = 0;
    var A = 0;
    var sum = 0;
    for (var i = 0; i < string.length; i++) {
        if(string[i] == 'a') {
            a++;
        }else if (string[i] === 'A');
    }
    return a, A;
}



var string = 'AnastAsija';
console.log(letterAppearances(string));



//drugi nacin 

function numberOfLettersA(string) {
    var appearCount = 0;

    for (var i = 0; i < string.length; i++) {
        var currentChar = string[i];

        if(currentChar === 'a' || currentChar === 'A') {
            appearCount++;
        }
    }
    return appearCount;
}

console.log(numberOfLettersA(''))


//11. Write a program that concatenates a given string given number of times. For example, if
//“abc” and 4 are given values, the program prints out abcabcabcabc.


function concatenateString(str, b) {
    var result = '';
    for (var i = 0; i < b; i++) {
        result += str;
    } 
    return result;
}

var a = 'abc';
var b = 4;
var result = concatenateString(a, b);
console.log(result);







