import React, { Component } from 'react';
import { Row,Col ,Image,Card,Badge,Button,ListGroup,InputGroup,FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import useravatar from '../img/useravatar.jpg';
import Background from '../img/userbackground.jpg';
import heart from '../img/heart-icon.jpg'
import store from '../store';
import { loadFanficToRead ,submitComment,loadComments} from '../actions/readActions';
import MarkdownRenderer from 'react-markdown-renderer';
import '../stylesheets/read.css';
import enBtns from '../data/enBtns';
import ruBtns from '../data/rusBtns';
let  btns=[];
var backimageStyle = {
    
    backgroundImage: `url(${Background})`
  };
class Profile extends Component {

	constructor(){
		super();
   
		this.state = {
			comment: ''
		};
  }
  checkLoginAndAdmin() {
		const banstatus = localStorage.getItem('banstatus')
		if  (banstatus === "false" ) {
		}
		else{
			this.props.history.push("/");
		}
	  }

	UNSAFE_componentWillMount(){
    this.checkLoginAndAdmin()
    store.dispatch(loadFanficToRead({id:this.props.match.params.id}))
    store.dispatch(loadComments(this.props.match.params.id))
  }
  
  updateComment(event){
		this.setState({
			comment: event.target.value  
		});
	}
  submitComment(){
		store.dispatch(submitComment(this.props.match.params.id, {email:this.props.username ,comment: this.state.comment}));	

		this.setState({
			comment: ''
		});		
	}
	render(){
    btns= this.props.changedlang === "en" ? enBtns : ruBtns 
        const UserImage = ( <Image src={useravatar} style={{ width: "80px", height:"80px" }} roundedCircle /> );
        const Author = (
            
            <Row className="Profile head "  style={backimageStyle}>
                
                <Col className="Profile head  " >
                <div id="Author">{btns.author}:</div> 
                <p></p>
                    {UserImage}
                    <div className="Profile head username"> {this.props.fanficread && (this.props.fanficread.lenght>0) ? "Null" : this.props.fanficread &&this.props.fanficread[0].author} </div>
                </Col>
                
            </Row>            
        );
const intro=(
  
<div>
{ this.props.fanficread && this.props.fanficread.map((fanfic, index) => { return( <  Card key={index }>
  <Card.Header id="Header" as="h5" >
    <Row>
      <Col sm={10}>
     { fanfic.title}
        </Col>
        <Col sm={2}>
          <span>
            <Image src={heart} style={{ width: "20px", height:"20px" }}/>+7
            </span>
            </Col>
            </Row> 
            </Card.Header>
  <Card.Body id="BodyCard">
     <Row>
         <Col sm={5}>
    <Card.Title>{btns.category}:</Card.Title>
    <Card.Text>
    { fanfic.category}
    </Card.Text>
    <Card.Title>{btns.tags}:</Card.Title>
    <Card.Text>
    { fanfic.tags.map((tag, index) => {return(<Badge key={index} style={{ marginLeft: "5px",fontSize:"15px" }} variant="dark">{tag} </Badge> );} ) }
    </Card.Text>
    </Col>
    <Col sm={7}>
    <Card.Title>{btns.description}:</Card.Title>
    <Card.Text style={{ wordBreak: "break-word" }}> 
    { fanfic.description}
    </Card.Text>
    </Col>
    </Row> 
  </Card.Body>
  </Card>
  );
})
}
</div>
)
const readdiv=(
    <Card body id="readzone"><MarkdownRenderer markdown={this.props.fanficread && (this.props.fanficread.lenght > 0) ? "Null" :this.props.fanficread && this.props.fanficread[0].fantext} /></Card>

)
const comments =(
<Card body id="BodyComments">
<Card>
  <Card.Header id="HeaderComment">{btns.Comment}</Card.Header>
  <Card.Body>
  <InputGroup className="mb-3">
    <FormControl
    value={this.state.comment}
    onChange={this.updateComment.bind(this)}
      placeholder="Write comment.."
      aria-label="Write comment.."
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary" onClick={this.submitComment.bind(this)} >{btns.submit}</Button>
    </InputGroup.Append>
  </InputGroup>
  </Card.Body>
</Card>
<p></p>
<Card >
  <Card.Header id="HeaderComment">{btns.comments}</Card.Header>
  <ListGroup variant="flush" id="ListComments">
  {this.props.comments && (this.props.comments.length > 0  ) ? this.props.comments && this.props.comments.map((comment, index) => {
     return( 
     <ListGroup.Item key={index }>{comment.author +" : "}{comment.comment} </ListGroup.Item>
    );
}) : <ListGroup.Item >{btns.noComment} </ListGroup.Item>
}
  </ListGroup>
</Card>
</Card>

)
		return (
			<Row className="ContentRow"> 
            <Col id="content" sm>
                 {Author} 
                 <p></p>
                 {intro} 
                 <p></p>
                 {readdiv} 
                 <p></p>
                 {comments} 
                 <p></p>
                 </Col>
             </Row>
		)
	}
}

const mapStateToProps = state => {
	return {
     fanficread: state.readpage.fanfics,
     comments: state.readpage.comments,
     username: state.readpage.username,
     changedlang: state.changelanguge.lang,
	}
}

export default connect(mapStateToProps)(Profile)