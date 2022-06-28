import React from "react";
import $ from 'jquery';

export default function Home (){
	$(document).ready(function(){
		var ht=$('.skills').height();
		$('.about').height(ht);
		var ht2=$('.education').height();
		$('.languages').height(ht2);
		var ht3=$('.experience').height();
		$('.contact').height(ht3);
	});
	return(
		<>
<div>
{/* <div className="preloader">
	<div classNmae="sk-spinner sk-spinner-wordpress">
       <span className="sk-inner-circle"></span>
     </div>
</div> */}


<header>
	<div className="container">
		<div className="row">
			<div className="col-md-12 col-sm-12">
				<div className="profile_image">
				<img src={sessionStorage.getItem("userImage")} className="img-responsive img-circle tm-border" alt="templatemo easy profile" />

				</div>
				<hr />
				<h1 className="tm-title">Hi, I am Saketh</h1>
				<h1 className="white">Student</h1>
			</div>
		</div>
	</div>
</header></div>
			</>
        );
    
}
