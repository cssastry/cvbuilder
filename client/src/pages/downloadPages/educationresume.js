import React,{Component} from 'react'



export default class EducationResume extends Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: [] };
        
    }
    
    callAPI() {
        fetch("http://localhost:9000/usercalleducation")
            .then(res => res.text())
            .then(res=>JSON.parse(res))
            .then(res => this.setState({ apiResponse: res}));
             
    }
   
    componentWillMount() {
        this.callAPI();
    }
    render(){
        return(
            <>
            
            
            {this.state.apiResponse.map((item)=>{return <>
           
                <div className='row m-1'>
                    <div className='col-md-9 edu_qualification mb-3'>
                    <h3>{item.degree} <span>({item.branch})</span></h3>
                    <p>{item.institute}</p>
                    <p>Passed with a GPA of {item.grade}</p>
                    </div>
                    <div className='col-md-3'>
                        <p>{item.yoj} - {item.yop}</p>
                    </div>

                </div>
           
            </>})}
            
            </>
        );
    }
}
