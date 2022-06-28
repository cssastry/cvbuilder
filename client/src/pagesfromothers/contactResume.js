import React,{Component} from 'react';

export default class ContactResume extends Component{
    constructor(props) {
        super(props);
      this.state = { apiResponse: []};
        
    }
    
    
    callAPI() {
        fetch("http://localhost:9000/contactcall")
            .then(res => res.text())
            .then(res=>JSON.parse(res))
            .then(res => this.setState({ apiResponse: res[0]}));
    }
    
    componentWillMount() {
        this.callAPI();
    }
    render(){
        return (
            
            
       <>
       
       <div className='contactDetails'>
       <p><i className="fa fa-envelope"></i>{this.state.apiResponse.email}    </p>
       <p><i className="fa fa-phone"></i>+91-{this.state.apiResponse.phone} </p>
       <p className='address'><i className="fa fa-map-marker"></i><span>{this.state.apiResponse.address}, {this.state.apiResponse.city}, {this.state.apiResponse.state}</span></p>
        
        </div>    
       
       </> 
      
      
      
      
        );
      }
      
}