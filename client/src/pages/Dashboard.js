import axios from 'axios';
import React,{Component} from 'react'
import SideNav from '../Sections/SideNavbar';


export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={pageTitle:"Dashboard",image:'',imgdata:[]};
    }
    callAPI(){
      axios.post("http://localhost:9000/getuserImage",{id:sessionStorage.getItem("userid")})
      .then((res)=>{
      sessionStorage.setItem("userImage",res.data);
    })
      
    }
    componentDidMount(){
      this.callAPI();
    }
    render(){
        return(
            <>
             <SideNav/>

  <div className="container">
      <div className="row2">
        <div className="col-lg-3">
          <div className="service-item fourth-service text-center">
            <div className="userImage">
            <img className='sidenav_image' src={sessionStorage.getItem("userImage")} alt="UserImage"/>
            </div>
            

            <div className="text-button">
             <a href='/Home'> View Resume  <i className="fa fa-right-arrow"></i></a>
             <div></div>
              <a href='/resume'> Download Resume <i className="fa fa-download"></i></a>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  
            </>
        );
    }
}