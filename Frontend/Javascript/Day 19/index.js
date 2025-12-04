// console.log("Hello, World");


// // code 

// const p1 = fetch("https://api.github.com/users");



// // fulfilled , reject 

// const p2 = p1.then((response) => {
//     // console.log(response.json());
//      return response.json();
// });


// p2.then((data) => {
//     console.log(data);
      
// });


// const p1 = new Promise((resolve,reject) => {
//        resolve({
//         name:"Manan",
//         age:17
//       });
// })     
// // console.log(p1);
// p1.then((response) => {
//      console.log(response);
// }) .catch((error) => {
//      console.log(error);
// });


fetch("https://api.github.com/users")
.then((response) => {
     if(!response.ok){
         throw new Error("Data is not present in Server");
         
     }
      return response.json();
})
.then((data)=> {
    // console.log(data); 
   const parent = document.getElementById("first");
   for(let i = 0; i < data.length; i++){
   const image  =  document.createElement('img');
   image.src = data[i].avatar_url;
   image.style.height = "200px";
   image.style.height = "200px";
   parent.append(image);
}
})
.catch((error) => {
      const parent = document.getElementById("first");
      parent.textContent = error.message;
})






// // console.log("Hello,World End");


// const j1 = {
//      name:"Rohit",
//      age:30,
//      address:"dwarka",
//      c:undefined
// }


// // convert object to JSON 

// // const jsonFormat = JSON.stringify(j1);
 


// // console.log(jsonFormat);


// // JSON is just a string like this : 

// const jsonFormat = `{
//     "name":"Rohit",
//     "age": "30",
//     "address":"dwarka"
// }`;


// // convert into javascript object

// const JsObject = JSON.parse(jsonFormat);

// console.log(JsObject);




// How can we resolve our problem of Callback Hell using Promise 

//  zomato application 


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















