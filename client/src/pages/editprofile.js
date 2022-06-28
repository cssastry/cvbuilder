import React,{Component} from 'react'

import logo3 from '../logo3.png'
import SideNav from '../Sections/SideNavbar';


export default class EditProfile extends Component{
    constructor(props){
        super(props);
        this.state = {pageTitle:'EditProfile'};
    }
    render(){
        return(
            
            <>  
            <SideNav/>
            
 <section>
    <div className="container-signup100">
	<div className="main-w3layouts wrapper">
		<h1>Your Profile</h1>
		<div className="main-agileinfo">
			<div className="agileits-top">
            <form action="#" method="post">
            <div className="wrap-input100 validate-input" data-validate = "Password is required">
                
                <input id="name" className="input100" type="text" name="name" placeholder="Your Name" />
                <span className='myalert'>Your Name cannot be empty</span>
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                    <i className="" aria-hidden="true"></i>
                </span>
                
            </div>
			<div className="wrap-input100 validate-input" data-validate = "Password is required">
                
						<input id="fathername" className="input100" type="text" name="fathername" placeholder="Father's Name" />
						<span className='myalert'>Father's Name cannot be empty</span>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="" aria-hidden="true"></i>
						</span>
						
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input id="mothername" className="input100" type="text" name="mothername" placeholder="Mother's Name" />

						<span className='myalert'>Mother's Name cannot be empty</span>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="" aria-hidden="true"></i>
						</span>
						
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input id="dob" className="input100" type="text" name="dob" placeholder="Date of Birth" />
						<span className='myalert'>DOB cannot be empty</span>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="" aria-hidden="true"></i>
						</span>
						
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input id="gender" className="checkbox" type="checkbox" name="gender" placeholder="Gender" />
						<span className='myalert'>Gender cannot be empty</span>
						<span className="wthree-text">Male</span>
                        <input id="gender" className="checkbox" type="checkbox"  />
                        <span className="wthree-text">Female</span>

                        
                       
						<span className="symbol-input100">
							<i className="" aria-hidden="true"></i>
						</span>
						
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input id="nationality" className="input100" type="text" name="country" placeholder="Country" />
						<span className='myalert'>Passord cannot be empty</span>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="" aria-hidden="true"></i>
						</span>
						
					</div>

					<div className="wthree-text">
						<label className="anim">
							<input type="checkbox" className="checkbox" required=""/>
							<span>I Agree To The Terms & Conditions</span>
						</label>
						<div className="clear"> </div>
					</div>
					<input type="button" onClick={this.signupForm} value="Confirm Changes"/>
				</form>
				<p>Don't have an Account? <a href="#"> Login Now!</a></p>
			</div>
		</div>
		
		<div className="colorlibcopy-agile">
			<p>© 2022 <a href="https://www.smscholarly.com" target="_blank">S&M Scholarly Solutions </a>. All rights reserved | Design Inspired by <a href="https://colorlib.com/" target="_blank">Colorlib</a></p>
		</div>
		
    
		
        </div>
		</div>

	</section>
            </>
        );
}}