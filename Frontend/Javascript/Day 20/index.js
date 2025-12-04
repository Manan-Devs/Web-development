
// async await 
// async function always return a promise 

// async function greet() {
//     return "Rohit";

//     // return new Promise((resolve,reject) => {
//     //      reject("Rohit");
//     // })
// }

// const response = greet();

// // console.log(response);

// response.then((data)=> console.log(data))
// .catch((error) => {
//     console.log("Error:", error);
// });


// This way of fetching data by Calling from API is so complex

// fetch("https://api.github.com/users")
// .then((response) => response.json())
// .then((data) => console.log(data));

// await freeze our task or our code 
// const response = await fetch("https://api.github.com/users");
// const data = await response.json();
// console.log(data);

async function github() {

      try {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      // console.log(data);

      if (!response.ok) {
             throw new Error("Data is not present");
      }

      const parent = document.getElementById('first');

      for (const user of data) {
         const element  = document.createElement('div');
          element.classList.add("user");

        const image = document.createElement('img');
        image.src = user.avatar_url;      

        const userName = document.createElement('h2');
        userName.textContent = user.login;

        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.textContent = "Visit Profile";

        element.append(image,userName,anchor);
        parent.append(element);

      }
}
  catch(error){
       console.log("error");
  }

}

github();

console.log("Hello, Ji Kaise ho");

//  QUICK RULE:
// Top-level await = Nobody does ANYTHING until this finishes
// Async function = I'll handle this in the background, keep working




// console.log("Hello, Ji kaise ho ");


const orderDetail = {
     orderId:  123134,
     food: ["Pizza" , "Burger", "Pasta" , "Coke"],
     cost: 620,
     customer_name: "John Doe",
     customer_Location:"Dwarka",
     restaurant_Location:"Delhi"
}

function placedOrder(orderDetail) {
     console.log(`${orderDetail.cost} Payment is in progress`);

   return new Promise((resolve,reject)=>{

      setTimeout(() => {
        if(Math.random()>0.9) {
         console.log("Your Payment is received and order get placed");
         orderDetail.status = true;
         resolve(orderDetail);
        }
        else {
           reject("Payment is failed");
        }
         
     },3000) 
     });
}

// const Callback = (orderDetail) => {
//      preparingOrder(orderDetail);
// }


function preparingOrder(orderDetail) {
     console.log(`Your Food preparation started of ${orderDetail.food}`);
    return new Promise((resolve,reject)=> {
      setTimeout(() => { 
        if(Math.random()>0.05){
          console.log("Your order is now prepared");
         orderDetail.token = 123;
        resolve(orderDetail);
        }
        else {
          reject("Food item is not present at restuarant");
        }
         
     },3000);

    })
     
}


function pickUpOrder(orderDetail) {
     console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_Location}`);
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        if(Math.random()>0.05) {
        console.log("I have picked up the order"); 
        orderDetail.received  = true;
        }
        else {
          reject("Delivery boy Unable to reach restuarant");
        }
       
     },3000);
      resolve(orderDetail);
    });
     
}



// placeOrder(preparingOrder(pickUpOrder)); it's the problem which not works properly 


 function deliverOrder() {
      console.log(`I am on my way to deliver order ${orderDetail.customer_Location}`);
     return new Promise((resolve,reject) =>{ 
       setTimeout(()=> {
        if (Math.random()>0.05) {
          console.log("Order delivered successfully");
          orderDetail.delivery = true; 
        }
        else {
          reject("Order Unsuccessful");
        }
          
          resolve(orderDetail);
       },3000);  
     });
       
 }

//  Callback Hell 

// placeOrder(orderDetail , (orderDetail) => {
//      preparingOrder( orderDetail,(orderDetail) => {
//          pickUpOrder(orderDetail,() => {
//                 deliverOrder(orderDetail);    
//          });
//      });
// });


// const Callback = () => {
//      pickUpOrder();
// }


// Resolve in this way to our Callback hell problem using promises 

placedOrder(orderDetail)
.then((orderDetail) => preparingOrder(orderDetail))
.then((orderDetail)=> pickUpOrder(orderDetail))
.then((orderDetail)=> deliverOrder(orderDetail))
.then((orderDetail) => {
      console.log(orderDetail);
})
.catch((error) => {
    console.log("Error", error);
});





// async function ordering() {
//     try {
//       const response1 = await placedOrder(orderDetail);
//       const response2 = await preparingOrder(response1);
//       const response3 = await pickUpOrder(response2);
//       const response4 = await deliverOrder(response3);

//       console.log(response4);
//     }
//   catch(error) {
//      console.log("Error:",error);
     
// }
// }







// 
async function userDetail() {
    //  const comment = await fetch("userComment");
    //  const photos = await fetch("userPhoto");
    //  const chat = await  fetch("chat");
     

  const [comment,photos,chat] =  await Promise.all([fetch("userComment"), fetch("photo"), fetch("chat")]);
     
  
}