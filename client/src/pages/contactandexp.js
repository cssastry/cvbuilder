import React from "react";
import Contactchange from "./contactchange";
import Expchange1 from "./exp";

export default function Contact(){
    return(
        <>
        <section className="container">
	<div className="row">
		<div className="col-md-4 col-sm-12">
			<div className="contact">
				<h2>Contact</h2>
					<Contactchange/>
			</div>
		</div>
		<div className="col-md-8 col-sm-12">
			<div className="experience">
				<h2 className="white">Experiences</h2>
					<div className="experience-content">
						<Expchange1/>
					</div>
			</div>
		</div>
	</div>
</section>
        </>
    )
}