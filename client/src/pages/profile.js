import React,{Component} from "react";
import SideNav from "../Sections/SideNavbar";
import axios from 'axios'



export default class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {title:"",selectedImage:'',apiResponse:[],selFileName:'',img:''};
        this.submitDetails=this.submitDetails.bind(this);
        
    }
    checkEmpty(){
        var inputList= document.getElementsByTagName('input');
        
        var input;
        for(let i=0;i<inputList.length;i++){
            input=inputList[i].value
            if (input){
                inputList[i].nextElementSibling.classList.add('has_content');
            }else{
                //inputList[i].nextElementSibling.classList.remove('has_content');
            }

        }
        
    }
    callAPI() {
        fetch("http://localhost:9000/userdetails")
            .then(res => res.text())
            .then(res=>JSON.parse(res))
            .then(res => this.setState({ apiResponse: res[0]},this.checkEmpty()));
            axios.post("http://localhost:9000/getuserImage",{id:sessionStorage.getItem("userid")})
			.then((response)=>{
			sessionStorage.setItem("userImage",response.data);
			})
            .catch(err=>console.log(err));
    }
    submitDetails(){
       
        var firstname,lastname,nationality, gender,mothername, fathername, dob,userid;
        firstname= document.getElementById("fn").value;
        lastname=document.getElementById("ln").value;
        nationality=document.getElementById("ntnl").value;
        gender=document.getElementById("gender").value;
        mothername=document.getElementById("mtn").value;
        fathername=document.getElementById("ftn").value;
        dob=document.getElementById("dob").value;
        userid=document.getElementById("userid").value;
        const data = {
            userid:userid,
            firstname:firstname,
            lastname:lastname,
            mothername:mothername,
            fathername:fathername,
            gender:gender,
            dob:dob,
            nation:nationality,
           };
           const imgdata = new FormData();
           
        
        imgdata.append("image",this.state.selectedImage,this.state.selectedImage.name);
        imgdata.append("userid",userid);
           this.setState({img:imgdata})
        
        axios.post('http://localhost:9000/postuserdetails',data)
        .catch(err=>console.log(err));
        axios.post('http://localhost:9000/uploadImage',imgdata,{headers:{'content-type':'multipart/form-data'}})
        .catch(err=>console.log(err));

        
        window.location.reload();



    }
    imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          this.setState({selectedImage: e.target.files[0],selFileName: e.target.files[0].name});
        }
      };
     removeSelectedImage = () => {
        this.setState({selectedImage:''});
      }
      componentDidMount() {
        this.callAPI();
        
    }
    render(){
        
        return(
            <>
            <SideNav/>
            <div className="download_resume">
                <div className="container white-bg">
                    <div className="profile_form">
                    <form id = "form1" runat = "server">
                    <h3>My Profile<span><a type="button" className="ml-5 text-white btn btn-success" onClick={this.submitDetails}> Update Profile</a></span></h3>
                    
                    <hr/>
                    <div className="row">
                        <div className="col-md-4">
                        <div className="form-field">
                    <input type="text" id="fn" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.apiResponse.firstname}/>
                    <label className='form-label'>Firstname</label>
            </div>
            <div className="form-field">
                    <input type="text" id="ln" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.apiResponse.lastname}/>
                    <label className='form-label'>Lastname</label>
            </div>
            <div className="form-field">
                    <input type="text" id="ftn" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.apiResponse.fathername}/>
                    <label className='form-label'>Father's Name</label>
            </div>
            <div className="form-field">
                    <input type="text" id="mtn" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.apiResponse.mothername}/>
                    <label className='form-label'>Mother's Name</label>
            </div>
            <div className="form-field">
                    <input type="text" id="dob" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.apiResponse.dateofbirth}/>
                    <label className='form-label'>Date of Birth</label>
            </div>
            <div className="form-field">
                    <input type="text" id="gender" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.apiResponse.gender}/>
                    <label className='form-label'>Gender</label>
            </div>
            <div className="form-field">
                    <input type="text" id="ntnl" className='form-input form-control' onChange={this.checkEmpty} defaultValue={this.state.apiResponse.nationality}/>
                    <label className='form-label'>Nationality</label>
            </div>
            <div className="form-field">
                    <input type="hidden" id="userid" defaultValue={this.state.apiResponse.userid}/>
                    <span></span>
            </div>

                        </div>
                        <div className="col-md-4">
                            <h4>Choose Profile Pic</h4>
                        <input type ='file' id = "profile_image" onChange={this.imageChange} accept="images/*" />
                        {!this.state.selectedImage &&
                        <img src={sessionStorage.getItem("userImage")}
                                        className='image'
                                        alt="Thumb"/>
                        }
                            {this.state.selectedImage && (
                                    <div className="preview">
                                        
                                        <img
                                        src={URL.createObjectURL(this.state.selectedImage)}
                                        className='image'
                                        alt="Thumb"
                                        />
                                        
                                        <button onClick={this.removeSelectedImage} className="delete">
                                        Remove This Image
                                        </button>
                                    </div>
                                    
                                    )}
                        </div>
                    </div>
                    
                    
            </form>

                    </div>
                

                </div>
            
            </div>
    
            </>
        );
    }
    
}