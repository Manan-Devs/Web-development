// Shopping List Total 

let prices = [50, 30, 20, 100]; // Prices of items
// Your task: calculate total cost


// using forEach loop 

let total = 0;

prices.forEach((price) => {
     total+= price;
});

console.log(`Your Shopping List Total is : ${total}` );


// Find the Highest Score 

let scores = [45, 78, 89, 62, 91];
// Your task: find the maximum score

let max = 0;

for(let i = 0; i < scores.length; i++){
     for(let j = i; j < scores.length; j++) {
         if (scores[i] < scores[j]) {
             max = scores[j];
         }
         else {
            max = scores[i];
         }
     }
}

console.log(`Highest Score is ${max}`);
   

// Daily Temperatures 

let temperatures = [30, 32, 28, 35, 31, 29, 33];
// Your task: find average temperature


let tempSum = 0;

let avgTemp;

temperatures.forEach((temp)=> {
     tempSum+= temp;
     avgTemp = Math.floor(tempSum / temperatures.length);
});

console.log(`The average temperature is ${avgTemp}`);



// Optimize Code for Problems : 

// Problem 1: 

// Ensure all elements are numbers before summing (to avoid NaN errors in real-world apps)
  
//   .filter(p => typeof p === "number")
//   .reduce((sum, price) => sum + price, 0);
