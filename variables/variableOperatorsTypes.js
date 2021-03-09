
/* Variable declaration and initialization
1. Create several variables using different letter cases and beginning characters. Check if they
still exist if you refer to them in different case - does case matter here? Try to declare a variable
starting with number as the first character. */

var ranac = 2;
var Ranac = 5;
var RanaC = ranac * Ranac;

console.log(RanaC);

//var 4ps = "pro";   //eror zbog pocetnog broja kao naziv varijable
var ps4 = "motion";
//var sonyps4 = 4ps + ps4; // kad sabiram varijable ne stavljam ih u navodnike
console.log(sonyps4);

// 2. Save a string (text) describing your current mood in a variable and print it out in console.

var mood = "ready to learn";
console.log('I\'m totally ' + mood); //Pod navodnicima deo teksta koji zelim da se stampa pored value od variable

//3. Feel free to play around in the console and get familiar with it.

console.log(undefined == null); //isto je po vrednosti pa je zato true
console.log(undefined === null); //isto je po vrednosti ali ne i po tipu, pa je false

console.log(false === ""); //isto po vrednosti ali razlicito po tipu

var $amethyst6 = 3e+2;
var $marine = "24"; 
console.log(typeof $amethyst6);
console.log(typeof $marine);
console.log($amethyst6 * $marine);  //7200 je rezultat zato sto se 24 prepoznaje kao broj a ne kao string


/*Arithmetic operators
4. Play around in the console: add, subtract, multiply and divide some numbers. Use numbers
stored in variables you created as well. Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3.
Why do we get these results? */ 

var myFirstNumber = 1e1;
var mySecondNumber = 5.328;
var myThirdNumber = 2;
console.log(myFirstNumber * myThirdNumber - mySecondNumber);

var a = 3;
var b = 2;
var c = 31;
var allTogether = a-b-c;
console.log(allTogether);

var a = 3;
var b = 5;
var c = 7;
var d = 3;
console.log(a*b-c/d);

var a = 4
var b = 2
var c = 1.14
console.log(a/b-c*3);

//5. How many grams weight 1.2kg of bananas?

var bananasKg = 1.2;
var gramsInKg = 1000;
var bananasInGr = bananasKg * gramsInKg;
console.log(bananasInGr + ' grams');


/*6. How many extra seconds we wait for our friend Anna who is being late for 5 minutes? What
about Tom who is being late half an hour? It is hard to be on time these days…*/

var anna = 5;
var tom = 30;
var secondsInOneMinute = 60;
console.log('Ana is late ' + anna*secondsInOneMinute + ' seconds');
console.log('Tom is late ' + tom*secondsInOneMinute + ' seconds');


/*7. How many MB of additional memory we have if we buy a 4GB USB stick? How many news
articles each in size 98KB can fit in it?*/

var myMemory = 4;
var mb = 1024;
var newsArticle = 98/1024; //KB U MB
console.log(myMemory*mb);
console.log(myMemory*mb/newsArticle);

//9. Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?

var a = 3;
//console.log(a = a * 2); 
console.log(a *= 2)

var b = 3;
console.log(b += 3);

var c = 10;
console.log(c/=5);

var d=22;
console.log(d-=7);


/*10. Create the following variables:
- a variable containing your name,
- a variable containing your age,
- a variable describing if you have a cat or not.
* Each variable has to start with a different type of character.
Print them all out in the console and check their types. */

var _myName = "Sandra";
var $myAge = 25;
var anyPets;
console.log(typeof _myName);
console.log(typeof $myAge);
console.log(typeof anyPets);



/* 11. Check which type are these values:
- “number”
- true
- null
- “false”
- 56 */

console.log(typeof 'number' );

console.log(typeof true);
console.log(typeof null);
console.log(typeof 'false');
console.log(typeof 56);

/*12. Check how good you are at guessing the Boolean equivalent of different values using the
console. Do you remember how to check for a Boolean equivalent of a value? */

var a = 'naocare';
var b = 'naocare';  //mora biti isti tekst ili isti broj da bi bilo true

console.log(a == b);

//13. Use the console to check the results you think should go in the following table:

var p=true;
var q=true;
console.log(p&&q);
console.log(p||q);

var p=true;
var q=false;
console.log(p&&q);
console.log(p||q);

var p=false;
var q=true;
console.log(p&&q);
console.log(p||q);

var p=false;
var q=false;
console.log(p&&q);
console.log(p||q);





/*14. If the variable age stores the information about user’s age, how we can check whether it
contains a correct value? Write expressions for checking:
● Is age negative value
● Is age greater than 120*/

var age = 25;
if(age < 0 && age > 120) {
    console.log('Age is not correct value'); 
}
else {
    console.log('Age is correct value');
}

/* MOZE I OVAKO, PRVI USLOV POZITIVAN var age = 25;
if(age >0 && age <=120) {
    console.log(true);
}
else{
    console.log(age + ' is false value');
} */


/*15. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If
we store the current speed value in the variable speed. Write an expression which will check if
we are driving drive safely or not? (true if we are driving safe and false if not)*/

var mySpeed = 75;
var minSpeed = 60;
var maxSpeed = 120;
if(mySpeed >= minSpeed && mySpeed <= maxSpeed) { //i a ne ili!!!
    console.log("My speed is safe");
}
else {
    console.log("Current speed is not safe");
}


