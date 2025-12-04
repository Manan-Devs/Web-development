import {useState}  from 'react'; 

// useState , count = 0 , setCount 
// setCount ki value ko update kar sakte ho, and App function re-render kar sakte ho 

function App() {
      
  const  [count, setCount] = useState(0);

  // let count = 0;

  //  function increaseNumber() {
  //     count++;
  //     // console.log(count);

  //     const para = document.querySelector('p');
  //     para.textContent = `Counter:${count}`;
  //  }
    
     function increaseNumber() {
        setCount(count+1);
     }

  return (
      <>
        <p>Counter: {count} </p>
        <button onClick={increaseNumber}>Increment:{count} </button>
      </>
  )
   
}


export default App;