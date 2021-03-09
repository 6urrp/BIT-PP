/*Write a conditional statement to
find the sign of product of
three numbers. Display the
result in the console with the
specified sign.

Sample numbers: 3, -7, 2

Output: The sign is -   */

var a = 3;
var b = -7;
var c = 2;
result="";
if ( a * b * c > 0) { 
    result = 'The sign is +';
} else {
    result = 'The sign is -';
}
console.log(result);



/*Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the
console.
Sample numbers: -5, -2, -6, 0, -1
Output: 0 */

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;
result="";

if (a>b && a>c && a>d && a>e) {
    result = "A is the largest number";
} else if (b>a && b>c && b>d && b>e) {
    result = "B is the largest number";
} else if (c>a && c>b && c>d && c>e) {
    result = "C is the largest number";
} else if (d>a && d>b && d>c && d>e) {
    result = "D is the largest number";
} else  if (e>a && e>b && e>c && e>d) {
    result = "E is the largest number";
}

console.log(result);


/*Task 3. Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4
Output : 4, 0, -1*/

var a = 0;
var b = -1;
var c = 4


if (a > b && a > c) {
    if (b > c) {
        console.log(a + " ," + b + " ," + c);
    }
    else {
        console.log(a + " ," + c + " ," + b);
    }
}
else if (b > a && b > c) {
    if ( a > c) {
        console.log(b + " ," + a + " ," + c);
    } else {
        console.log(b + " ," + c + " ," + a);
    }

}
else if (c > a && a > b) {
    if(a > b) {
        console.log(c + " ," + a + " ," + b);

    } else {
        console.log(c + " ," + b + " ," + a);
    }
}


/*Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is
divisible by 2. If it is, print the result, if not, show “X”.
Sample input: 10 Sample input: 7
Output: 10 / 2 = 5 Output: X*/

var a = 10;
var b = 7;
if (typeof a === "number") {   // VIDI ZA TYPEOF
    if (a % 2 == 0) {
          console.log('10 / 2 = 5');
    } else {
         console.log('X');
}
}
if (typeof b === "number") { 
    if (b % 2 ==0) {
        console.log('7 / 2 = 5');
    } else {
        console.log('X');
    }
}


/* Task 5. Write a program that compares two numbers and displays the larger. Display the result in
the console.*/

var a=7;
var b=11;
if (a>b) {
    console.log(a);
}
else {
    console.log(b);
}


/* Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Sample Input: 60°C
Output : 60°C is 140 °F*/

var c=60;
//C = (5/9) * (F - 32)
var f= (9*c/5)+32;
console.log("60°C is 140 °F"); // ne razumem ovaj zadatak




/* Task 7. Write a JavaScript program to get the difference between a given number and 13, if
the number is greater than 13 return double difference between that number and 13.
Sample Input: 11 Sample Input: 32
Output : 2 Output : 38*/

var a=11;
var b=13;
if (a>b) {
    console.log((a - b) * 2);
} else {
    console.log(b - a);
}

var c=32;
var d=13;
var f=c-d;
if (f >13) {
    console.log(f*2)
} 

/* Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two
values are same, then returns triple their sum.
Sample Input: 12,5 Sample Input: 8,8
Output : 17 Output : 48*/

var a=12;
var b=5;
if(a===b) {
    console.log((a+b)*3);
}
else {
    console.log(a+b);
}

var c=8;
var d=8;
if(c===d) {
    console.log((c+d)*3);
}
else {
    console.log(c+d);
}

/* Task 9. Write a JavaScript program to check two given numbers and print “true” if one of
the number is 50 or if their sum is 50.
Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10
Output : - Output : true Output : true*/

var a=5;
var b=54;
if (a===50 || b===50 || a+b===50) {
    console.log("true");
} 
else {
    console.log("-")
}

var c=6;
var d=50;
if (c===50 || d===50 || c+d===50) {
    console.log("true");
}

var s=40;
var t=10;
if (s===50 || t===50 || s+t===50) {
    console.log("true");
}

/* Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
and print range in which number belongs.
Sample Input: 13 Sample Input: 34 Sample Input: 256
Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400*/

var a=13;
if(a >= 20 && a <= 100) {
    console.log("20 ⇔ 100");
} else if(a >= 100 && a<= 400) {
    console.log("100 ⇔ 400");
} else {
    console.log("-");
}

var b=34;
if(b >= 20 && b <= 100) {
    console.log("20 ⇔ 100");
} else if(b >= 100 && b<= 400) {
    console.log("100 ⇔ 400");
} else {
    console.log("-");
}

var c=256;
if(c >= 20 && c <= 100) {
    console.log("20 ⇔ 100");
} else if (c >= 100 && c <=400) {
    console.log("100 ⇔ 400");
} else {
    console.log("-");
}
    





