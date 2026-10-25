// console.log("hello javascript");
// console.log("Hello Zaman ");
// console.log("All power is within you can do anything everything ");
// console.log("I love Javascript");

// VARIABLES

// let age = 20;
// age =25;
// console.log(age);

// const pi = 3.14;
// console.log(pi);

// let x = null;
// console.log(x);

// var name = "zaman"; // dynamically typed
// name = 100;
// console.log(name);

// let a; //undefined
// console.log(a);

// Data Types 

//  let a = 10;
//  let name ="zaman";
//  let num1 = 12345678901234567890n;
//  let isAdult = true;
//  let x;
//  let user = null;
//  let id = Symbol("id");

//  console.log(a);
//  console.log(typeof(a));

//  console.log(name);
//  console.log(typeof(name));

//  console.log(num1);
//  console.log(typeof(num1));

//  console.log(isAdult);
//  console.log(typeof(isAdult));

//  console.log(x);
//  console.log(typeof(x));

//  console.log(user);
//  console.log(typeof(user));

//  console.log(id);
//  console.log(typeof(id));

//  let id = Symbol("id");
//  let user = {
//     name: "zaman",
//     [id]: 101,
//  };
//  console.log(user.name);
//  console.log(user[id]);

// Symbol datatype
// let user = {}; // Empty object create kiya

// let id = Symbol("id"); // Unique Symbol create kiya
// user[id] = 101; // Symbol key ke andar 101 store kiya
// user.id = 200; // Normal "id" key ke andar 200 store kiya
// console.log(user[id]); // 101 -> Symbol key ki value
// console.log(user.id);  // 200 -> Normal "id" key ki value

// OBJECT (NON-PRIMITIVE DATATYPE)
//  let student = { 
//     name : "zaman",
//     age :20,
//     cgpa : 8.3,
//     course : "B.TECH CSE",
//     isPass:true
//  };
//  student.age = student.age + 2;
//  student.name = "syed";
//  student["course"] = student["course"] + " Invertis";
//  console.log(student);
//  console.log(student.name);
//  console.log(student["age"]); 
//  console.log(student.course) ;

// let product = {
//     name : "Ball Pen",
//     rating : 5,
//     offer : 15,
//     price : 270
// }; 
// let product2 = product;
// product2.name = "RED Pen";
// console.log(product2.name);
// console.log(product2);

// console.log(product);
// console.log(typeof product.price);

// TRUTHY VALUES IN JS
// let value = "Hello";
// if(value){
//     console.log("truthy");
// }
// if("hello"){
//     console.log("truthy");
// }
// if([]){
//     console.log("truthy");
// }
// if({}){
//     console.log("truthy");
// }
// if(100){
//     console.log("truthy");
// }

// FALSY VALUES IN JS
// let age = 0;
// if(age){
//     console.log("truthy");
// } else {
//     console.log("falsy");
// }
// let name = "";
// if(name){
//     console.log("string exist");
// } else {
//     console.log("string is empty");
// }

// Falsy values with || operator
// let username = "";
// let result = username || "Zaman";
// console.log(result);

// if(false){ // null
//     console.log("truly");
// } else {
//     console.log("falsy");
// }

// LEXICAL SCOPE
// let x = 10; 
// function outer()
//  { let y = 20;
//      function inner()
//      { 
//         let z = 30;
//         console.log(x);
//         console.log(y);
//         console.log(z);
//       } 
//       inner(); 
//     } 
// outer();

// CLOSURES
/*function outer(){
    let count =0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}
let counter = outer();
console.log(counter);
counter(); // 1
counter(); // 2
counter(); // 3 */


// TYPE CONVERSION
// let n = "100";
// let num = Number(n);
// console.log(typeof(num));
// console.log(num);

// string concatenation

// let age = 21;
// let name = "zaman";
// console.log("age is: " + age + " name is: " + name);
// console.log("10"+500);
// console.log("10"-5);

// OPERATORS IN JAVASCRIPT - USED TO PERFORM SOME OPERATION ON DATA

// ARITHMETIC OPERATOR 
/*let a = 10;
let b = 3;
console.log(a-b);
console.log(a+b);
console.log(a%b);
console.log(a*b);
console.log(a/b);
console.log(a**b); */

//UNARY OPERATOR
 /* let a = 5; let b = 6;
 a++; b--;   // post inc,dec
 console.log(a);
 console.log(b);
 let c = 7; let d = 8;
 ++c; --d;  // pre inc,dec
 console.log(c);
 console.log(d); */

 // COMPARISION OPERATORS - return boolean
