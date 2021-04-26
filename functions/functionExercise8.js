/* 1. Write IIFE that replaces the first and the last element of the given array and prints out its
elements.
Input array: [4, 5, 11, 9]
Output array: [ 9, 5, 11, 4]*/

var array = [4, 5, 11, 9];

(function (array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var first = array[0]; //4
        var last = array[array.length-1]; //9
        
        if (i === 0) { 
            result[i] = last; 
        }
        else if (i === array.length-1) {
            result[i] = first;
        }
        else {
            result[i] = array[i];
        }
    }
    console.log(result); //zasto ne radi sa return?


})(array);


/*2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
Input: 4 5
Output: 20 */

(function (a, b) {
    console.log(a * b);
})(4, 5);




/*3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
number of replacements.
Input: prograMming
Output: progra**ing, 2*/


(function (string){
    var output = "";
    var counter = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "m" || string[i] === "M") {
            output += "*"
            counter++;
        } else {
            output += string[i];
        }
    }
    console.log(output, counter);
})("prograMming");





/*4. Write a function with parameters name and surname that returns a function that
suggests an email in the form name.surname@gmail.com.
Input: pera peric
Output: pera.peric@gmail.com*/

(function (name, surname) {
    var email = "@gmail.com";
    var output;
    var userName = name + "." + surname;
    output = userName + email;
    console.log(output);
    
})("milan", "stankovic");


/*5. Write a function that returns a function that calculates a decimal value of the given octal
number.
Input: 034
Output: 28*/



(function (octal) {
    var decimal = parseInt(octal, 10);
    console.log(decimal);
})(034);




/*6. Write a function that checks if a given string is valid password. The password is valid if it
is at least 6 characters long and contains at least one digit. The function should receive
two callbacks named successCallback and errorCallback that should be called in case
password is correct or invalid.
Input: JSGuru
Output: Your password is invalid!
Input: JSGuru123
Output: Your password is cool!*/




function successCallback (password) {
    var result;
    for (var i = 0; i < password.length; i++) {
        if (password.length >= 6 && !isNaN(password[i])) { //NACIN DA PROVERIM DA LI MI JE NEKI ELEMENT STRINGA BROJ
            result = "Your password is cool!"
        }
    }
    return true;
}


    
function errorCallback (password) {
    if (password.length < 6) {
        return true;
    } 
    var p = 0;
    for (var i = 0; i < password.length; i++) {
        if (!isNaN(password[i])) {
                p++;
        }
    }
    if (p === 0) {
        return true;
    }
}

(function isValid (pass) {
    if (errorCallback(pass)) {
        console.log("Your password is invalid!");
    } else if (successCallback(pass)) {
        console.log("Your password is cool!");
    }
    else {
        console.log("Please type in your password")  //ako nemam nista od inputa ovo ce biti
    }
})("jsgu");



/*7. Write a function that filters elements of the given array so that they satisfy a condition
given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3]*/

function isOdd (array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            newArray[newArray.length] = array[i];
        }
    }
    return newArray;
}

var output = (function (array) {
    return isOdd(array);
})([2, 8, 11, 4, 9, 3]);

console.log(output);