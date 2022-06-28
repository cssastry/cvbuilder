import React,{Component} from 'react'
import {Button,Modal} from 'react-bootstrap'
import axios from 'axios'
//import { render, unmountComponentAtNode } from "react-dom";


export default class Expchange1 extends Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: [],show: false, titletoChange:"",companytoChange:"",fromtoChange:"",totochange:"",descriptiontochange:"",idtoChange:"" };
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
        fetch("http://localhost:9000/experiencecall")
            .then(res => res.text())
            .then(res=>JSON.parse(res))
            .then(res => this.setState({ apiResponse: res}));
             
    }
    showEditModal=(e)=>{
        const titl= e.target.getAttribute("data-titl");
        const com= e.target.getAttribute("data-com");
        const fromd= e.target.getAttribute("data-fromd");
        const tod= e.target.getAttribute("data-tod");
        const desc= e.target.getAttribute("data-desc");
        const sid= e.target.getAttribute("data-sid");
        this.setState({titletoChange:titl,companytoChange:com,fromtoChange:fromd,totochange:tod,descriptiontochange:desc,idtoChange:sid})
        
this.setState({show:true},this.checkEmpty);
    }
    submitForm() {
        var title,company,from,to,description,id;
        title=document.getElementById('intro_title').value;
        company=document.getElementById('intro_company').value;
        from=document.getElementById('intro_from').value;
        to=document.getElementById('intro_to').value;
        description=document.getElementById('intro_description').value;
        id=document.getElementById('intro_id').value;
        const data={title,company,from,to,description,id};
       
        axios
        .post('http://localhost:9000/editExpInfo', data)
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
            <a className="add-button btn-success fa fa-plus" data-sid="-1" data-titl="" data-com="" data-fromd="" data-tod="" data-desc=""     variant="primary" onClick={this.showEditModal}>
                               </a> 
            
            
            {this.state.apiResponse.map((item)=>{return <>
            <div className='education_card'>
                <a>
                <div>
            <a className='fa fa-pencil edit_skill_btn' data-sid={item.id} data-titl={item.title} data-com={item.company} data-fromd={item.from} data-tod={item.to} data-desc={item.description}  variant="primary" onClick={this.showEditModal}></a> 

            </div>

            <h3>{item.title}</h3>
            <div>
            <h4 className="experience-title accent">{item.company}</h4>
				<h5>{item.from} - {item.to}</h5>
				<h6>{item.description}</h6>
            </div>

                </a>
            
            
            </div>
           
                
            </>})}
            
           
                <Modal show={this.state.show} onHide={() => this.setState({ show: false })}>
        <Modal.Header>
          <Modal.Title>Edit Introduction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form id="introForm">
        <input type="hidden" id="intro_id" defaultValue={this.state.idtoChange}/>

        <div className="form-field">
                <input type="text" id="intro_title" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.titletoChange}/>
                <label className='form-label'>title</label>
            </div>
            <div className="form-field">
                <input type="text" id="intro_company" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.companytoChange}/>
                <label className='form-label'>company</label>
            </div>
            <div className="form-field">
                <input type="date" id="intro_from" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.fromtoChange}/>
                <label className='form-label'>from</label>
            </div>
            <div className="form-field">
                <input type="date" id="intro_to" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.totochange}/>
                <label className='form-label'>to</label>
            </div>
            <div className="form-field">
                <textarea type="text" id="intro_description" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.descriptiontochange}></textarea>
                <label className='form-label'>description</label>
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
