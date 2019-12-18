import React, { Component } from 'react';
import { Row,Col ,Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import useravatar from '../img/useravatar.jpg';
import Background from '../img/userbackground.jpg';
var backimageStyle = {
    
    backgroundImage: `url(${Background})`
  };
class Profile extends Component {

	constructor(){
		super();

		this.state = {
			
		};
	}

	componentDidMount(){
		
	}
	render(){
        const UserImage = ( <Image src={useravatar} style={{ width: "80px", height:"80px" }} roundedCircle /> );
        const head = (
            
            <Row className="Profile head "  style={backimageStyle}>
                <Col className="Profile head " >
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
                <input type="password" className="form-control" placeholder={this.props.btns.oldpass}  />
            </div>
            <div id="border_line"></div>
            <div className="form-group" id="newpass-gr">
                <label>{this.props.btns.newpass}</label>
                <input type="password" className="form-control" placeholder={this.props.btns.newpass}  />
            </div>
            <div className="form-group" id="newpass-gr">
                <label>{this.props.btns.retrypass}</label>
                <input type="password"  className="form-control" placeholder={this.props.btns.retrypass} />
            </div>
            <button   className="btn btn-primary btn-block">{this.props.btns.submit}</button>
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