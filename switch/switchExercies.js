/* 1. Write a program that shows text representation of a day in a week for a number input from
1 to 7. Print output in console.
For input 1, output should be “Monday”.*/

var number=1;
var result="";

switch (number) {
    case 1:
        result = "Monday";
        break;
    case 2:
        result = "Thuesday";
        break;
    case 3:
        result = "Wednesday";
        break;
    case 4:
        result = "Thursday";
        break;
    case 5:
        result = "Friday";
        break;
    case 6:
        result = "Saturday";
        break;
    case 7:
        result ="Sunday";
        break;   

    default:
        result= "Error"
        break;
}

console.log(result);

/* 2. Write a program that shows text representation of a day in a week for a number input from
1 to 7. All other cases output a message explaining that input must be a number between 1
and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”.*/

var number=10;
var result="";

switch (number) {
    case 1:
        result = "Monday";
        break;
    case 2:
        result = "Thuesday";
        break;
    case 3:
        result = "Wednesday";
        break;
    case 4:
        result = "Thursday";
        break;
    case 5:
        result = "Friday";
        break;
    case 6:
        result = "Saturday";
        break;
    case 7:
        result ="Sunday";
        break;   

    default:
        result= "Input must be a number between 1 and 7"
        break;
}

console.log(result);

/* 3. Write a program that for a 1-7 number input (representing a day in a week) shows if that day
is a weekday or weekend. All other cases output a message explaining that input must be a
number between 1 and 7.
For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”.*/

var number=2;
var result="";

switch (number) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        result = "It\’s weekday";
        break;
    case 6:
    case 7:
        result ="It\’s weekend";
        break;   

    default:
        result= "Input must be a number between 1 and 7"
        break;
}

console.log(result);

var number=6;
var result="";

switch (number) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        result = "It\’s weekday";
        break;
    case 6:
    case 7:
        result ="It\’s weekend";
        break;   

    default:
        result= "Input must be a number between 1 and 7"
        break;
}

console.log(result);

var number=12;
var result="";

switch (number) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        result = "It\’s weekday";
        break;
    case 6:
    case 7:
        result ="It\’s weekend";
        break;   

    default:
        result= "Input must be a number between 1 and 7"
        break;
}

console.log(result);

/*4. Write a program that for a 1-12 number input (representing a month in a year) shows that
month’s name. All other cases output a message explaining that input must be a number
between 1 and 12.
For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”. */

var number=2;
var number2=6;
var number3=13;
var result="";
switch (number3) {
    case 1:
        result="January";
        break;
    case 2:
        result="February";
        break;
    case 3:
        result="March";
        break;
    case 4:
        result="April";
        break;
    case 5:
        result="May";
        break;
    case 6:
        result="June";
        break;
    case 7:
        result="July";
        break;
    case 8:
        result="August";
        break;
    case 9:
        result="September";
        break;
    case 10:
        result="October";
        break;
    case 11:
        result="November";
        break;
    case 12:
        result="December";
        break;

    default:
        result="Input must be a number between 1 and 12";
        break;
}

console.log(result);

/*5. Write a program that for a 1-12 number input (representing a month in a year) shows what
season it is. All inputs different from 1-12 output a message explaining that input must be a
number between 1 and 12. */

var monthNumber=12;
result="";

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        result="Winter";
        break;
    case 3:    
    case 4:  
    case 5:
        result="Spring";
        break;
    case 6: 
    case 7:
    case 8:
        result="Summer";
        break;
    case 9:
    case 10:
    case 11:
        result="Fall";
        break;

    default:
        result="Input must be a number between 1 and 12";
        break;
}

console.log(result);


/*6. Write a program that for a string input of a grade from “A”-“F” outputs a proper info
message about that grade in the following manner: A - "Good job", B - "Pretty good", C -
"Passed", D - "Not so good", F - "Failed". Input different from letters A-F outputs a message
"Uknown grade". */

var grade="C";
var result="";
switch (grade) {
    case "A":
        result="Good job";
        break;
    case "B":
        result="Pretty good";
        break;
    case "C":
        result="Passed";
        break;
    case "D":
        result="Not so good";
        break;
    case "F":
        result="Failed";
        break;    

    default:
        result="Uknown grade";
        break;
}
console.log(result);

/*7. Write a program that takes as input a city name and outputs the country where the city is.
You may choose which cities and countries you want to output yourself, however there has
to be at least 5 countries and 15 cities. Note that each country must have a different
number of cities. Input different from the listed cities should output a "Please
choose a different city". */

var city="Athens";
var country="";

switch (city) {
    case "Thessaloniki":
    case "Ioannina":
    case "Athens":
        country="This is a city of Greece";
        break;
    case "Reykjavík":
    case "Grindavík":
    case "Höfn":
    case "Dalvík":
        country="This is a city of Iceland"
        break;
    case "Paris":
    case "Lyon":
    case "Nice":
    case "Strasbourg":
    case "Marseille":
        country="This is a city of France"
        break;
    case "Tokio":
    case "Kyoto":
    case "Osaka":
        country="This is a city of Japan"
        break;
    case "Nauru":
        country="This is the only city of Republic of Nauru"
        break;
    case "Mumbai":
    case "Kolkata":
        country="This is the city of India"    
        break;
    default:
        country="Please choose a different city";
        break;
}

console.log(country);

/*8. Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero! */

var input1=7;
var input2=0;
var sign="/"
switch (sign) {
    case "+":
        console.log(input1 + input2);
        break;
    case "-":
        console.log(input1 - input2);
        break;
    case "/"&&input2!=0:
        console.log(input1 / input2);
        break;
    case "*":
        console.log(input1 * input2);
        break;

    default:
        console.log("Watch out for division by zero!");
        break;
}