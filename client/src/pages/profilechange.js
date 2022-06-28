import React,{Component} from 'react'
import {Button,Modal} from 'react-bootstrap'
import axios from 'axios'

//import { render, unmountComponentAtNode } from "react-dom";


export default class Intro extends Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: "",show: false ,title:"",subtitle:"",content:""};
        
    }
    checkEmpty(){
        var inputList= document.getElementsByTagName('input');
        var textList= document.getElementsByTagName('textarea');
        
        var input;
        for(let i=0;i<inputList.length;i++){
            input=inputList[i].value
            if (input){
                inputList[i].nextElementSibling.classList.add('has_content');
            }else{
                inputList[i].nextElementSibling.classList.remove('has_content');
            }

        }
        for(let i=0;i<textList.length;i++){
            input=textList[i].value
            if (input){
                textList[i].nextElementSibling.classList.add('has_content2');
            }else{
                textList[i].nextElementSibling.classList.remove('has_content2');
            }

        }
        
    }
    
    callAPI() {
        fetch("http://localhost:9000/userscall")
            .then(res => res.text())
            .then(res=>JSON.parse(res))
            .then(res => this.setState({ apiResponse: res[0]}));
    }
    submitForm() {
        var title,sub,cont;
        title=document.getElementById('intro_title').value;
        sub=document.getElementById('intro_subTitle').value;
        cont=document.getElementById('intro_content').value;
        const data={title,sub,cont};
        axios
        .post('http://localhost:9000/editIntro', data)
        .then(() => console.log('intro Updatedted'))
        .catch(err => {
            console.error(err);
        });
        window.location.reload();
        
    }
    componentWillMount() {
        this.callAPI();
    }
    render(){
        return(
            <>
            <div className=" col-md-6 col-sm-12"> 
                <div className="about">
                    <h3 className="accent">{this.state.apiResponse.title}</h3>
                    <h2>{this.state.apiResponse.subtitle}</h2>
                    <p>{this.state.apiResponse.content}</p>
                   
           <Button className="edit-langbutton" variant="primary" onClick={() => this.setState({ show: true },this.checkEmpty)}><i className='fa fa-pencil'></i>
           </Button> 
                </div>
                <Modal show={this.state.show} onHide={() => this.setState({ show: false })}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Introduction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form id="introForm">
            <div className="form-field">
                <input type="text" id="intro_title" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.apiResponse.title}/>
                <label className='form-label'>title</label>
            </div>
            <div className="form-field">
                <input type="text" id="intro_subTitle" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.apiResponse.subtitle}/>
                <label className='form-label'>subtitle</label>
            </div>
            <div className="form-field">
                <textarea type="text" id="intro_content" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.apiResponse.content}></textarea>
                <label className='form-label'>content</label>
            </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => this.setState({ show: false })}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>this.setState({ show: false },this.submitForm)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            </div>
            
            </>
        );
    }
}
