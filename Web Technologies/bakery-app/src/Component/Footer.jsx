import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className='footer'>
    <FontAwesomeIcon icon={faFacebook} className='icon' size='2x'/>
    <FontAwesomeIcon icon={faTwitter} className='icon' size='2x'/>
    <FontAwesomeIcon icon={faInstagram} className='icon' size='2x'/>
      <p>All Right Reserves © 2024 Burger and Bakes.</p>
    </div>
  )
}

export default Footer
