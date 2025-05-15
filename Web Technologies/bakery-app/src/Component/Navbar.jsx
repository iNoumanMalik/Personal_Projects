import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
function Navbar(props) {
    const {setCartDisplay} = props;
  return (
    <div>
       <nav className='navbar'>
            <p className='logo'>Elite Restaurant.</p>
            <ul className='list'>
                <li>Menu</li>
                <li>Locations</li>
                <li>Rewards</li>
                <li>Contact Us</li>
            </ul>
            <button className='btn'>Order Now</button>
            <FontAwesomeIcon icon={faSearch} className='icon'/>
            <FontAwesomeIcon icon={faCartShopping} className='icon' onClick={()=>{setCartDisplay(true)}}/>
        </nav>
    </div>
  )
}

export default Navbar
