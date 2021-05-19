//1. Write an array of months in a year. Using console.log display June, October and January
//from the array.

var months=["January", "February", "March", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months[4], months[8], months[0]);

//2. Write an arrays of days in a week. Using console.log display Sunday from the array.

var daysOfWeek= ["Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
console.log(daysOfWeek[6]); //ili console.log(daysOfWeek[daysOfWeek.length - 1]);

//3. Print all negative elements from the array [2, -4, 5, -2, -11].

var numb = [2, -4, 5, -2, -11];

console.log(numb[1], numb[3], numb[4]);





//4. Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18,
//72, 14, 9].

var nums= [5, 15, -5, 20, 12, 18, 72, 14, 9]
console.log(nums[1], nums[4], nums[5], nums[6], nums[7], nums[8]);


/*5. What is the index of number 24 in the following array?
[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,
10, 26, 7]];
Using console.log:
● Display the 3rd element of the array,
● Display the 2nd element of the 3rd element. */

var array = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

console.log(array[0][3]); //za 24
console.log(array[2]);
console.log(array[2][1]);