import React, { useEffect, useState } from "react";
import Slider from "react-slick";

function ImageSlider() {
  const [images, setImages] = useState(null);
  const [error,setError] = useState(null);

  async function fetchImages() {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      console.log(data);
      setImages(data);
    } catch (err) {
      setError(err);
    }
  }

  useEffect(()=>{
    fetchImages();
  },[])

  const handleNext = ()=>{
    fetchImages();
  }

  const handlePrev = ()=>{
    
  }

  return (
  <div className="imageSlider">
  <button>Prev</button>
    {error?(
    <p>Opps!Something Went Wrong...</p>)
    :images?(
    <img src={images.message} style={{width:'300px', height:'300px'}}/>

    )
    :(
    <p>Loading...</p>
    )
  }
  <button onClick={handleNext}>Next</button>
  </div>
  )
}

export default ImageSlider;
