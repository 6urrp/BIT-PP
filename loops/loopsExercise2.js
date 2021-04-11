/* 1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no*/

var e = 3;
var a = [5, -4.2, 3, 7];
var output="no"; // da li mogu staviti odmah no?

for(var i = 0; i < a.length; i++) {
    if(a[i] === e) {
        output = 'yes';
    } 
}
console.log(output);

/* 2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]*/

var array = [-3, 11, 5, 3.4, -8];
for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        array[i]*=2
    }
}
console.log(array);

/*3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3 */

var array = [4, 2, 2, -1, 6]
var min = array[0];
var index = 0;


for (var i = 1; i < array.length; i++) {
   if (array[i] < min) {
       min = array[i];
       index = i;
   }
}
console.log(min, index);


//4. Write a program that finds the first element larger than minimum and prints out its value.
//Input array: [4, 2, 2, -1, 6]
//Output: 2

var array = [4, 2, 2, -1, 6, ];
var min = array[0];
var larger=array[0];

for (var i = 0; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i]; //min je -1
    }  
    // if (array[i] < larger && array[i] !== min) {
    //     larger = array[i];
    // }
    for (var j = 0; j < array.length; j++) {
        if (array[j] < larger && array[j] > min ) { //nejasan prvi deo postavke 
            larger = array[j]; //tu nam je array[2] = 2
        }
    }
}
console.log(larger);

//5. Write a program that calculates the sum of positive elements in the array.
//Input array: [3, 11, -5, -3, 2]
//Output: 16

var array = [3, 11, -5, -3, 2];
sum = 0;

for (var i = 0; i < array.length; i++) {
    if(array[i] > 0) {
        sum = sum + array[i];
    }
} 
console.log(sum);

//6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
//be read the same way both from the left and the right hand side.
//Input array: [2, 4, -2, 7, -2, 4, 2]
//Output: The array is symmetric.
//Input array: [3, 4, 12, 8]
//Output: The array isn’t symmetric.

var array = [3, 4, 12, 8];

var output;

for (var start = 0, end = array.length-1; start < end; start++, end--) {
    if (array[start] === array[end]) {
        output = 'The array is symmetric';
    } else {
        output = 'The array is not symmetric';
    }
}
console.log(output);



var array = [3, 4, 12, 8]; 
output= "";

for (var start = 0, end = array.length-1; start < end; start ++, end--) {
    if (array[start] === array[end]) {
        output = 'The array is symmetric';
    } else {
        output = 'The array is not symmetric';
    }
}
console.log(output);


//7.Write a program that intertwines two arrays. You can assume the arrays are of the same
//length.
//Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
//Output array: [4, 3, 5, 8, 6, 11, 2, 9]

var array1 = [4, 5, 6, 2];
var array2 = [3, 8, 11, 9];
var newArray = [];


for (var i = 0; i < array1.length; i++ ) {
    newArray[newArray.length] = array1[i];
    newArray[newArray.length] = array2[i];
}
console.log(newArray);



//8. Write a program that concatenates two arrays.
//Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
//Output array: [4, 5, 6, 2, 3, 8, 11, 9].

var array1 = [4, 5, 6, 2];
var array2 = [3, 8, 11, 9];
var newArray = [];

for (var i = 0; i < array1.length; i++) {
    newArray[i] = array1[i];
}

for (var i = 0; i < array2.length; i++) {
    newArray[newArray.length] = array2[i]; 
}
console.log(newArray);



//9. Write a program that deletes a given element e from the array a.
//Input: e = 2, a = [4, 6, 2, 8, 2, 2]

//Output array: [4, 6, 8]

var array = [4, 6, 2, 8, 2, 2];
var e = 2;
var newArray = [];

for (var i = 0; i < array.length; i++) {
    if (array[i] !== e) {
        newArray[newArray.length] = array[i];
    }
}
console.log(newArray);


//10. Write a program that inserts a given element e on the given position p in the array a. If
//the value of the position is greater than the array length, print the error message.
//Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
//Output: [2, -2, 33, 78, 12, 5, 8]

var a = [2, -2, 33, 12, 5, 8];
var e = 78;
var p = 3;
var newArray = [];

for (var i = 0; i < a.length; i++) {
    if (i === p) {
        newArray[newArray.length] = e;
        newArray[newArray.length] = a[i];
     } else {
        newArray[newArray.length] = a[i];
     }
}
console.log(newArray);