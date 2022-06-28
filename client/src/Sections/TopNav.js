import React from 'react'
import logo3 from '../logo3.png'

export default function TopNav(){
   
        
    return(
        <>
        <div className='nav-bar'>
            <div className='container' >
  <a href="/" className='brand-logo pull-left'><img className="logo" src={logo3} /></a>
  <ul className='nav-menu'>
  <li> <a href="/dashboard">Back to Dashboard</a></li>

  </ul>
  </div>

            </div>
        </>
    );
}