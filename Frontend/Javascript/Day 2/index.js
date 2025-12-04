// variable ko kaise banate hai


// let name = "Manan";
// let age = 20;

// age = 30;
// console.log(name , age); 

// const account = 1234;

// account = 23;

// console.log(account);


// var a = 10; 
// a = 20;
// console.log(a); 

// primitive data types 

// number , string , boolean , undefined , null , bigInt ,symbol 

// non-primitive data types 

// array , object , function 


// number 

// let a = 10;
let b = 2.36;
// console.log(a , b);

console.log(typeof b); // this is typeof Operator which helps to find type of any dataType in JS 

// string 

let c = "Strike is coming";
let d = "Anjali";


console.log(c , d); 

// let login = true;

// console.log(login);

// undefined 

// let user;

// console.log(user);

// console.log(login,f);



//bigint 

let num = 234561892929299220020n;
console.log(num);


//null 
let weather = null;

console.log(weather);


// let weather = current_weather("Dwarka");

//25
//null 
// undefined


//symbol

const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id2==id1);


// Non-primitive 

// let arr = [10,20,11, "Rohit" , true];

// console.log(arr);


// let obj = {
//      name:"Manan",
//      account:124134,
//      age:25,
//      category:'gen'
// }

let s = function add() {
    console.log("Hello");
}


s();


// Primitive data type is immutable 



let a = 10;

a = 20;
console.log(a); 

// let str = "Rohit";

// str = "Mohan";

// console.log(str);


// Non-primitve data type  mutable 

let arr = [10,20,30,40];

arr.push(90);
arr[0] = 70;
console.log(arr);


let obj ={
    name:"Mohan",
    age:20
}

obj.name = "Rohan";

console.log(obj.age);


let obj_1 = {
     name:"Manan",
     age:17
}

let obj_2 = obj_1;

obj_2.name = "Manan";

console.log(obj_1);



