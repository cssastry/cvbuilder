import React from 'react'
import logo3 from '../logo3.png'


export default function SideNav(){
  const logout = () =>{sessionStorage.clear();
  window.location="login";}
    return(
        <>
        <div> 

            <div className='container2' >
            <a href="/" className='brand-logo '><img className="logo" src={logo3} /></a>             
  <div className='user-image-sec'>
  <div className='userImage'>
            <img className='sidenav_image' src={sessionStorage.getItem("userImage")} alt="UserImage"/>
  </div>
  </div>
  <h4>{sessionStorage.getItem("userid")}</h4>
  
  <ul className='nav-menu2'>
  <li> <a href="/dashboard"><i className='fa fa-tachometer'></i> Dashboard</a></li> 
    <li><a href='/profile'><i className='fa fa-user'></i> Profile</a></li>
    <li><a href='/resume'><i className='fa fa-book'></i> CV PrintView</a></li>
    <li><a href='/home'><i className='fa fa-book'></i> CV LinkView</a></li>
    <li><a href="#" onClick={logout}><i className='fa fa-unlock'></i> Logout</a></li>
  </ul>
  </div>          </div></>
    );
}