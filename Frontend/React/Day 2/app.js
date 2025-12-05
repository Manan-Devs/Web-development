

// const element = React.createElement('h1',{id:'title'},"Hello Coder Army");

// It's not Best way to create element in React

// JSX: looks like Html but it's not Html
// JSX --> React.createElement() --> React Element(JS Object) --> Real DOM(HTML Element Content)

//  const element = <h1 id="title">Hello Coder Army</h1>;
//  console.log(element);
 
//  const element2 = (<div>
//  <h1>Hello</h1>
//  <h2>hi</h2>
//  </div>);

// React Element

// const element3 = (<div>
//      <h1>Hello,Coder  Army</h1>
//      <h2>Hello,Code r</h2>
//     </div>
// );

// React.createElement("ul", null, [React.createElement("ul",null,<li>Html</li>),
// React.createElement("ul",null , <li>Css</li>,])


// const courses = ["Html","Css" , "Javascript","ReactJS"];

// // [<li>Html</li> , <li>Css</li> , <li>Javascript</li> , <li>ReactJS</li>]

// const element2 = (

//      <ul>       
//          {courses.map((course) => <li>{course}</li>)}
//      </ul>      
// )

//   function App() {
//        return( 
//            <h1>Hello, Coder Army</h1>
//        )
//   }         
  

//   const element = <h1 id="title" className="first" style={{backgroundColor:"orange" , color:"white"}}>Hello,Coder Army</h1>

  


// function App(props) {
    
//      return  (
//           <h1>Hello,Coder Army {props.name} {props.age} </h1>
//      )
// }
 
//  {
//      name:"Manan",
//      age:17
//  }
//  React.createElement("h1");
//    const element = <App name = "Manan"  age = {17}> </App>;

// React Components 
     
// function App(name) {
      
//     return (
//          <h1>Hello, Coder Army {name} </h1>
//     );
// }   
    // text/element : Javascript ka expression aap iske andar likh sakhain
    // Number,string , true , false, array , null te , undefined ,array, object 

    // Number, string , array 
    // true false , null , undefined (render honge lekin kuch dikhayi nahi dega);
    // Object : Error 
    //  const age = 12;
    //  const isLoggedIn = true;
    //  const element = <h1>Hello,Coder {isLoggedIn ? <h2>Logged in </h2>: <h2>Kindly SignIn</h2>}</h1>

 const root = ReactDOM.createRoot(document.getElementById('root'));

//  root.render(element2);

//  const element2 = React.createElement('div' , null,
//         React.createElement('h1',null,"Hello"),
//         React.createElement('h2',null,"h1");
//  )


function App() {
     return ( 
       <>
        <Header name="Manan"></Header>
        <Main user={{name:"Manan",age:17,city:"Banswara"}}></Main>
       <Footer/>
       </>
    )
}


function Header({name}) {
     
    return (
         <h1>{name} Welcome to Indian Election Commisssion </h1>
    )
}

const props =  {
     name:"Manan",
 }

 const {name} = props;

function Main ({user}) {
 
    return (
         <> 
           <h2>Hi {user.name}</h2>       
           <h3>{user.age > 18 ? "You are eligilbe to Vote": "You're not eligible for vote"}</h3> 
           <p>Your city is {user.city}</p>
         <h2>This is information about us </h2>  
      </>
    )
}


function Footer() {
     
    return ( 
         <h3>Thanks for Visiting our Website</h3>
    )
}
 






root.render(<App/>);
