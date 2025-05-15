import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
function StartRating() {

  const [hoverIndex, setHoverIndex] = useState(0);
  const [selectedStar, setSelectedStar] = useState(0)

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(0);
  };

  const handleClick = (index) => {
    if(selectedStar == index){
      setSelectedStar(0)
    }else{
      setSelectedStar(index);
    }
  }
  
  return (
    <div className="starrating">
      {/* <h4>RATE THIS MOVIE</h4> */}
      {[...Array(5)].map((_, index) => {
        index+=1;
        return (
        <FontAwesomeIcon
          key={index}
          icon={index <= (hoverIndex || selectedStar) ? solidStar: faStar}
          onMouseMove={()=>handleMouseEnter(index)}
          onMouseLeave={()=>handleMouseLeave(index)}
          onClick= {()=>handleClick(index)}
          className="star"
        />)
      })}

    </div>
  );
}

export default StartRating;
