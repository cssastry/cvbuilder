import React from 'react'
import logo3 from '../logo3.png'
import $ from 'jquery'

export default function Navbar(){
   
        
    return(
        <>
        <div className='nav-bar'>
            <div className='container' >
  <a href="/" className='brand-logo pull-left'><img className="logo" src={logo3} /></a>
  <ul className='nav-menu'>
  <li> <a href="/">Home</a></li>
  <li> <a href="/dashboard">Dashboard</a></li> 
    <li><a href='/login'>Login</a></li>
    <li><a href='/signup'>Signup</a></li>

  </ul>
  </div>

            </div>
        </>
    );
}