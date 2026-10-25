// //alert("hello Syed  Ya ali madad");
// // let name = prompt("enter ur name: ");
// // console.log("hello" + name);
 
// // let n = Number(prompt("Enter the number: "));
// // let n = prompt("enter the number: ");
// // if( n%5===0 ){
// //     console.log(n +" divisible by 5");
// // }
// // else {
// //     console.log(n + " not divisible by 5");
// // }

// // let gameNumber = 25;
// // let guessNumber = prompt("guess the number: ");
// // while(gameNumber != guessNumber){
// //    guessNumber = prompt("You enter the wrong number Guess Again: ");
// // }
// // console.log("Congrats you enter the correct");

// // 
// // avg marks
// // let marks = [85,97,44,37,76,60];
// // let sum = 0;
// // for( let val of marks){
// //     sum += val;
// // }
// // let avgMarks = sum/marks.length;
// // console.log(`the avg marks : ${avgMarks}`);

// let prices = [250,645,300,900,50];
// for( let i=0; i<prices.length; i++){
//     let offer = prices[i]/10;
//     prices[i] = prices[i] - offer;
// }
// console.log(prices);
// for(let val of prices){
//     console.log(val);
// }

// let companies = ["bloomberg","microsoft","uber","google","ibm","netflix"];
// // companies.shift();
// companies.splice(2,1,"ola");
// companies.push("amazon");
// console.log(companies);

// function print(str){
//     let count = 0;
//     for(let char of str){
//        if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u'){
//         count++;
//        }
//     }
//     return count;
// }
// console.log(print("zamanhasnain"));

// arrow function
// const print = (str) => {
//     let count = 0 ;
//     for( let char of str){
//     if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u'){
//        count++;    }
//     }
//     return count;
// }
// console.log(print("zamanhasnain"));

// let arr = [1,2,3,4,5];
// // arr.forEach(function print(val){
// //     console.log(val*val);
// // });
// arr.forEach((val) => {
//     console.log(val*val);
// });

// marks above 90
let marks = [43,89,66,91,80,97,99,98,92];
// let larger = marks.filter((val) => {
//     return val>90;
// });
let sum = marks.reduce( (s,cur) => {
    return s+cur;
},0);
// console.log(larger);
console.log(sum);


