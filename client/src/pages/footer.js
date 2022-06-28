import React from "react";
export default function Footer(){
    return(
        <>
  <div>      
<div className="footer">
	<div className="container">
		<div className="row">
			<div className="col-md-12 col-sm-12">
				<p>Copyright &copy; 2022 my Profile</p>
				<ul className="social-icons">
					<li><a href="#" className="fa fa-facebook"></a></li>
                    <li><a href="#" className="fa fa-google-plus"></a></li>
					<li><a href="#" className="fa fa-twitter"></a></li>
					<li><a href="#" className="fa fa-dribbble"></a></li>
					<li><a href="https://github.com/Saketh-25/intership.git" className="fa fa-github"></a></li>
					<li><a href="#" className="fa fa-behance"></a></li>
				</ul>
			</div>
		</div>
	</div>
	<div>
		<h2></h2>
	
		<a href='/resume' id="my-button" type="button" className="btn btn-info btn-lg" data-target="#myModal" data-toggle="modal">downloadresume
		</a>
	  
	</div>
    </div>
            </div>
        </>
    )
}