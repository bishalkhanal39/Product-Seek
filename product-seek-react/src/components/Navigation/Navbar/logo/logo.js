import React from 'react';
import './logo.css';
import {Link} from 'react-router-dom'

const Logo = ()=>{
  return(
    <div className='Logo'>
      <Link to='/' alt="Prooduct Seek">
      <img src={require('./product-seek-logo.png')} alt=""/>
      
      </Link>
    </div>
  )
}

export default Logo;