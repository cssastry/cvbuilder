import React,{Component} from "react";
import SideNav from "../Sections/SideNavbar";



export default class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {title:"",selectedImage:''};
    }
    imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          this.setState({selectedImage: e.target.files[0]});
        }
      };
     removeSelectedImage = () => {
        this.setState({selectedImage:''});
      };
    
     
         
    render(){
        
        return(
            <>
            <SideNav/>
            <div className="download_resume">
            <form id = "form1" runat = "server">
   <input type ='file' id = "demo" onChange={this.imageChange} />
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
            </form>
    

            </div>
    
            </>
        );
    }
    
}