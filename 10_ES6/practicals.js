/* 1. Write a function that capitalizes the first letter of each string argument it receives.
Function arguments: ["hello", "there", "ES", 6]
Output: ["Hello", "There", "ES"]*/


const capitalizeFirst = (arr) => {
    let newArr = [];
    arr.forEach((el) => {
      if (typeof el !== "number") {
        newArr.push(el[0].toUpperCase() + el.slice(1));
      }
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

let arrayToIncrease = [4, 6, 11, -9, 2.1]
let resultIncreased = increaseEach(arrayToIncrease, 2);
console.log(resultIncreaseds);


/*4.	Write a function that filters all even elements of the array.
Input: [6, 11, 9, 0, 3]
Output: [6, 0]*/

const filterEven = arr => arr.filter(current => current % 2 === 0)

let arrayToFilter = [6, 11, 9, 0, 3]
let resultFiltered = filterEven(arrayToFilter);
console.log(resultFiltered);
​
