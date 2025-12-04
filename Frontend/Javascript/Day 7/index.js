// Array;
// let marks1 = 100;
// let marks2 = 50;
// let marks3 = 70;
// let marks4 = 80;

// let marks = [100,50,70,80,90];

// console.log(marks);
// console.log(marks.length);

// let arr = [100,30,"Manan", true];

// console.log(arr[2]);

// console.log(typeof arr);

// arr[1] = 90;
// console.log(arr);

//  push : Insert element at end 

// arr.push(90);
// arr.push("strike");
// console.log(arr); 
//  pop operation : Delete element from end 

// arr.pop();
// console.log(arr); 


//  Starting add kar sakte hu, delete the element at first place 

// arr.unshift(10);
// arr.unshift(50);
// console.log(arr);

//  Starting se delete kar sakta hu 

// arr.shift();
// console.log(arr);




// let arr = [10,30,50,90,11]; 

// for(let i = 0; i < 5; i++){
//      console.log(arr[i]);
// }

// for (let num of arr) {
//     console.log(num);
// }

// let arr = [10,20,30,40,50];
// let arr2 = arr;

// arr2.push(30);

// console.log(arr);

// const arr = [10,30,50,90,10];

// arr = [80,90,11]; 

// console.log(arr);

// Object(non-primitve) : Copy by reference hote hai 
// primitve: copy By Value

// const arr = [10,20,30,40,50];
// arr[2] = 30;

// Slice original array me changes nahi karta hai
// const arr = [10,20,30,40 ,50,60];

// const arr2 =  (arr.slice(2,5));

// console.log(arr);  

// Splice original array me changes karta hai 

// console.log(arr.splice(1,3));

// const arr3= arr.splice(1,3, "Rohit" , 19);

// console.log(arr);


// const arr = [10,20,40,50,60];

const arr2 = ["Rohit",11,true];

const arr4 = [90,4,true,false];

// How can i merge both arrays:

// arr.push(arr2);
// const arr3 = arr.concat(arr2,arr4);
// console.log(arr3);


// spread operator 

// const arr3 = [...arr ,...arr2 , ...arr4];
// console.log(arr3);

// const names = ["alice", "Rohit" , "Bob" , "Mohit" , "Charlie"];

//  console.log(names.toString());

//  console.log(names.join("_"));

// console.log(names.indexOf("Bobs"));

// console.log(names.lastIndexOf("Bob"));

// console.log(names.includes("Bobs"));


// // Sorting 

// console.log(names);

// names.reverse();

// names.sort();
// console.log(names);

// const a = [101,90,30,92];

// const arr = [10,"Rohit" , "Mohan" ,true];

// arr.sort();
// console.log(arr);

// const a = [10,40,31,75,5,11];

// a.sort((a,b)=> b-a);
// ascending order

// arr.sort((a,b)=> b-a);

// it works like : 
// 10,40
// a = 40;
// b = 31;

// 40,10
// b = 10;
// a = 40;


// -ve : pehle a aayega fr b aayega 
// +ve : b pehle aayega fr a aayega 

// console.log(a);


// const arr = [10,20,30,[40,90,11,[50,60,70]],80];

//  to flat and simplify the form of array
//  you should also define up to which level you can flat out this array 
// const a = arr.flat(Infinity);
    
// console.log(a);



const a = [10,309,"Rohit" ,9.3,true];

a.name = "Mohan";
console.log(a);





