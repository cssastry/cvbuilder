import React,{Component} from 'react'

export default class _templateName extends Component{
constructor(props){
    super(props);
    this.state={pageTitle:'_PageName'};
}
render(){
    return(
        <>
        <div>
            <h5>{this.state.pageTitle}</h5>
        </div>
        </>
    );
}
}