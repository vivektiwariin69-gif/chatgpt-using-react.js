import React, { useEffect, useState } from 'react'


function Darkmode() {
  const [mode , setmode] = useState("darkmode")
  function toggle(){
    if(mode === "darkmode"){
      setmode("lightmode")
    }
    else{
      setmode("darkmode")
    }
  }
  useEffect(()=>{
    document.body.className = mode
  } , [mode])
  return (
    <div>
      <button onClick={()=>{
        toggle()
        console.log(mode)
      }}>dark</button>
      
      
    




    </div>
  )
}

export default Darkmode
