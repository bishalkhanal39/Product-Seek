import React from 'react';
import './logo.css';
import logo from './product-seek-logo.png'

const Logo = ()=>{
  return(
    <div className='Logo'>
      <a href="/"><img src={logo} alt=""/></a>
    </div>
  )
}

export default Logo;