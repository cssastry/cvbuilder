import React,{Component} from 'react'
import {Button,Modal} from 'react-bootstrap'
import axios from 'axios'
//import { render, unmountComponentAtNode } from "react-dom";


export default class Educationchange extends Component{
    constructor(props) {
        super(props);
        this.state = { apiResponse: [],show: false, degreetoChange:"",branchtoChange:"",institutetoChange:"",yojtochange:"",yoptochange:"",gradetochange:"",idtoChange:"" };
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
        fetch("http://localhost:9000/usercalleducation")
            .then(res => res.text())
            .then(res=>JSON.parse(res))
            .then(res => this.setState({ apiResponse: res}));
             
    }
    showEditModal=(e)=>{
        const deg= e.target.getAttribute("data-deg");
        const bran= e.target.getAttribute("data-bran");
        const ins= e.target.getAttribute("data-ins");
        const yojn= e.target.getAttribute("data-yojn");
        const yopa= e.target.getAttribute("data-yopa");
        const grad= e.target.getAttribute("data-grad");
        const sid= e.target.getAttribute("data-sid");
        this.setState({degreetoChange:deg,branchtoChange:bran,institutetoChange:ins,yojtochange:yojn,yoptochange:yopa,gradetochange:grad,idtoChange:sid})
        
this.setState({show:true},this.checkEmpty);
    }
    submitForm() {
        var degree,branch,institute,yoj,yop,grade,id;
        degree=document.getElementById('intro_degree').value;
        branch=document.getElementById('intro_branch').value;
        institute=document.getElementById('intro_institute').value;
        yoj=document.getElementById('intro_yoj').value;
        yop=document.getElementById('intro_yop').value;
        grade=document.getElementById('intro_grade').value;
        id=document.getElementById('intro_id').value;
        const data={degree,branch,institute,yoj,yop,grade,id};
       
        axios
        .post('http://localhost:9000/editEDUCATIONInfo', data)
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
            <a className="add-button btn-success fa fa-plus" data-sid="-1" data-deg="" data-bran="" data-ins="" data-yojn="" data-yopa="" data-grad=""    variant="primary" onClick={this.showEditModal}>
                               </a> 
            
            
            {this.state.apiResponse.map((item)=>{return <>
            <div className='education_card'>
                
            <div>
            <a className='fa fa-pencil edit_skill_btned' data-sid={item.id} data-deg={item.degree} data-bran={item.branch} data-ins={item.institute} data-yojn={item.yoj} data-yopa={item.yop} data-grad={item.grade} variant="primary" onClick={this.showEditModal}></a> 

            </div>
            <a>
            <div className='row'>
                <div className='col-md-9'>
                <h3 style={{color:'#ea951d'}}>{item.degree}</h3>
            <p style={{color:'#ccc'}}>Branch:<span style={{fontStyle:'italic'}}>{item.branch}</span> </p>
            <p style={{color:'#ccc'}}>Year(s) Studied:<span style={{fontStyle:'italic'}}>{item.yoj} - {item.yop}</span></p>
            <p style={{color:'#ccc'}} className="">Institution:<span style={{fontStyle:'italic'}}>{item.institute}</span></p>
                </div>
                <div className='col-md-3'>
                    <div className='gpa'>
                    <h5>GPA:<span style={{color:'#ea951d'}}>{item.grade}</span></h5>
                    </div>
                    
                    </div>
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

                <input type="text" id="intro_degree" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.degreetoChange}/>
                <label className='form-label'>degree</label>
            </div>
            <div className="form-field">
                <input type="text" id="intro_branch" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.branchtoChange}/>
                <label className='form-label'>branch</label>
            </div>
            <div className="form-field">
                <input type="text" id="intro_institute" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.institutetoChange}/>
                <label className='form-label'>institute</label>
            </div>
            <div className="form-field">
                <input type="text" id="intro_yoj" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.yojtochange}/>
                <label className='form-label'>yoj</label>
            </div>
            <div className="form-field">
                <input type="text" id="intro_yop" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.yoptochange}/>
                <label className='form-label'>yop</label>
            </div>
            <div className="form-field">
                <input type="text" id="intro_grade" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.gradetochange}/>
                <label className='form-label'>grade</label>
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
