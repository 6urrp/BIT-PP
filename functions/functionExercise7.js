/*1. Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
● takes 4 arguments: number of children, partner's name, geographic location, job title.
● outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N
kids.";
Call that function 3 times with 3 different values for the arguments.*/

function tellFortune (numbChildren, partnersName, location, jobTitle) {
    var result = "You will be a " + jobTitle + " in " + location + ", and married to " + partnersName + " with " + numbChildren + " kids.";
    return result;  
}

console.log(tellFortune("1", "Aca", "Reykjavik", "full stack developer"));
console.log(tellFortune("3", "Tom Holland", "Japan", "doctor"));
console.log(tellFortune("0", "Joji", "LA", "nuclear physicist"));


/*2. You know how old your dog is in human years, but what about dog years? Calculate it!
Write a function named calculateDogAge that:
● takes 1 argument: your puppy's age.
● calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
● outputs the result to the screen like so: "Your doggie is NN years old in dog years";
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog
years.*/

function calculateDogAge (age, dogAge) {
    var dogAge = age * 7;
    var dogToAge = dogAge / 7;
    console.log("Your doggie is " + dogAge + " years old in dog years!");
    console.log("Your doggie is " + dogToAge + " years old!");
}

calculateDogAge(3, 14);
calculateDogAge(5.5, 18.5);
calculateDogAge(1.5, 5);


/*3. Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
● takes 2 arguments: age, amount per day.
● calculates the amount consumed for rest of the life (based on a constant max age).
● outputs the result to the screen like so: "You will need NN to last you until the ripe old age of
X";
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.*/

function calculateSupply (age, amountPerDay) {
    var maxAge = 100;
    var needed = (amountPerDay * 365) * (maxAge - age);
    var output = "You will need " + needed + " to last you until the ripe old age of " + maxAge + "!";
    return output;  
}
var result = calculateSupply(26, 50);
console.log(result);


/*4. It΄s hot out! Let's make a converter based on the steps here.
Create a function called celsiusToFahrenheit:
● Store a celsius temperature into a variable.
● Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:
● Now store a fahrenheit temperature into a variable.
● Convert it to celsius and output "NN°F is NN°C." */

function celsiusToFahrenheit (celsius) {
    var message = "";
    var fahrnheit = celsius * 9 / 5 + 32;
    return message += celsius + "°C is " + fahrnheit + "°F";
}
var output = celsiusToFahrenheit(25);
console.log(output);

function fahrenheitToCelsius (fahrenheit) {
    var message = "";
    var celsius = (fahrenheit - 32) * 5/9;
    return message += fahrenheit + "°F is " + celsius + "°C.";
}
var myOutput = fahrenheitToCelsius(93);
console.log(myOutput);

