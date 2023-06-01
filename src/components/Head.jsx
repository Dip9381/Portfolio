import React, { useEffect, useState } from 'react'
import '../components/style.css'

const Head = (props) => {
const [activeli,setli]=useState(1);
const changeli=(tabnumber)=>{
    setli(tabnumber);
}
useEffect(()=>{
props.getkey(activeli);
},[activeli,props])
  return (
    <>
    <div className="head">
        <ul>
            <li className={activeli===1?"active":"nonactive"} onClick={()=>changeli(1)}>About</li>
            <li className={activeli===6?"active":"nonactive"} onClick={()=>changeli(6)}>Education details</li>
            <li className={activeli===3?"active":"nonactive"} onClick={()=>changeli(3)}>Skills</li>
            <li className={activeli===4?"active":"nonactive"} onClick={()=>changeli(4)}>Work Samples</li>
            <li className={activeli===5?"active":"nonactive"} onClick={()=>changeli(5)}>Certifications</li>
        </ul>
    </div>
    </>
  )
}

export default Head