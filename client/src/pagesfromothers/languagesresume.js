import React,{Component} from 'react'


export default class LanguageResume extends Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: [] };
        
    }
    
    callAPI() {
        fetch("http://localhost:9000/langcall")
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
                            
           <ul>
            {this.state.apiResponse.map((lang)=>{return <>
                
                
						{lang.language}, 
							
            </>})}
            </ul>
            
            </>
        );
    }
}
