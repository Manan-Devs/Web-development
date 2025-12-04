const newElement = document.createElement("h2");

newElement.textContent = "Strike is coming";

newElement.id = "second";
 
console.log(newElement);

// select element 
 
const element = document.getElementById("first");

element.after(newElement);

// element.before(newElement);


const newElement2 = document.createElement("h3");

newElement2.textContent = "Diwali aa rahi hai";

newElement2.id = "third";

// newElement2.className = "diwali";

// newElement2.className += "Holi";

newElement2.classList.add("diwali");
newElement2.classList.add("Holi");
// newElement2.classList.remove("diwali");

newElement2.style.backgroundColor = "brown";
newElement2.style.fontSize = "40px";
newElement2.setAttribute("hello", "Ji");

 
element.before(newElement2);

console.log(newElement2.getAttribute("hello"));

// before after 

// const list = document.createElement("li");

// list.textContent = "Milk";
  
// const list2 = document.createElement("li");

// list2.textContent = "Cake";

// const list3 = document.createElement("li");

// list3.textContent = "Halwa";

// const list4 = document.createElement("li");

// list4.textContent = "Paneer";

// const undorderedElement = document.getElementById("listing");

// undorderedElement.append(list,list2);

// // undorderedElement.append(list2);

// undorderedElement.prepend(list3);

// undorderedElement.after(list4);

// // list.after(list4);

// undorderedElement.children[1].after(list);

// Real-World UseCase 

// Not Optimized Method for Showing array of elements on UI using this way

// it creates load on our UI 


//  Optimized method is to add all list elements to it when all had creates at one time 


const arr = ["Milk" , "Halwa" , "Paneer" , "tofu" , "Tea"];


const undorderElement = document.getElementById("listing");

// const fragment =  document.createDocumentFragment();


// for (let food of arr) {
//      const list = document.createElement("li");
//      list.textContent = food;
//      fragment.append(list);
// }

// undorderElement.append(fragment);


// const document = {
//       createFragment:function() {
//          let foodArr = [];
//       }
// }

// const fragment = document.createFragment();

// for (let food of arr) {
//      const list = document.createElement("li");
//      list.textContent = food;
//      fragment.append(list);
// }

// undorderElement.append(fragment);


const s1 = document.getElementById("first");

s1.remove();

// older methods 

// const month = document.getElementById("ten");


// console.log(month.childNodes);

// // console.log(month.children);

// const lister = document.createElement("li");

// lister.textContent = "Help";

// month.insertAdjacentElement("afterbegin", lister);


const month = document.getElementById("ten");

// console.log(month.children);
const lister = document.createElement("li");
lister.textContent = "<img src='https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000'>";

// lister.innerHTML = "<img src='https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000'>"

month.prepend(lister);
// month.insertAdjacentElement("afterend",lister)

