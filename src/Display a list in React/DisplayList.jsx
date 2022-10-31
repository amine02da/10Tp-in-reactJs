import React, { useState } from "react";

const DispalyList = () =>{

    const data = [
        {title:"My New WebSite",body:"lorem ipsum...",author:"DaCoding"},
        {title:"Hello from reactJs",body:"lorem ipsum...",author:"DaCoding"},
        {title:"Web fullStack",body:"lorem ipsum...",author:"DaCoding"}

    ]
    const [blogs,setBlogs] = useState(data)
    return (
        <div className="home">
            {data.map((blog,index)=>(
                <div className="Items" key={index}>
                    <h1>{blog.title}</h1>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    )
}

export default DispalyList