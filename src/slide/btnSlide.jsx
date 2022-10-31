import React from 'react'

function BtnSlide({next,prev}) {
  return (
    <div>
        <button onClick={next} style={{position:"absolute" , top: "1555px" ,left:"366.5px"}}>👉</button>
        <button onClick={prev} style={{position:"absolute" , top: "1555px"  }}>👈</button>
    </div>
  )
}

export default BtnSlide