/* let a = 10;  let b = 15;
 console.log( a== b);
 console.log( a != b );
 console.log( a===b );

 let x = 5; let y = "5";
 let i = 10; let j = "9";
 console.log( x==y );
 console.log( x===y );
 console.log( i != j );
 console.log( i !== j); */

 // LOGICAL OPERATOR (&&) (||) (!) - return boolean
 /* let a = 5, b=7;
 console.log( a===b && a<b );
 console.log( a==b || a<b );
 console.log( !(a<b) ); */

// CONDITIONAL STATEMENTS 

/* let age = 20;
let hasID = true;
if (age >= 18) {
    if (hasID) {
        console.log("Entry allowed");
    }
} */

// // if - else 
//     let  a = 10;
//     let  b = 20;
//     if( a>b ){
//         console.log(` ${a} is greater than ${b}`);
//     }  else {
//          console.log( ` ${b} is greater than ${a} `);
//     }

// else-if 
    /*  let marks = 55;
    if( marks>=90 ){
        console.log("Grade A");
    } else if( marks>=70 ){
        console.log(" Grade B");
    } else {
        console.log("Grade C");
    } */

// ternary operator
 /* let age = 19;
let result = age>=18 ? "adult" : "minor" ;
console.log(result); */

//  switch staement - useful when compare one value with multiple values
 /* 
 let day = 1;
switch(day){
    case 1 :
    console.log("monday");
    break;
    case 2 :
        console.log("tues");
        break;
    default:
    console.log("invalid");
}
*/
// LOOPS 
// for( let i=1; i<=5; i++ ){
//     console.log("i = ",i);
// }

// let sum = 0 ;
// for( let i=1; i<=5; i++){
//     sum = sum + i;
// }
//console.log(sum);

 // for - of loop
//   let name = "syedzaman";
//   let size = 0;
//   for( let i of name ){
//     console.log("i = ",i);
//     size++;
//   }
//   console.log(size);
//let arr = [10,20,30,40,50];
// for( let i of arr ){
//     console.log(i);
// }
// for( let i in arr ){
//     console.log(i);
// }
//  let student = {
//     name : "zaman",
//     age : 21,
//     cgpa : 7.5,
//     isPass : true
//  };
//  for( let key in student ){
//     console.log(key,student[key]);
//  }

 // STRINGS 
//  let str = "Apnacollage";
//  console.log(str.length);
//  for(let i=0; i<str.length; i++){
//     console.log(str[i]);
//  }
//  console.log(str[0]);
// let str = " hello i am\nzaman from\tamroha";
// console.log(str);

// Template literals
// let student = {
//     name: "zaman",
//     age : 21,
//     isPass : true
// };
// let output = `the name is  ${student.name} and age is ${student.age} and he is pass ${student.isPass}` ;
// console.log(output);

// let name = "zaman";
// let age = 21;
// let course = "btech";
// console.log(`my name is ${name} and i am ${age} year old course is ${course}`);
// let message = ` hello i am 
//                 zaman software engineer
//                 at google and amazon `;
// console.log(message);

// String Manupulation

// let message = "Hello JavaScript";
// console.log("Length:", message.length);
// console.log("Uppercase:", message.toUpperCase());
// console.log("Lowercase:", message.toLowerCase());
// console.log("Includes Java:", message.includes("Java"));
// console.log("Index of Java:", message.indexOf("Java"));
// console.log("Slice:", message.slice(0, 5));
// console.log("Substring:", message.substring(0, 5));
// console.log("Replace:", message.replace("Hello", "Hi"));
// console.log("Trim:", message.trim());
// console.log("Split:", message.split(" "));

// ARRAY

//  let arr = ["zaman","syed","hasnain","abidi","mohd"];
//  let n = arr.length;
//  console.log(arr[0]);
//  console.log(typeof(arr));

//  let x =["zaman",10,20,"syed"];
//  x[0] = 100;
//  for( let i=0; i<x.length; i++){
//     console.log(x[i]);
//  }
//  for( let i of x){ // values
//     console.log(i);
//  }
//  for( let i in x){ // index
//     console.log(i);
//  }

let arr = [1,2,3,4,5];
// let brr = [6,7,8];
// let result = arr.concat(brr);
// console.log(result);
// arr.push(6);
// arr.pop();
// console.log(arr);
// arr.unshift(0);
// console.log(arr);
// arr.shift();
// console.log(arr);
// console.log(arr.slice(0,2));
// console.log(arr);
// console.log(arr.splice(2,2,101,102));
// console.log(arr);

