// attributes = {
//      className:"element",
//      id:"first",
        // style: {
        //     fontSize:"30px",
        //     backgroundColor:"orange",color:"white"
        // }

// }

// element = {
//      tag:"h1",
//      textContent:"Hello,Coder Army",
//      className:"element",
//      id:"first",
        // style: {
        //     fontSize:"30px",
        //     backgroundColor:"orange",color:"white"
        // } 
// }

//  custom react
//  const React = {
//     createElement: function(tag,attributes,children) { 
      
//     const element =  document.createElement(tag);
//     element.textContent = children;

//     for (const key in attributes) {
//          if (key === "style") {
//              Object.assign(element.style, attributes.style)
//          }
//          else { 
//              element[key] = attributes[key];   
//          }
          
//     }

//     return element;
// }
//  }

//  It performs all the operation of DOM 
// Custom React
//  const ReactDom = {
//         render:function(child,parent) {
//              parent.append(child);
//         }
    
//  }


//   Original  React 

  const React =  {
    
    
  createElement(type,props,children) {
       

     return {
          type:type,
          props: {
             ...props,
             children:children
          }
     }
  }

}

const ReactDOM = {
       render:  function(reactElement,root) {
            const element = document.createElement(reactElement.type);

            const {props} = reactElement;

            for (const key in props) {
                   if(key === "style") {
                        Object.assign(element.style,props.style);
                   }
                   else if (key === "children") {
                       element.textContent = props.children;
                   }

                  else {
                       element[key] = props[key];
                  }
                
         }

          root.append(element);
             
       }
}

console.log(React);




// reactElement : {
//      type:h1,
//      props: {
         
//      }
// }


// create a h1 element using Js 

// const element1 = document.createElement('h1');
// element1.textContent = "Hello, Coder Army";
// element1.className = 'element';
// element1.id = 'first';
// element1.fontSize = "30px";
// element1.style.backgroundColor = "orange";
// element1.style.color = "white";

// const element2 = document.createElement('h2');
// element1.textContent = "Strike is Launched";
// element1.className = 'element';
// element1.id = 'second';
// element1.fontSize = "20px";
// element1.style.backgroundColor = "pink";
// element1.style.color = "green";

const element1 = React.createElement("h1",{className:"element",id:"first",style:{fontSize:"30px",backgroundColor:"orange",color:"white"}},"Hello,Coder Army");
const element2 = React.createElement("h2", {className:"element",id:"second",style:{fontSize:"30px",backgroundColor:"pink",color:"green"}},"Strike is launched");

console.log(element1);

ReactDOM.render(element1,document.getElementById(element1));
const root = document.getElementById('root');
// React.render(element1,root);

