import logo from './logo.svg';
import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import LandingPage from './pages/landingPage';
import LoginRoute from './pages/loginRoute';
import SignupRoute from './pages/signupRoute';
import Dashboard from './pages/Dashboard';


import $ from 'jquery'
import Home from './pages/home';
import Resume from './pages/resume';
import './App.css';
import EditProfile from './pages/editprofile';
import Profile from './pages/profile';
import HomeRoute from './homrRoute';

function App() {
  $(document).ready(function(){
		var ht=$('.skills').height();
		$('.about').height(ht);
		var ht2=$('.education').height();
		$('.languages').height(ht2);
		var ht3=$('.experience').height();
		$('.contact').height(ht3);
	});
 
  
  return (
    <div className="App">
      <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/home" element={<HomeRoute />}></Route>
      <Route path="/resume" element={<Resume />}></Route>
      <Route path="/login" element={<LoginRoute />}></Route>
      <Route path="/signup" element={<SignupRoute />}></Route>
      
      { sessionStorage.getItem("userid") && 
        <Route path="/dashboard" element={<Dashboard />}></Route>
                }
      { sessionStorage.getItem("userid") && 
      <Route path="/editprofile" element={<EditProfile />}></Route>
}
      { sessionStorage.getItem("userid") && 
      <Route path="/profile" element={<Profile />}></Route>
}

    </Routes>
    </BrowserRouter>
     
    </div>
  );
}


export default App;
