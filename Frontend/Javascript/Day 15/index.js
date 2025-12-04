// function handleClick() {
//    const element =  document.getElementById("first");
//    element.textContent = "Strike is Coming "
// }



const element = document.getElementById("first");

// element.onclick = function handleClick() {
// // element.textContent = "Strike is Coming";
//     element.style.backgroundColor ="pink"; 
// };

// element.onclick = function handleClick() {
//     element.textContent = "I am the best"; 
// };


element.addEventListener('click',()=> {
       element.textContent = "Strike is Coming";
});

// element.addEventListener("click", () =>{
//       element.style.backgroundColor = "pink";
// });

// element.addEventListener("mouseenter", ()=> {
//      element.textContent = "Strike is Coming";
// });

element.addEventListener('mouseleave',()=> {
     element.textContent = "Strike is Coming";
});


// const child1 = document.getElementById("child1"); 

// child1.addEventListener("click",() => {
//       child1.textContent = "I am Clicked"
// });

// without adding event listeners on each element , we add event of parent element 

// so , it saves our time and complexity of Code by select all children elements of parent by using .children property 
const parent = document.getElementById("parent");
// console.log(parent.children);

 function handleClick(e) {
     e.target.textContent = "I am Clicked";
     parent.removeEventListener("click", handleClick())
 }

// parent.addEventListener("click",(e) =>{
//       console.log(e.target);
//       e.target.textContent = "I am Clicked";
// });

parent.addEventListener("click", handleClick());



// it stops listening you event but not remove your addEventListener
parent.addEventListener("click",(e) =>{
      console.log(e.target);
      e.target.textContent = "I am Clicked";
});

// for (let child of parent.children) {
//      console.log(child);
//      child.addEventListener('click', ()=> {
//         child.textContent = "I am Clicked";
//      }); 
// }


const grandparent = document.getElementById("grandparent");

grandparent.addEventListener("click", (e)=> {
    // console.log("Grandparent is clicked");
    console.log(e);
});
 
parent.addEventListener("click" ,(e) =>  {
    // console.log("parent is clicked");
    console.log(e.target);
    e.stopPropagation();
});

child.addEventListener("click" ,(e) => {
    // console.log("Child is clicked");
    console.log(e); 
});

// capture phase by default false 

// captue phase on hai: Top phase se down aaoge: Us time pe event ko trigger kar diya jaayega;

// capture phase off hai : Event hai usko up(Bubbling phase bolte hai , tab trigger kiya jayega); 






// addEventListener is a kind of Object like this: 
let a = {
     greet: function(value) {
        console.log("Hello" , value);
     }
}

a.greet(10);
a.greet(20);
