import React, { Component } from 'react';
import { Row,Col ,Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import useravatar from '../img/useravatar.jpg';
import Background from '../img/userbackground.jpg';
import { submitUpdateInfo }from '../actions/userUdateInfoActions';
import store from '../store';
var backimageStyle = {
    
    backgroundImage: `url(${Background})`
  };
class Profile extends Component {

	constructor(){

		super();
		this.state = {
			details:{}
        };
        
        this.updateDetails = this.updateDetails.bind(this);
        this.updateuser=this.updateuser.bind(this);
    }
    
    updateDetails(event){
		let updateDetails = this.state.details;
       let email= localStorage.getItem('email');
       updateDetails['email'] = email;
        updateDetails[event.target.id] = event.target.value;
        
        console.log(event.target.value);
        console.log(updateDetails)
		this.setState({
			details: updateDetails   
		});
  }

 updateuser(){
    store.dispatch(submitUpdateInfo(this.state.details));
  }

	componentDidMount(){
		
	}
	render(){
        const UserImage = ( <Image src={useravatar} style={{ width: "80px", height:"80px" }} roundedCircle /> );
        const head = (
            
            <Row className="Profile head "  style={backimageStyle}>
                <Col className="Profile head ">
                
                    {UserImage}
                    <div className="Profile head username">  {this.props.username}</div>
                </Col>
            </Row>            
        );
const body=(
    <Row>  
        <Col  sm></Col> 
         <Col  sm={10}>
            <div className="form-group" id="img-gr">
                <label>{this.props.btns.uploadimage}</label>
                <input type="file" className="form-control"  />
            </div>
            <div id="border_line"></div>
            <div className="form-group" id="oldpass-gr">
                <label>{this.props.btns.oldpass}</label>
                <input onChange={(event)=>{this.updateDetails(event);}} type="password" className="form-control" id="oldPass" placeholder={this.props.btns.oldpass}  />
            </div>
            <div id="border_line"></div>
            <div className="form-group" id="newpass-gr">
                <label>{this.props.btns.newpass}</label>
                <input onChange={(event)=>{this.updateDetails(event);}} type="password" className="form-control" id="newPass" placeholder={this.props.btns.newpass}  />
            </div>
            <div className="form-group" id="newpass-gr">
                <label>{this.props.btns.retrypass}</label>
                <input onChange={(event)=>{this.updateDetails(event);}} type="password"  className="form-control" id="retrynewPass" placeholder={this.props.btns.retrypass} />
            </div>
            <button onClick={()=>{this.updateuser();}}  className="btn btn-primary btn-block" >{this.props.btns.submit}</button>
            <p></p>
          </Col>
        <Col  sm></Col>
    </Row>
);
		return (
			<Row className="ContentRow"> 
            <Col  sm>
                 {head}  
                 {body} 
                 </Col>
             </Row>
		)
	}
}

const mapStateToProps = state => {
	return {
    
	}
}

export default connect(mapStateToProps)(Profile)