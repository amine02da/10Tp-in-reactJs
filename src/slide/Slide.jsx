import React from 'react';
import { useState } from 'react';
import BtnSlide from './btnSlide';

function Slide() {
    const dataImgs = [
        {id:1,imgUrl:"img/1.jpg"},
        {id:2,imgUrl:"img/2.jpg"},
        {id:3,imgUrl:"img/3.jpg"},
        {id:4,imgUrl:"img/4.jpg"}
    ]

    const [counter,setCounter] = useState(0)

    const moveNext = () => {
        if(counter >= dataImgs.length -1){
            setCounter(0)
        }else{
            setCounter(counter+1)
        }
    }
    const moveprev = () => {
        if(counter <= 0){
            setCounter(0)
        }else{
            setCounter(counter-1)
        }
    }
    console.log(dataImgs.length -1);
    console.log(counter);
  return (
    <div>
        {
            <div className="overly">
            <img src={dataImgs[counter].imgUrl} alt="" width={"400px"} height={"500px"} />
            <BtnSlide next = {moveNext} prev={moveprev}/>
            </div>
        }
    </div>
  )
}

export default Slide