import React,{Component} from 'react'



export default class Profileresume extends Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: [] }       
    }
    callAPI() {
        fetch("http://localhost:9000/userscall")
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
            <div> 
                
                   
                    <p>{this.state.apiResponse.content}</p>
                 
            </div>
            </>
        );
    }
}
