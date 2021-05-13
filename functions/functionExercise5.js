//1. Find the min and max element in the following array and switch their places. Print out the
//modified array in the console.
//Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
//Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]


var array = [3, 500, 12, 149, 53, 414, 1, 19];

function switchMinMax (array) {
    var index = 0;
    var index2 = 0;
    var $max = array[0];
    var $min = array[0];
    for (var i = 0; i < array.length; i++ ) {   
        if (array[i] < $min) {
            $min = array[i];
            index = i;
        }
        if (array[i] > $max) {
            $max = array[i];
            index2 = i;
        }
    }
    array[index] = $max;
    array[index2] = $min;
    return array;
}

console.log(switchMinMax(array));



/*2. Use the following array to make a new one by dividing its values by two and adding 5. If
a given element's value is 0, change it to 20.
Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ] */


var array = [3, 500, -10, 149, 53, 414, 1, 19];

function dividingAndAddingValues (array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] <= 0) {
            array[i] = 20;
        } else {
            array[i] = array[i] / 2 + 5;
        }
    }
    return array;

}

console.log(dividingAndAddingValues(array));


/*3. Initialize two arrays. The first one should contain student names, the second one the
number of points for each student. Display students' names with their corresponding
grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input:
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99,
51, 83, 59 ]
Output:
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete
the exam.*/

var students = ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"];
var points = [50, 39, 63, 72, 99, 51, 83, 59];

function correspondingGrade (students, points) {
    var result = "";
    var grade = "";

    for (var i = 0; i < points.length; i++) {
        if (points[i] > 50 && points[i] < 61) {
            grade = "earned 6";
        } else if (points[i] > 60 && points[i] < 71) {
            grade = "earned 7";
        } else if (points[i] > 70 && points[i] < 81) {
            grade = "earned 8";
        } else if (points[i] > 80 && points[i] < 91) {
            grade = "earned 9";
        } else if (points[i] > 90 && points[i] <= 100) {
            grade = "earned 10";
        } else {
            grade = "failed to complete exam";
        }
        result += students[i] + " acquired " + points[i] + " points and " + grade + ".\n";
    }
    return result;

}

console.log(correspondingGrade(students, points));

/*4. (skip :))Sort a previously defined array. Place its sorted values into a new array whose
values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]*/


var array = [13, 11, 15, 5, 6, 1, 8, 12];
function sortArray (array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            var element = array[j];
            var next = array[j+1];

            if (element > next) { //uporedjujem da li mi je prvi veci od sledeceg
                array[j] = next; //ako jeste, moj prvi dobija vrednost tog drugog koji je manji
                array[j+1] = element; //a drugi dobija vrednost prvog, odnosno veceg
            }
            
        }
        
    }
    for (var k = 0; k < array.length; k++) {
        result[result.length] = array[k] * 2;
    }
    return result;
}
 
var output = sortArray(array);
console.log(output);


/*5. (skip :))Sort a previously defined array in a descending order and display it in the
console.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]*/

var $myArray = [ 13, 11, 15, 5, 6, 1, 8, 12 ];

function descendingOrder (array) { 
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            var element = array[j];
            var next = array[j+1];

            if (element < next) {
                array[j] = next;
                array[j+1] = element;
            }
        }
    }
    return array;
}

var output = descendingOrder($myArray);
console.log(output);





/*6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and
subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
be multiplied by 12.5 and displayed in console.
Output: 2350000*/


function multipliedSum (even, odd) {
    var sum1 = 0;
    var sum2 = 0;
    var result = 0;
    for (var i = 1; i <= even; i++) {
        if(i % 2 === 0) {
            sum1 += i;
        }
        if (i % 2 === 1 && i <= odd) {
            sum2 += i;
        }
    }
    result = (sum1 - sum2) * 12.5;
    return result;
}

console.log(multipliedSum(1000, 500));


/*7. Define a 10 element array. Take the first two letters from every string (that has at least 2
letters) in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
    
Output: AnStJoJoDaMa*/

var array = ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"];

function firstTwoLetters (array) {
    var newString = "";
  for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === "string" && array[i].length >= 2) {
            for (var j = 0; j < 2; j++) {
                newString += array[i][j];
            }
        }
    }
    return newString;
}

console.log(firstTwoLetters(array));


/*8. Write a program that takes a string and prints its characters out in reversed order in the
console.
Input: Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB*/

var myString = "Belgrade Institute of Technology";

function reversedString (string) {
    var result = "";
    for (var i = string.length-1; i >= 0; i--) {
        result += string[i];
    }
    return result;
}

console.log(reversedString(myString));


/*9. Write a program that displays all the combinations of two numbers between 1 and 7.
Don't display two of the same numbers at the same time. Display the number of possible
combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).*/

function combinationOfNumbers () {
    for (var i = 1; i <= 7; i++) { 
        for (var j = 1; j <= 7; j++) {
            if (i !== j){
                console.log(i, j);
            } 
        }
    }
}
(combinationOfNumbers());



/* 10. Write a program that checks if the entered number is a prime number (i.e. divisible only
by 1 and by itself).
Input: 17 | 15
Output: true | false*/

var inputNumber = 17;

function isPrime(number) {
    if (number % 2 === 0) {
        return false;
    }
    for (var i = 2; i < number; i++) { //krecem od dva jer je svaki broj deljiv sa 1. Trazim broj koji nije deljiv ni sa jednim brojem izmedju
        if (number % i === 0) {
            return false;
        } else {
            return true;
        }
    }
}

var output = isPrime(inputNumber);
console.log(output);


/*11. Check if a given string is a palindrome (spaces are ignored).
Input: eye | Geek | a nut for a jar of tuna
Output: true | false | true*/

var $myRandomString = "a nut for a jar of tuna";

function isPalindrome (string) {
    var result
    for (var i = 0, j = string.length-1; i < j; i++, j--) {
        if (string[i] === " "){
            string[i] = string[i+1];
            i++;
        }
        if (string[j] === " ") {
            string[j] = string[j-1];
            j--;
        }
        if (string[i] !== string[j]) {
            return false;
        }
    }
    return true;
}
var output = isPalindrome($myRandomString);
console.log(output);


/*12. Write a program that calculates the greatest common divisor of two integers. Note: The
greatest common divisor of two non-zero integers is the greatest positive number that
divides both numbers with no remainder.
Input: 192 42 | 81 9
Output: 6 | 9*/

function commonDivisor (numb1, numb2) {
    var divisor = 0;
    var min = numb1;
    if (numb2 < min) {
        min = numb2;
    }
    for (var i = min; i > 0; i--) {
        if (numb1 % i === 0 && numb2 % i === 0) {
            divisor = i;
            break;
        }
    }
    return divisor;
}
var output = commonDivisor(192, 42);
console.log(output);



