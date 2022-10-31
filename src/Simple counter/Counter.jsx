import React , {useState} from "react";
import "./style.css"

const Counter = () =>{
    const [counter,setCounter] = useState(0)

    const incement = () =>{
        setCounter(counter+1)
    }
    const decrement  = () =>{
        setCounter(counter-1)
    }

    return(
        <div className="container">
            <button onClick={incement}>+</button>
                    <h1 className={counter < 0 ? "dec" : counter > 0 ? "inc" : null}>{counter}</h1>
            <button onClick={decrement}>-</button>
        </div>
    )
}
export default Counter