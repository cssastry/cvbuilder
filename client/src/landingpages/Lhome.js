import React,{Component} from 'react'
import Navbar from '../Sections/NavBar'

export default class Home2 extends Component{
    constructor(props){
        super(props);
        this.state={pageTitle:"Home2"};
    }
    render(){
        return(
            <>
            <Navbar/>
             
            <div className='home-section'>
                <div className=''>
                <div className="main-banner wow fadeIn animated" id="top" data-wow-duration="1s" data-wow-delay="0.5s" style={{visibility: "visible"}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="left-content show-up header-text wow fadeInLeft animated" data-wow-duration="1s" data-wow-delay="1s" style={{visibility: "visible"}}>
                <div className="row">
                  <div className="col-lg-12">
                    <h2>Quick & Easy Resume Editor</h2>
                    <p>When writing a resume, no detail is too small to be overlooked. That’s why it’s crucial for your resume header to look professional enough for the recruiter to want to call you.

</p>
                  </div>
                  <div className="col-lg-12">
                    <div className="white-button first-button scroll-to-section">
                      <a href='/signup'>Customize Your Template <i className=""></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-1'>

            </div>
            <div className="col-lg-6">
              <div className="right-image wow fadeInRight animated" data-wow-duration="1s" data-wow-delay="0.5s" style={{visibility: "visible"}}>
                <img src="assets/images/slider-dec.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="services" className="services section">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="section-heading  wow fadeInDown animated" data-wow-duration="1s" data-wow-delay="0.5s" style={{visibility: "visible"}}>
            <h4>Follow step-by-step professional guidance to create a polished resume in minutes.</h4>
            <img src="assets/images/heading-line-dec.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="service-item first-service">
            <div className="icon"></div>
            <h4>App Maintenance</h4>
            <p>You are not allowed to redistribute this template ZIP file on any other website.</p>
            <div className="text-button">
              <a href="#">Read More <i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="service-item second-service">
            <div className="icon"></div>
            <h4>Rocket Speed of App</h4>
            <p>You are allowed to use the Chain App Dev HTML template. Feel free to modify or edit this layout.</p>
            <div className="text-button">
              <a href="#">Read More <i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="service-item third-service">
            <div className="icon"></div>
            <h4>Multi Workflow Idea</h4>
            <p>If this template is beneficial for your work, please support us <a rel="nofollow" href="https://paypal.me/templatemo" target="_blank">a little via PayPal</a>. Thank you.</p>
            <div className="text-button">
              <a href="#">Read More <i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="service-item fourth-service">
            <div className="icon"></div>
            <h4>24/7 Help &amp; Support</h4>
            <p>Lorem ipsum dolor consectetur adipiscing elit sedder williamsburg photo booth quinoa and fashion axe.</p>
            <div className="text-button">
              <a href="#">Read More <i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 

  <footer id="newsletter">
  <section className="our_team">
    <div className='container text-center'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
        <h3>Our Amazing Team</h3>
        <h6>Team of interns who made it possible</h6>

        <div className='container'>
        <div className='team'>
            <div className='row'>
                <div className='card col-md-4'>
                    <div className='card_image'>
                    <img src="/assets/images/MYPIC.png"/>
                    </div>
                    
                    <h4>Anand</h4>
                    <p>Intern</p>
                </div>
                <div className='card col-md-4'>
                    <div className='card_image'>
                    <img src="/assets/images/MYPIC.png"/>
                    </div>
                    
                   <h4>Ameeth</h4>
                    <p>Intern</p>
                </div>
                <div className='card col-md-4'>
                    <div className='card_image'>
                    <img src="/assets/images/MYPIC.png"/>
                    </div>
                    
                    <h4>Nihaal</h4>
                    <p>Intern</p>
                </div>
                <div className='card col-md-4'>
                    <div className='card_image'>
                    <img src="/assets/images/MYPIC.png"/>
                    </div>
                    
                    <h4>Saketh.A</h4>
                    <p>Intern</p>
                </div>
                
                <div className='card col-md-4'>
                    <div className='card_image'>
                    <img src="/assets/images/MYPIC.png"/>
                    </div>
                    
                    <h4>Saketh.G</h4>
                    <p>Intern</p>
                </div>
                <div className='card col-md-4'>
                    <div className='card_image'>
                    <img src="/assets/images/MYPIC.png"/>
                    </div>
                    
                    <h4>Nikhil</h4>
                    <p>Intern</p>
                </div>
            </div>
        </div>
        </div>


        </div>
        

        
    </div>
  </section>
   
  </footer>


                </div>
           
          
            </div>
            </>
        );
    }
}