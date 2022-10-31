import React,{useState} from "react";
import "./style.css"

const Search = ()=>{

    const list = [
        "Banana",
        "Apple",
        "Orange",
        "Mango",
        "Pineapple",
        "Watermelon",
        "grapes"
      ];

    const [filtredList,setfiltredList] = useState(list)

    const handel = (event) => {
        if(event.target.value === ""){
            setfiltredList(list)
        }
        const resulat = list.filter((el)=>(
            el.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
        ))
        setfiltredList(resulat)
    }
    return(
    <div className="conatiner">
        <div className="inp_group">
            <input type="text" onChange={(e)=>handel(e)} />
        </div>
        <div className="resulat">
            <ul>
                {
                    filtredList.map((el,index)=>(<li key={index}>{el}</li>))
                }
            </ul>
        </div>
    </div>
    )
}

export default Search;