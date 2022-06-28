import React,{Component} from 'react'
import axios from 'axios';
import Navbar from '../Sections/Navbar';
export default class LoginPage extends Component{
constructor(props){
    super(props);
    this.state={pageTitle:'LoginPage'};
}
checkEmpty(){
	var inputList= document.getElementsByTagName('input');
	
	var input;
	for(let i=0;i<inputList.length;i++){
		input=inputList[i].value
		if (input){
			inputList[i].nextElementSibling.classList.remove('hascontent');
		}else{
			inputList[i].nextElementSibling.classList.add('hascontent');
		}
	}
	}
submitForm() {
	var username,password;
	username=document.getElementById('loginpage_username').value;
	password=document.getElementById('loginpage_password').value;
	if(username&&password){
		const data={username,password};
	axios
	.post('http://localhost:9000/login', data)
	.then(res=>res.data)
	.then((res)=>{if(res==0){
		alert("incorrect login credentials");
	}else{
		sessionStorage.setItem("userid",res.userid);
		sessionStorage.setItem("firstname",res.firstname);
		sessionStorage.setItem("lastname",res.lastname);
		//this gets userImage and stores in session
		axios.post("http://localhost:9000/getuserImage",{id:res.userid})
			.then((response)=>{
			sessionStorage.setItem("userImage",response.data);
			})
  		window.location = "dashboard";
	}})
	
	.catch(err => {
		console.error(err);
	});

	}else{
		alert('please enter password')
	}
	
	
}


render(){
    return(
        <>
		<Navbar/>
        
        <div>
        <div className="limiter">
		<div className="container-login100">
			
			<div className="login100 text-center" >
			<h3>Welcome to Custom CV Builder</h3>
			<h6 className='konchem-kindaki'>Powered by</h6>
			<div className='by-image'>
			<a href="https://www.smscholarly.com" target="_blank"><img src="https://www.smscholarly.com/assets/images/SandMLogo.png"/></a>
			</div>
				<div className="wrap-login100">
				<div className="login100-pic js-tilt" data-tilt>
					<img src= "assets/images/CV Builder_vector-file (1).svg" alt='SVG as an image'/>
				</div>
				
				<form className="login100-form validate-form">
					<span className="login100-form-title">
					 Login {sessionStorage.getItem("userid")}
					   </span>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: username is required">
						<input id="loginpage_username" className="input100" type="text" name="username" placeholder="username" onChange={this.checkEmpty}/>
						<span className='myalert'>Username cannot be empty</span>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input id="loginpage_password" className="input100" type="password" name="pass" placeholder="Password" onChange={this.checkEmpty}/>
						<span className='myalert'>Passord cannot be empty</span>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
						
					</div>
					
					<div className="container-login100-form-btn">
						<a type='button' onClick={this.submitForm} className="login100-form-btn">
							Login
						</a>
					</div>

					
					<div className="text-center">
						<a className="txt2" href="signup">
							Create your Account
							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>
				</form>
			</div>
		</div>
		<div className="colorlibcopy-agile">
			<p>© 2022 <a href="https://www.smscholarly.com" target="_blank">S&M Scholarly Solutions </a>. All rights reserved | Design Inspired by <a href="https://colorlib.com/" target="_blank">Colorlib</a></p>
		</div>
		</div>
	</div>
            
        </div>
		
        </>
    );
}
}