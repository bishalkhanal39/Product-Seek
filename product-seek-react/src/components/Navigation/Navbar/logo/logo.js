import React from 'react';
import './logo.css';

const Logo = ()=>{
  return(
    <div className='Logo'>
      <a href="/"><img src={require('./product-seek-logo.png')} alt=""/></a>
    </div>
  )
}

export default Logo;