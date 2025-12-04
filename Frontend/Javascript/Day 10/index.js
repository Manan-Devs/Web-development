
// Execution Context: 
// Memory Allocation 
// Execution Phase

// a = undefined
// b = undefined
// addNumber = fnCode
// sumResult1 = undefined
// sumResult2 = undefined


// // console.log(a);
// var a = 10;
// var b = 20; 

// // var sumResult1 = addNumber(a,b);
// // console.log(sumResult1);

// // console.log(a);

// function addNumber(num1,num2) {
//      var sum = num1+num2;
//      return sum;
// }


// var sumResult2 = addNumber(4,5);
// // console.log(sumResult1,sumResult2);


// let const 

// let const me jab kuch primitve value chala jaye tab ye accessible ho sakenge otherwise nahi 

// Memory allocation : 

// a = <uninitialize>(Temporal dead zone) -> which means it allocates memory of let but until it's initialized no one can access it 
// b = <uninitialized>(Temporal dead zone)
// addNumber = <uninitialized>(Temporal dead zone) due to const keyword it becomes varible so therefore fnCode is not allocates here in memory 
// result = <uninitialized>(Temporal dead zone)
 
// Execution phase :
// a = 10;
// b = 20;
// addNumber = fnCode
// result = 30



// console.log(a);  It Gives you error in the case of let and const : ReferenceError 

let a = 10;
const b = 20;
console.log(a);

const addNumber = function(num1,num2){ 
    const sum =  num1 + num2;
    return sum;
}

const result = addNumber(a,b);
console.log(result); // console.log() is the not the part of core javascript 


