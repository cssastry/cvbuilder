import React from "react"
import Educationchange from "./education";
import LanguageChange from "./langchange";
export default function Educationandlang (){
   
    return(
        <>
        <section className="container">
	<div className="row">
		<div className="col-md-8 col-sm-12">
			<div className="education">
			<h2 className="education-title accent white">Education</h2>
			     
				        <Educationchange/>
					<div className="education-content">
					
					</div>
			</div>
		</div>
		<div className="col-md-4 col-sm-12">
			<div className="languages">
				<h2>Languages</h2>
					<LanguageChange/>
			</div>
		</div>
	</div>
</section>


        </>
    )
}
	