
import { useRef} from "react";


function Login() {
    
    // const [email, setEmail] = useState("");
    const emailRef = useRef();
    const passRef = useRef();
    // const [password,setPassword] = useState("");
    

    console.log("render");

    function handleSubmit(e) {
        e.prevent.default();

         console.log(emailRef.current.value);
         console.log(passRef.current.value);
         
    }
    
    return (
      
      <>
        <form onSubmit = {handleSubmit}>
           <input type="email" ref = {emailRef}/>
           <input type="password" ref = {passRef} />
           <button type="submit">Submit</button>
        </form>
      </>
     
   )
}



export default Login;