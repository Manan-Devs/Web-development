// object 
// key value 

// create
// const user = {
//      name:"Monu",
//      "age": 30,
//      emailId: "someone@example.com",
//      amount:3400,
//      "home address": "banswara"
// }


// console.log(user["name"]);
// console.log(user.age);
// console.log(user["age"]);
// console.log(user["home address"]);

// console.log(typeof user);

// CRUD operation : create read upadate delete 

// read 

// console.log(user.age);

// upadate 
// user.aadhar = 1234;

// console.log(user);

// user.amount = 5000;

// console.log(user);

// delete 

// delete user.emailId;
// console.log(user);

// const user = {
//      name:"Monu",
//      "age": 30,
//      emailId: "someone@example.com",
//      amount:3400,
//      greeting:function() {
//         console.log("Strike is coming on 18 Oct");
//      }
// }


// for of loop array ke 
// const tempArr = Object.keys(user);
// console.log(tempArr);
// for (let keys of tempArr) {
//     console.log(keys);
// }

// for (let values of Object.values(user)) {
//     console.log(values);
// }

// console.log(Object.entries(user));
// [
//   [ 'name', 'Monu' ],
//   [ 'age', 30 ],
//   [ 'emailId', 'someone@example.com' ],
//   [ 'amount', 3400 ],
//   [ 'home address', 'banswara' ]
// ]

// for (let [keys,values] of Object.entries(user)) {
//     console.log(keys,values);
// }

// [ 'name', 'Monu' ]
// [ 'age', 30 ]
// [ 'emailId', 'someone@example.com' ]
// [ 'amount', 3400 ]
// [ 'home address', 'banswara' ]

// const user2 = user;
// user2.age = 90;

// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

     
// for (let keys in user) {
//    console.log(keys,user[keys]);
// } 

// user.keys user["name"] user["age"];


// const name = user.name;
// const age = user.age;

// object ko destructure karna
// const {name:userName,age:userAge,amount:userAmount} = user;

// console.log(userName,userAge,userAmount);

// arrays ko destructure karna 
// const arr = [10,20,30,40,50];

// const [first,second] = arr;

// console.log(first,second);



// const user = {
//      name:"Monu",
//      "age": 30,
//      emailId: "someone@example.com",
//      amount:3400,
//      greeting:function() {
//        console.log(`Strike is coming on 18 Oct ${this.name}`);
//        return 20;
//      }
// }

//  const user2 = {
//      name: "Mohan",
//      account: 201,
//  }

//  user2.greeting = user.greeting;

//  user2.greeting();

// const va = user.greeting();
// console.log(va);

// shallow copy  
const user = {
     name:"Monu",
     "age": 30,
     emailId: "someone@example.com",
     amount:3400,
     address:{
       city:"banswara",
       state:"rajasthan"
     }
}

//  const user2 = {...user};  // shallow copy using spread operator

// //  user2.name = "Mohan"
// user2.address.city = "Dwarka"

// console.log(user2);

// console.log(user.address.city);

// deep copy

// const user2 = structuredClone(user); //deep copy using structuredClone method
// user2.address.city = "Dwarka";
// console.log(user2);
// Key: String || Symbol

const sym = Symbol("id");

// const user = {
//     name:"Manan",
//     age:20,
//     0:100,
//     2:"Mohan",
//     [sym]:"Hello,Ji" 
// }

const arr = [10,20,30,40];

//  arrays stored like this 
//  {
//      0:10,
//      1:20,
//      2:30,
//      3:40
//  }

// console.log(user[sym]);
