import React, { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-regular-svg-icons' 
import {faStar as faSolidStar} from '@fortawesome/free-solid-svg-icons' 

function Practise() {
  const [hover,setHover] = useState(0);
  const [starIndex, setStarIndex] = useState(0);
  const handleMouseMove = (index)=>{
    setHover(index);
  }
  const handleMouseLeave = ()=>{
    setHover(0);
  }
  const handleClick = (index)=>{
    if(index == starIndex){
      setStarIndex(0);
    }else{
      setStarIndex(index);
    }
  }

  return(
    <div className="practice">
      <h1>Star Rating</h1>
      {
        [...Array(5)].map((_,index)=>{  // Array[1,2,3,4,5]
         index+=1;
          return(
            <FontAwesomeIcon icon={(index <= hover || index <=starIndex)? faSolidStar:faStar} onMouseMove={()=>handleMouseMove(index)} onMouseLeave={handleMouseLeave} onClick={()=>handleClick(index)} />
          )
        })
      }

      
    </div>
  )
  }

export default Practise;
