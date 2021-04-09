import React from 'react';
import Navbar from './Navbar/Navbar';
import './navigation.css';
import Login from './Login/login';
import SignUp from './signup/signup';


const Navigation = ()=>{

  return (
    <div className="navigation">
      <div  className="container">
        <Navbar/>
        <Login/>
        <SignUp/>
      </div>
    </div>
  )
}

export default Navigation;