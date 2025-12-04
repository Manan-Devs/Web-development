// // Prototypes and classes 

// const obj = {
//       name:"Rohit",
//       age:38,
//       greet:function() {
//          console.log("Hello,ji");
//       }
// };

// // console.log(obj.greet());

// // obj.greet();

// // console.log(obj.hasOwnProperty("names"));

// const arr = [10,20,30];

// arr.length;

// const obj2 = {
//      account: 30
// }

// obj2.__proto__ = obj;

// console.log(obj2.name);



// const obj1 = {
//      name:"Rohit",
//      age:30,
//      greet:function() {
//         console.log(`Hello , ${this.name}`);       
//      }
// }


// const obj22 = {
//      name:"Rohit",
//      age:30,
//      greet:function() {
//         console.log(`Hello , ${this.name}`);       
//      }
// }

// const obj3 = {
//      name:"Mohan",
//      age:10,
//      greet:function() {
//         console.log(`Hello , ${this.name}`);       
//      }
// }



 class Person {
      constructor(name,age) {
         this.name = name;
         this.age = age;
      }

      sayHi() {
         console.log(`Hi, ${this.name}`);
         
      }

}


// const person1 = new Person("Rohit",20);
// const person2 = new Person("Mohit",10);

// console.log(person2.name);


// Classes are the modern way to use protoTypes , inheritance 

class Customer extends Person {
      constructor(name,age,account,balance) {
          super(name,age);
          this.account = account;
          this.balance = balance;
      }
}


const obj = {
     name:"Rohit",
     age:20
}

const obj2 = Object.create(obj); 

obj2.account = 10;

console.log(obj2.account);








