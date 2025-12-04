// this call apply bind 
// this: class object method 
// strict mode vs non strict mode 

// global Object : in Browser: Window and in Node.js : Global 

// globalThis : points to global object of the environment . it's the universal global object working in all environments
// 'use strict';

// normal function: without strict mode, this will point to global object
// in strict mode it will point to undefined 

// var a = 10;
// var b = 20; Source of Bug 

// console.log(a,b);

// function greet(name1,name2) {   
//     console.log(name1,name2); // Source of Bug 
// }

// greet("Rohit","Mohit");

// document.getElementById("first")

// console.log(globalThis);


// Learn about This Keyword

// this keyword in global scope : NodeJS(empty Object) , in browser it will point to global object
// 'use strict'
// console.log(this);


// Function 
// 100 user: greet function : 100*memory , code 

function greet() {
      console.log(`hi ${this.name}`);
}

function incrementAge(value,name,) {
      this.age+=value;
      this.name = name;
      console.log(this.age);
      console.log(this.name);
      
}

const user = {
     name:"Rohit",
     age:30
}

const user2 = {
     name:"Mohit",
     age:10
}

// greet.call(user);
// greet.call(user2);

// incrementAge.call(user2,10,"Mohan");

// apply
incrementAge.apply(user2,[10,"Mohan"]);


// bind 
const incr = incrementAge.bind(user2,10,"Mohan");

incr();

// this === user

// user2.greet;  // When we call our method in our object to , it checks who invokes this method and so that object is referred by this Keyword

"use strict" 

// function greet() {
//      console.log(this);
// }

// greet()
 


// const stopWatch  = {
//        second:0,
//        start:function() {
//             setInterval(() => {
//               this.second++;
//               console.log(this.second);
//             },1000)
// }
// };

// stopWatch.start();



// const button = document.getElementById("first");

// button.addEventListener('click', function() {
//        console.log(this);
// });



// this keyword: Global Scope in Node.js: {} 
// Windows: window Object

// function: this keyword, if someone invoke the method or function: will point to that 
// Normal function: When no one is invoking it, 

// Non Strict : Global Object for node and browser
// strict mode: Undefined


// arrow function: It takes this from Lexical environment scope 

function greet() {
      console.log(this);
}

greet();

console.log(this);

