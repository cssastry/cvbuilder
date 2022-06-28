import React,{Component} from 'react'
import {Button,Modal} from 'react-bootstrap'
import axios from 'axios'
//import { render, unmountComponentAtNode } from "react-dom";


export default class LanguageChange extends Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: [],show: false, languagetoChange:"",idtoChange:"" };
        this.showEditModal=this.showEditModal.bind(this);
        
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
        fetch("http://localhost:9000/langcall")
            .then(res => res.text())
            .then(res=>JSON.parse(res))
            .then(res => this.setState({ apiResponse: res}));
             
    }
    deleteLanguage=(e)=>{
        const lid =e.target.getAttribute("data-lid");
        const data={lid};
        axios.post('http://localhost:9000/deleteLanguage', data)
        .then(() => console.log('intro Updated'))
        .catch(err => {
            console.error(err);
        });
        window.location.reload();
    }
    showEditModal=(e)=>{
        const language= e.target.getAttribute("data-language");
        const languageid= e.target.getAttribute("data-lid");
        this.setState({languagetoChange:language,idtoChange:languageid})
        
this.setState({show:true},this.checkEmpty);
    }
    submitForm() {
        var language,id;
        language=document.getElementById('intro_lang').value;
        id=document.getElementById('intro_lId').value;
        
        const data={language,id};
        axios
        .post('http://localhost:9000/editLanguageInfo', data)
        .then(() => console.log('intro Updated'))
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
              <a className="add-button btn-success fa fa-plus" data-lid="-1" data-language=""  variant="primary" onClick={this.showEditModal}>
                            
           </a> 
           <ul style={{listStyle: 'none'}}>
            {this.state.apiResponse.map((lang)=>{return <>
                
                
						<li>{lang.language} <a className='btn btn-success edit_lng_button fa fa-times'  data-lid={lang.languageid}  variant="primary" onClick={this.deleteLanguage}></a> 
</li>
						
					
            </>})}
            </ul>
           
                <Modal show={this.state.show} onHide={() => this.setState({ show: false })}>
        <Modal.Header>
          <Modal.Title>Edit Introduction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form id="introForm">
                <input type="hidden" id="intro_lId" defaultValue={this.state.idtoChange}/>
            <div className="form-field">
                <input type="text" id="intro_lang" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.languagetoChange}/>
                <label className='form-label'>language</label>
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
