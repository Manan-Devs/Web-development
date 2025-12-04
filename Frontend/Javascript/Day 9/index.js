// function 

// function declaration
// function greeting(params) {
//     console.log("Hello Coder Army, Strike is coming on 18th Oct.");
//     return 10;
// }

// rest operator
// function addNumber(...num) {  // input provided here is called as parameters 
//      let sum = 0;
//      for (let n of num) {
//         sum+= n;
//      }
//      console.log(sum);
// }

// function call 

// greeting();

// addNumber(3,4); -> input provided at the place of execution of function is called as arguments
                    // is called as addNumber

// console.log(greeting);  // Function definition 

// console.log(greeting()) // it gives undefined output 

// addNumber(6,7);
// addNumber(6,7,8 )
// addNumber(6,7,8,9);
// addNumber(7,8,12,12,11,12,41,12);

// const arr = [10,20,30,40,50];
// const arr2 = [30,70,90,10];

// Destructurising arrays 
// const [first,second, ...num] = arr; // Rest Operator

// console.log(first,second, num);

// const ans = [...arr,...arr2];

// console.log(ans);


// function: expression 
// Difference b/W previous and this way to create functions are : 
//   in this way we have problem that : if we call our function before it's initialization 
    //  it's not valid in this and give error Ok! 

//  Condition : It's Call is before it's initialization

// console.log(addNumber(3,4));

// const addNumber = function(num1,num2) {
//     return num1 + num2;
// }

// but in this way of creation of function we don't have this problem we have before in our function expression 

// console.log(addNumber(3,4));

// function addNumber(num1,num2) {
//     return num1 + num2;
// }

// This difference is due to one concept in Javascript called as Hoisting 


// Arrow Function 

// ()=> {
     
// }

// const addNumber = (num1,num2) => {
//     return num1+num2;
// }

// let arr = [10,11,19,7,50];

// arr.sort((a,b) => b-a); 

// console.log(arr);
// const addNumber = (num1,num2) => num1+num2; // Use this syntax for arrow function when you just only return one values from your function.


// const squareNumber = num => (num*num);  // if you only have one parameters in your function you don't need of this ()  

// console.log(addNumber(3,4));

// console.log(squareNumber(6));


// const greeting = () => {
//      return user = {
//         name: "Rohit",
//         age:20,
//      }
// }


// const greeting = () => ({name: "Rohit", age:20})  it gives error because: in
                                                // arrow function when it sees curly braces it understands it as normal function and 
                                                // also expect it to return statement something from that 
                                                // but how can it identifies that it's object 

                                                // See : For to Handle this Case of above we use: () 

// console.log(greeting());

// IIFE  -> Immediately invoked after Function Execution 

// (function greeting() {
//     console.log("Hello,Ji");
// }) ();

// () -> function define and () -> function call 

//  (()=> {
//      console.log("Hi");
// }) ();


// 

// function greet() {
//      console.log("Hello,Ji kaise Ho!");
// }

// function dance () {
//      console.log("I am Dancing");  
// }

// function meet(callback) {
//      console.log("I'm going to meet someone");
//      dance(); //hardcode nahi (Reusable banao);
//      // code hota jisko marta 
//     callback();
//     console.log("I have finished meeting");
// }

// meet(greet);
// meet(dance);



// Real world Usecase of Callback function 

// blinkit 

function blinkitOrderPlaced() {
     console.log("We have started packing your food");
}

function zomatoOrderPlaced() {
     console.log("We have started preparing your food");
}

function payment (amount,callback) {
     console.log(`${amount} payment has started intialized`)
     console.log(`Payment is recevied`);
     zomatoOrderPlaced();
    //  GST:  Government
    // Rider ko kitna payment dena
    // company ko kitna 
}

payment(500,zomatoOrderPlaced);
// payment(300,blinkitOrderPlaced);

// So, real world useCase of callback function is that we're able to use same function at multiple places in flexbile way  