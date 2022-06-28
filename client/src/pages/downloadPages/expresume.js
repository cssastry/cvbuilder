import React,{Component} from 'react'
import Moment from 'moment'


export default class Expresume extends Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: [] };
        
    }
    
    callAPI() {
        fetch("http://localhost:9000/experiencecall")
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
                    <div className='col-md-8 edu_qualification '>
                    <h3>{item.company}</h3>
                    <p className='italic-text mb-3'>{item.title}</p>
                    </div>
                    <div className='col-md-4'>
                        <p>{Moment(item.from).format('MMM yyyy')} - {Moment(item.to).format('MMM yyyy')}</p>
                    </div>
                    <div className='edu_qualification mx-3'>
                    <p>{item.description}</p>
                    </div>
                    
                </div>
                
     
            </>})}        
            </>
        );
    }
}
