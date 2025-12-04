//  zomato application 


const orderDetail = {
     orderId:  123134,
     food: ["Pizza" , "Burger", "Pasta" , "Coke"],
     cost: 620,
     customer_name: "John Doe",
     customer_Location:"Dwarka",
     restaurant_Location:"Delhi"
}

function placeOrder(orderDetail ,Callback) {
     console.log(`${orderDetail.cost} Payment is in progress`);
       setTimeout(() => {
         console.log("Your Payment is received and order get placed");
         orderDetail.status = true;
         Callback(orderDetail);
     },3000);
}

const Callback = (orderDetail) => {
     preparingOrder(orderDetail);
}


function preparingOrder(orderDetail,Callback) {
     console.log(`Your Food preparation started of ${orderDetail.food}`);

     setTimeout(() => {
         console.log("Your order is now prepared");
         orderDetail.token = 123;
         Callback(orderDetail);
     },3000);
}


function pickUpOrder(orderDetail,Callback) {
     console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_Location}`);

     setTimeout(() => {
        console.log("I have picked up the order"); 
        orderDetail.received  = true;  
        Callback(orderDetail)
     },3000);
}



// placeOrder(preparingOrder(pickUpOrder)); it's the problem which not works properly 


 function deliverOrder() {
      console.log(`I am on my way to deliver order ${orderDetail.customer_Location}`);

       setTimeout(()=> {
          console.log("Order delivered successfully");
          orderDetail.delivery = true;
       },3000);
 }

//  Callback Hell 

placeOrder(orderDetail , (orderDetail) => {
     preparingOrder( orderDetail,(orderDetail) => {
         pickUpOrder(orderDetail,() => {
                deliverOrder(orderDetail);    
         });
     });
});


// const Callback = () => {
//      pickUpOrder();
// }
