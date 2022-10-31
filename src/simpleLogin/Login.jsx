import React , {useState,useRef} from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [Name,setName] = useState("daaboub");
    const [Email,setEmail] = useState("amine@gmail.com");
    const [Password,setPassword] = useState("1234");

    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    const redi = useNavigate()  

    const handleLogin = (e) => {
        e.preventDefault()
        if(Name === nameRef.current.value && Email === emailRef.current.value && Password === passwordRef.current.value){
            redi("/hello",{state:{nameRef:Name}})
        }else{

            console.log("its not ok");
        }
    }

    return (
        <div className="login">
            <form>
                <h1>login</h1>
                <div>
                    <label htmlFor="">Name:</label>
                    <input type="text" ref={nameRef} />
                </div>
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="text" ref={emailRef} />
                </div>
                <div>
                    <label htmlFor="">Password:</label>
                    <input type="password" ref={passwordRef} />
                </div>
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}

export default Login