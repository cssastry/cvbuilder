import React,{Component} from 'react'
import {Button,Modal} from 'react-bootstrap'
import axios from 'axios'
//import { render, unmountComponentAtNode } from "react-dom";


export default class SkillChange extends Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: [],show: false, skilltoChange:"",percenttoChange:"",idtoChange:"" };
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
        fetch("http://localhost:9000/skillcall")
            .then(res => res.text())
            .then(res=>JSON.parse(res))
            .then(res => this.setState({ apiResponse: res}));
             
    }
    showEditModal=(e)=>{
        const skill= e.target.getAttribute("data-skill");
        const perc= e.target.getAttribute("data-perc");
        const skillId= e.target.getAttribute("data-sid");
        this.setState({skilltoChange:skill,percenttoChange:perc,idtoChange:skillId})
        
this.setState({show:true},this.checkEmpty);
    }
    submitForm() {
        var skillname,percent,id;
        skillname=document.getElementById('intro_skillname').value;
        percent=document.getElementById('intro_value').value;
        id=document.getElementById('intro_skillId').value;
        
        const data={skillname,percent,id};
        axios
        .post('http://localhost:9000/editSkillInfo', data)
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
            <a className="Expadd-button btn-success fa fa-plus" data-sid="-1" data-skill="" data-perc="" variant="primary" onClick={this.showEditModal}>
                               </a> 
            
            
            {this.state.apiResponse.map((skill)=>{return <>
            <div className='row'>
            <div>
            <a className='fa fa-pencil edit_skill_btn' data-sid={skill.skillID} data-skill={skill.skillname} data-perc={skill.percent} variant="primary" onClick={this.showEditModal}></a> 

            </div>

            <div className="w-90">
            <strong>{skill.skillname}</strong>
				<span className="pull-right">{skill.percent}</span>
					<div className="progress">
						<div className="progress-bar progress-bar-primary" role="progressbar" 
                        aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: `${skill.percent}%`}}></div>
					</div>

            </div>
            </div>
           
                
            </>})}
            
           
                <Modal show={this.state.show} onHide={() => this.setState({ show: false })}>
        <Modal.Header>
          <Modal.Title>Edit Introduction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form id="introForm">
                <input type="hidden" id="intro_skillId" defaultValue={this.state.idtoChange}/>
            <div className="form-field">
                <input type="text" id="intro_skillname" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.skilltoChange}/>
                <label className='form-label'>skillname</label>
            </div>
            
            <div className="form-field">
                <input type="text" id="intro_value" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.percenttoChange}/>
                <label className='form-label'>value</label>
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
