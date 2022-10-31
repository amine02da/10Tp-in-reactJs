import axios from "axios";
import React from "react";
import { useState } from "react";

const PrintData = () =>{
    const [joke,setJoke] = useState("")
    const handel = () => {
        axios.get("https://official-joke-api.appspot.com/random_joke").then(data=>{
            setJoke(data.data.setup)
        })
    }

    return(
        <div>
            <h1>Amine</h1>
            <button onClick={handel}>get Data</button>
            <div>{joke}</div>
        </div>
    )
}

export default PrintData;