
import React from "react";

const Sum = React.memo(() => {
      
    
    function CalculateSum() {
         let sum = 0; 

         for(let i = 1; i <= 1000; i++) {
              sum+=i; 
         }

         return sum; 
    }

     const total = CalculateSum();

     return (
          <>
           <h1>This is our Math Library</h1>
           <h2>Sum : {total}</h2>
          </>
     )

});
     
    


export default Sum;