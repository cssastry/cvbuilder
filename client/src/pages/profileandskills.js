import React from "react";

import Intro from "./profilechange";
import SkillChange from "./skillchange";
import $ from 'jquery'
export default function Profileandskills (){
    return(
        <>
        <section className="container">
	<div className="row">
		
			<Intro/>
          
		
		<div className="col-md-6 col-sm-12">
			<div className="skills">
				<h2 className="white">Skills</h2>
				<SkillChange/>
				
				
			</div>
		</div>
	</div>
</section>
        </>
    )
}