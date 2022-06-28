
import React,{Component} from 'react'
import axios from 'axios'
import Navbar from '../Sections/Navbar';

export default class Signup extends Component{
constructor(props){
    super(props);
    this.state={pageTitle:'SignUp',canSubmit:false};
	this.signupForm=this.signupForm.bind(this);
}
checkEmpty(){
	var inputList= document.getElementsByTagName('input');
	
	var input;
	for(let i=0;i<inputList.length;i++){
		input=inputList[i].value
		if (!input){
			inputList[i].nextElementSibling.classList.add('hascontent');
		}else{
			
		}
	}
	}
signupForm() {
	var username,firstname,lastname,password,confirmPassword;
	username=document.getElementById('username').value;
	firstname=document.getElementById('firstname').value;
	lastname=document.getElementById('lastname').value;
	password=document.getElementById('password').value;
	confirmPassword=document.getElementById('confirm-password').value;
	if(username!=null&&firstname!=null&&lastname!=null&&password!=null){
		this.setState({canSubmit:true});
	} this.checkEmpty();	
	
	if(this.state.canSubmit){
		if(confirmPassword==password){
			const data={username,firstname,lastname,password};
			axios
		.post('http://localhost:9000/signup', data)
		.then(() => console.log('intro Updatedted'))
		.catch(err => {
			console.error(err);
		});
		window.location="login";
	
		}else{
			alert("passwords do not match");
		}

	}
	

	

	
	
}

render(){
    return(
    <>
	<Navbar/>

<section>
<div className="container-signup100">
	<div className="main-w3layouts wrapper">
		<h1>CV SignUp Form</h1>
		<div className="main-agileinfo">
			<div className="agileits-top">
            <form action="#" method="post">
			<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input id="username" className="input100" type="text" name="Username" placeholder="Username" />
						<span className='myalert'>Passord cannot be empty</span>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-user" aria-hidden="true"></i>
						</span>
						
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input id="firstname" className="input100" type="text" name="Firstname" placeholder="Firstname" />

						<span className='myalert'>Passord cannot be empty</span>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-user" aria-hidden="true"></i>
						</span>
						
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input id="lastname" className="input100" type="text" name="Lastname" placeholder="Lastname" />
						<span className='myalert'>Passord cannot be empty</span>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-user" aria-hidden="true"></i>
						</span>
						
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input id="password" className="input100" type="password" name="password" placeholder="Password" />
						<span className='myalert'>Passord cannot be empty</span>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
						
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input id="confirm-password" className="input100" type="password" name="cnfmpassword" placeholder="Confirm Password" />
						<span className='myalert'>Passord cannot be empty</span>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
						
					</div>

					<div className="wthree-text">
						<label className="anim">
							<input type="checkbox" className="checkbox" required=""/>
							<span>I Agree To The Terms & Conditions</span>
						</label>
						<div className="clear"> </div>
					</div>
					<input type="button" onClick={this.signupForm} value="SIGNUP"/>
				</form>
				<p>Don't have an Account? <a href="#"> Login Now!</a></p>
			</div>
		</div>
		
		<div className="colorlibcopy-agile">
			<p>© 2022 <a href="https://www.smscholarly.com" target="_blank">S&M Scholarly Solutions </a>. All rights reserved | Design Inspired by <a href="https://colorlib.com/" target="_blank">Colorlib</a></p>
		</div>
		
    
		<ul className="colorlib-bubbles">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
        </div>
		</div>

	</section>
	</>
    );
    }
    }