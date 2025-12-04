//  Scope & Closures , HDF
// Global Scope -> Accessible anywhere inside your code file -> var let const
// functional Scope -> Accessible inside any function only -> var let const 
// Block Scope ->Accessible  inside any code block only let const

// let a  = 10;
// const b = 20;
// var e = 990;

// if (true) {
//     let d = 30;
//     var e = 990;
//     console.log(d);
// }
// console.log(e); 

// console.log(d);

 
var a = "Manan";
function greet() {
    let a = "Rohit";
    let c = 30;
    var e = 90;
    console.log(c);
}

console.log(a);

// console.log(e);

// console.log(c);

// greet()

// let global = 30;

// function greet() {
//     let global = 40;
//     function meet () {
//        let global = 10;
//        console.log(global); 
//     } 
    
//     meet();

// }

// greet();


// function createCounter() {
//      let count = 0;
//     function increment() {
//        count++;
//        return count;
//     }

//    return increment;   
// }

// console.log(count); 

// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());


// let balance = 500;

// // balance+= "Manan";
// balance-= 500;
// console.log(balance);


// UseCase of Closures understands it by 
// example of banking Application Creation 

// let balance = 500;
// // private 
// let user = {
//     deposit:function(amount) {
//         if(typeof amount === "number" && amount > 0 )
//         balance+=amount;
//         return balance;   
//     },
//     withdraw:function(amount) {
//         if(typeof amount === "number" && amount > 0 && balance >= amount )
//         balance-=amount;
//         return balance;
//     },
//      getBalance:function(amount) {
//         return balance;
//     },


// }

// balance+="Manan"


// user.balance = "Manan";
// console.log(user.getBalance());
// console.log(user.deposit("2sa00"));
// console.log(user.deposit(500));


// method ko access (function) 
// balance: usko directly access na  


// function createBankAccount() {
//   let balance = 500;
//      // private 
//        return {
//      deposit:function(amount) {
//         if(typeof amount === "number" && amount > 0 )
//         balance+=amount;
//         return balance;   
//     },
//     withdraw:function(amount) {
//         if(typeof amount === "number" && amount > 0 && balance >= amount )
//         balance-=amount;
//         return balance;
//     },
//      getBalance:function(amount) {
//         return balance;
//     },


// }
// }

// const customer = createBankAccount()

// console.log(customer.withdraw(200));


// balance+= "Manan";


// Higher order function 

function double(value) {
    return function execute(num) {
        return (num*value);
     }
    // return execute;
}


const n = double(20)(5);  // x(5); -> where x is the function reference of double(5) = 100;
console.log(n);