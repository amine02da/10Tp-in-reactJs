import React from "react";
import { useLocation } from "react-router-dom";

const Hello = () => {
    const location = useLocation()
    return (
        <h1>hello {location.state.nameRef}</h1>
    )
}

export default Hello