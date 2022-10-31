import React, { useState } from "react";

const CheckList = () => {
    const [isover,setisover] = useState(false)
    const [isDev,setIsdev] = useState(false)

    const handle = (e)=>{
        setisover(e.target.checked)
    }
    const handle2 = (e)=>{
        setIsdev(e.target.checked)
    }

    return(
        <div className="checklist">
            <h1>Are you over 21 : {isover ? "Yes" : "NO"}</h1>
            <label>Are you over 21</label>
            <input type="checkbox" checked={isover} onChange={handle}/>
            <h1>Are you developer : {isDev ? "Yes" : "NO"}</h1>
            <label>Are you developer ?</label>
            <input type="checkbox" checked={isDev} onChange={handle2}/>
        </div>
    )
}

export default CheckList