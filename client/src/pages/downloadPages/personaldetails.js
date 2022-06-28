import React,{Component} from 'react'


export default class PersonalResume extends Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: [] };
        
    }
    
    callAPI() {
        fetch("http://localhost:9000/personalcall")
            .then(res => res.text())
            .then(res=>JSON.parse(res))
            .then(res => this.setState({ apiResponse: res[0]}));
             
    }
   
    componentWillMount() {
        this.callAPI();
    }
    render(){
        return(
            <>
            <ul className='personal_details_list'>
                <li><b><i className='fa fa-user'></i> Father's Name</b><span>{this.state.apiResponse.fathername}</span></li>
                <li><b><i className='fa fa-user'></i> Mother's Name</b><span>{this.state.apiResponse.mothername}</span></li>
                <li><b><i className='fa fa-flag'></i> Nationality</b><span>{this.state.apiResponse.nationality}</span></li>
                <li><b><i className='fa fa-calendar'></i> Date of Birth</b><span>{this.state.apiResponse.fathername}</span></li>
                <li><b><i className='fa fa-mars'></i> Gender</b><span>{this.state.apiResponse.fathername}</span></li>
            </ul>
                      
           
            
            
            </>
        );
    }
}
