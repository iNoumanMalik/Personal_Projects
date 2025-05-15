import React from 'react'
import Navbar from './Navbar'


function HomeCover(props) {
  const {setCartDisplay} = props;
  return (
    <div className='homecover'>
        <Navbar setCartDisplay={setCartDisplay}/>
        <div className='content'>
        <h1>Our Secret Ingredient is Love</h1>
        <p>Baked Goodies: Cheaper than Therapy, and You Don't Need an Appointment.</p>
        <button className='btn'>View The Menu</button>
        </div>
    </div>
  )
}

export default HomeCover
