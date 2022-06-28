import React,{Component} from 'react'
import {Button,Modal} from 'react-bootstrap'
import axios from 'axios'
//import { render, unmountComponentAtNode } from "react-dom";


export default class Contactchange extends Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: "",show: false ,address:"",city:"",state:"",phone:"",email:""};
        
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
        fetch("http://localhost:9000/contactcall")
            .then(res => res.text())
            .then(res=>JSON.parse(res))
            .then(res => this.setState({ apiResponse: res[0]}));
    }
    submitForm() {
        var address,city,state,phone,email;
        address=document.getElementById('intro_address').value;
        city=document.getElementById('intro_city').value;
        state=document.getElementById('intro_state').value;
        phone=document.getElementById('intro_phone').value;
        email=document.getElementById('intro_email').value;
        const data={address,city,state,phone,email};
        axios
        .post('http://localhost:9000/editContactInfo', data)
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
        return (
            
            
       <>
       <Button className="edit-button" variant="primary" onClick={() => this.setState({ show: true },this.checkEmpty)}>
            <i className='fa fa-pencil'></i>
            </Button> 
       
                  <p><i className="fa fa-map-marker"></i >&nbsp;&nbsp;&nbsp; {this.state.apiResponse.address}</p>
                  <p><i className="fa fa-map-marker"></i >&nbsp;&nbsp;&nbsp; {this.state.apiResponse.city}</p>
                  <p><i className="fa fa-map-marker"></i >&nbsp;&nbsp;&nbsp; {this.state.apiResponse.state}</p>
                  <p><i className="fa fa-phone"></i>&nbsp;&nbsp;&nbsp;{this.state.apiResponse.phone}</p>
                  <p><i className="fa fa-envelope"></i>&nbsp;&nbsp;&nbsp;{this.state.apiResponse.email}</p>
        

                 
                
                <Modal show={this.state.show} onHide={() => this.setState({ show: false })}>
        <Modal.Header>
          <Modal.Title>Edit Introduction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form id="introForm">
            <div className="form-field">
                <input type="text" id="intro_address" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.apiResponse.address}/>
                <label className='form-label'>ADDRESS</label>
            </div>
            <div className="form-field">
                <input type="text" id="intro_city" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.apiResponse.city}/>
                <label className='form-label'>city</label>
            </div>
            <div className="form-field">
                <input type="text" id="intro_state" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.apiResponse.state}/>
                <label className='form-label'>state</label>
            </div>
            <div className="form-field">
                <input type="text" id="intro_phone" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.apiResponse.phone}/>
                <label className='form-label'>PHONE</label>
            </div>
            <div className="form-field">
                <textarea type="text" id="intro_email" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.apiResponse.email}></textarea>
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
          
      
        </>
        
      
     
      
      
        );
      }
      
}