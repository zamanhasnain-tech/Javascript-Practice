//alert("hello syed ya ali madad");
// console.log(window);
// window.console.log("hello");

// console.dir(window);
// console.dir(window.document);

// console.dir(document);

// console.dir(document.body); //object
// console.log(document.body); //html version

// console.log(document.body.childNodes[1]);

// document.body.childNodes[1].innerText = "zaman syed ";
// document.body.firstElementChild.innerText = "hello";

//DOM

// let hello = document.getElementById("hello");
// console.dir(hello);
// console.log(hello);

// let hello2 = document.getElementsByClassName("para");
// console.dir(hello2);
// console.log(hello2);

// let hello3 = document.getElementsByTagName("button");
// console.dir(hello3);

// let print = document.getElementsByClassName("class-1");
// console.dir(print);//Object ki properties aur structure inspect karne ke liye use hota
// console.log(print);

// let heading = document.querySelector("h1");
// console.log(heading);
// console.dir(heading);
 
// let firstElement = document.querySelector("p"); // first child
// console.dir(firstElement);
// let allElement = document.querySelectorAll("p");
// console.dir(allElement);

// let cls = document.querySelector(".btn-1");
// console.dir(cls);
// let i = document.querySelector("#btn-2");
// console.dir(i);

// let div = document.querySelector("div");
// console.dir(div);

let h1 = document.querySelector("h1");
console.dir(h1);
console.dir(h1.innerText);
h1.innerText = h1.innerText + " from apna collage";

let divs = document.querySelectorAll(".box");
// console.dir(divs);
// console.log(divs);
// console.log(divs[0]);
// console.log(divs[1]);
// console.log(divs[2]);
let idx = 1;
for( div of divs ){
    // console.log(div.innerText);
    div.innerText = `New unique value ${idx}`;
    idx++;
}

// divs[0].innerText = "i love u";
// divs[1].innerText = "hello zaman";
// divs[2].innerText = "hello hy";