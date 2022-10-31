import React,{useState} from "react";

const Accordion = () => {
    const data = [
        {title:"lorem ipsum1",body:"Lorem ipsum dolor sit amet consectetur adipisicing elit"},
        {title:"lorem ipsum2",body:"Lorem ipsum dolor sit amet consectetur adipisicing elit"},
        {title:"lorem ipsum3",body:"Lorem ipsum dolor sit amet consectetur adipisicing elit"}
    ]
    const [active,setactive] = useState("")

    const handle = () => {
        setactive(active === "" ? setactive("active") : "")
    }

    return(
        <div className="Accordion" >
            {
                data.map((el,i)=>(
                    <div className="items" key={i}>
                        <button onClick={()=>handle()} className={active}>{el.title} {active === "active" ? "+" : "-"} </button>
                        <div className="content">{el.body}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Accordion