/* 1. Write a function that capitalizes the first letter of each string argument it receives.
Function arguments: ["hello", "there", "ES", 6]
Output: ["Hello", "There", "ES"]*/


const capitalizeFirst = (arr) => {
    let newArr = [];
    arr.forEach((el) => {
      if (typeof el !== "number") {
        newArr.push(el[0].toUpperCase() + el.slice(1));
      };
    });
    return newArr;
};

const myArr = ["hello", "there", "ES", 6];
const result = capitalizeFirst(myArr);
console.log(result);




/*3.	Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.  
Input: [4, 6, 11, -9, 2.1], 2
Output: [6, 8, 13, -7, 4.1]*/


const increaseEach = (arr, numb) => arr.map(x => x + numb);

let arrayToIncrease = [4, 6, 11, -9, 2.1];
let resultIncreased = increaseEach(arrayToIncrease, 2);
console.log(resultIncreaseds);


/*4.	Write a function that filters all even elements of the array.
Input: [6, 11, 9, 0, 3]
Output: [6, 0]*/

const filterEven = arr => arr.filter(current => current % 2 === 0);

let arrayToFilter = [6, 11, 9, 0, 3];
let resultFiltered = filterEven(arrayToFilter);
console.log(resultFiltered);


/*5. Write a function that filters all the strings from the given array that contain substring JS or js.
Input: ["compiler", "transpiler", "babel.js", "JS standard", "linter"]
Output: ["babel.js", "JS standard"]*/
​
const filterContainJS = arr => arr.filter(current => current.toLowerCase().includes("js"));
const resultJS = filterContainJS(["compiler", "transpiler", "babel.js", "JS standard", "linter"]);
console.log(resultJS);


/*6. Write a function that filters all integer numbers from the given array.
Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
Output: [7, 8] */

const filterAllInteger = arr => arr.filter(current => current % 1 === 0);
const filteredIntegers = filterAllInteger([1.6, 11.34, 9.23, 7, 3.11, 8]);
console.log(filteredIntegers);


/*7. Write a function that filters all integer arguments that contain digit 5.
Function arguments: 23, 11.5, 9, "abc", 45, 28, 553
Output: [45, 553] */


const filterIntegerArguments = (...args) => args.filter(current => typeof current === "number" && parseInt(current).toString().includes(5));
const filteredArguments = filterIntegerArguments(23, 11.5, 9, "abc", 45, 28, 553);
console.log(filteredArguments);


/*8. Write a function that returns indexes of the elements greater than 10.
Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
Output: 1, 2, 5 */


const returnIndex = arr => {
  let counter = [];
  arr.forEach((current, index) => {
    if (current > 10) {
      counter.push(index);
    };
  });
  return counter.join(", ");
}
const indexes = returnIndex([1.6, 11.34, 29.23, 7, 3.11, 18]);
console.log(indexes);



/* 9.
a. Create an array of persons. A person should be an object with name and age properties.
Experiment with enhanced object literals.
b. Write a function that prints out the names of persons older than 25.
c. Write a function that check if there is a person older than 40.
d. Write a function that checks if all persons are older than 20.*/




/*10. Write a function that checks if the given array is an array of positive integer values.
Input: [3, 11, 9, 5, 6]
Output: yes
Input: [3, -12, 4, 11]
Output: no*/

const isPositive = arr => arr.every(el => el > 0);
const isPositiveArray = isPositive([3, 11, 9, 5, 6]);
console.log(isPositiveArray);



/*11. Write a function that calculates the product of the elements of the array.
Input: [2, 8, 3]
Output: 48*/

const product = arr => arr.reduce((a, b) => a * b);
const arrayProduct = product([2, 8, 3]);
console.log(arrayProduct);



/*12. Write a function that calculates the maximum of the given array.
Input: [2, 7, 3, 8, 5.4]
Output: 8*/

const calcMax = arr => arr.reduce((a, b) => Math.max(a, b));
const max = calcMax([2, 7, 3, 8, 5.4]);
console.log(max);

