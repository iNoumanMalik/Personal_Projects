import React, { useState } from 'react'
import images from './DummyData/images'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'
import {faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons'
import {faCircle} from '@fortawesome/free-solid-svg-icons'
function ImageSlider2() {
    const [index,setIndex] = useState(0);

    const handlePrev = ()=>{
        if(index === 0){
            setIndex(images.length-1)
        }else{
            setIndex((prev)=>prev-1);
        }
    }
    const handleNext = ()=>{
        
        if(index === images.length-1){
            setIndex(0);
        }else{
            setIndex((prev)=>prev+1);
        }
    }

  return (
    <div className='imageSlider'>
      <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={handlePrev} className='prevbtn' />
      {/* {
        images.map((img,index)=>(
            <div key={index}>
                <img src={img.image} alt={img.alt} style={{width:'300px', height:'300px'}}/>
            </div>
        ))
      } */}
      {<img src={images[index].image} alt={images[index].alt} draggable="false" onMouseDown={(e)=>e.preventDefault()} style={{width:'300px', height:'300px'}}/>}
      <FontAwesomeIcon icon={faArrowAltCircleRight} onClick={handleNext} className='nextbtn'/>
     
      <div ></div>
    </div>
  )
}

export default ImageSlider2