// FUNCTION AND METHODS IN JS

//  function myFunction(){
//     console.log("I love javascript");
//     console.log("i am a software engineer");
//  }
//  function sum(a,b){
//     let s = a + b;
//     return s;
//  }
//  let result = sum(2,3);
//  console.log("sum is",result);
// //  sum("hello ","zaman");
//  myFunction();
//  myFunction();

// arrow function
// const sum = (a,b) => {
//     let s = a + b;
//     return s;
// }
// const mul = (a,b) => {
//     return a*b;
// }
// let result = sum(3,5);
// console.log(result);
// let x = mul(3,5);
// console.log(x);

// FOR EACH LOOP IN ARRAY
//  let a = [1,2,3,4,5];
//  let b = ["syed","zaman","hasnain","abidi","mohd"];
// //  a.forEach( function print(val) {
// //     console.log(val);
// //  });
// b.forEach( (val,idx,b) => {
//     console.log(val,idx,b);
// });

// function stores in variable
// function greet() {
//     console.log("Hello");
// }
// let x = greet;
// x();

// function hello(){
//     console.log("hello i am zaman, software engineer");
// }
// function work(callback){
//     callback();
// }
// work(hello);

// map - array method
// let a = [10,20,30,40,50];
// let newArry = a.map((val) =>{
//     return val*2;
// });
// console.log(a);
// console.log(newArry);

// filter 
// let a = [1,2,3,4,5,6];
// let newArry = a.filter((val) => {
//     return val % 2 === 0;
// });
// console.log(newArry);

// reduce 
let a = [1,2,13,4,5];
// let sum = a.reduce( (res,val) => {
//     return res+val;
// },0);
// console.log(sum);
let larger = a.reduce ((ans,val) => {
    return ans > val ? ans : val ;
},0);
console.log(larger);

// Number operation

// let x = 100;
// let y = 100.123;
// console.log(typeof(x));
// console.log(typeof(y));

// console.log(Number.isInteger(10));
// console.log(Number.isInteger("10"));

// console.log(Number.isNaN("123"));  // Not a Number
// console.log(Number.isNaN("hello"));

// console.log(Number.isFinite(100));
// console.log(Number.isFinite(10.5));
// console.log(Number.isFinite(Infinity));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite("100"));

// // Number variables
// let a = 10;
// let b = 20.5;

// console.log("Integer:", a);
// console.log("Decimal:", b);

// // Number methods
// console.log(Number.isInteger(a));      // true
// console.log(Number.isInteger(b));      // false

// console.log(Number.isNaN(NaN));        // true
// console.log(Number.isFinite(100));     // true
// console.log(Number.isFinite(Infinity));// false

// // String conversion
// console.log(Number("100"));            // 100
// console.log(parseInt("10.75"));        // 10
// console.log(parseFloat("10.50"));      // 10.5

// // Floating-point issue
// console.log(0.1 + 0.2);                // 0.30000000000000004
// console.log((0.1 + 0.2).toFixed(2));    // "0.30"

// Maths Object - provides function or method to perform mathematical expression

// console.log("Round:", Math.round(4.6));       // Rounds to the nearest integer: 5
// console.log("Floor:", Math.floor(4.9));       // Rounds down to 4
// console.log("Ceil:", Math.ceil(4.1));         // Rounds up to 5
// console.log("Trunc:", Math.trunc(4.9));       // Removes decimal part: 4

// console.log("Maximum:", Math.max(10, 20, 50)); // Returns the largest number: 50
// console.log("Minimum:", Math.min(10, 20, 50)); // Returns the smallest number: 10

// console.log("Power:", Math.pow(2, 3));         // Calculates 2 raised to power 3: 8
// console.log("Square root:", Math.sqrt(64));    // Returns the square root of 64: 8
// console.log("Cube root:", Math.cbrt(27));      // Returns the cube root of 27: 3

// console.log("Absolute value:", Math.abs(-15)); // Returns the non-negative value: 15
// console.log("Sign:", Math.sign(-8));           // Returns -1 for a negative number

// console.log("Random:", Math.random());         // Generates a random decimal from 0 (inclusive) to 1 (exclusive)
// console.log("PI:", Math.PI);                   // Returns the mathematical constant pi: approximately 3.14159

// let random = Math.floor(Math.random()*10) + 1;
// console.log(random);
