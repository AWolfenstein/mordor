import React, { Component } from 'react';
import { Row,Col,Button,ListGroup,CardColumns,Card,Image,Badge,ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import Ticker from 'react-ticker'
import '../stylesheets/home.css'
import useravatar from '../img/useravatar.jpg';
import store from '../store';
import { loadFanfics,loadCategoryFanfics} from '../actions/HomeAction';
import { loadTags} from '../actions/addFanficActions';
import enBtns from '../data/enBtns';
import ruBtns from '../data/rusBtns';
let  btns=[];
class Home  extends Component {

	constructor(){
		super();

		this.state = {
		
		};
		
	}

	componentWillMount(){
   
    store.dispatch(loadFanfics()).then(()=>{
    store.dispatch(loadTags())})
   
	}

	

	render(){
   btns= this.props.changedlang === "en" ? enBtns : ruBtns 
    const head=(
      <div>
           <Ticker direction="toRight"  speed={20}>
{() => (
            <>
                <span id="three" >Mordor</span> - <span id="threet">a man-made</span><span id="threee"> civilization defamed</span><span id="threext"> by the winners</span>
                
                </>
        )}

    </Ticker>
<Ticker mode="await" mode="smooth" speed={5}>
{() => (
            <>
                <span className="Mordor">Mordor</span> - <span className="Mordor text">a man-made civilization defamed by the winners</span>
                </>
            
        )}

    </Ticker>
    <Ticker direction="toRight" speed={15}>
{() => (
            <>
                <span id="two" >Mordor</span> - <span id="twot">a man-made</span><span id="twoe"> civilization defamed</span><span id="twoxt"> by the winners</span>
                
                </>
        )}

    </Ticker>
     </div>
    );
const Categories =(
  <div>
    <h3>{btns.categories}:</h3>
    <ListGroup variant="flush" >
    { this.props.category && this.props.category.map((cat, index) => { return(
    <ListGroup.Item key={index} action  onClick={()=>{store.dispatch(loadCategoryFanfics(cat))}} className="ListLinks">{cat}</ListGroup.Item>
    )}
    )}
  </ListGroup>
  </div>
)
const fanfics=(
<CardColumns>
 { this.props.fanfics && this.props.fanfics.map((fanfic, index) => { return( <Card key={index} id="BodyCards"  border="danger">
    <Card.Img variant="top" src={useravatar} style={{ width: "345px", height:"160px" }}  />
    <Card.Body>
      <Card.Title>{fanfic.title}</Card.Title>
      <Card.Text className="truncate" >
      {fanfic.description}
      </Card.Text>
    </Card.Body>
    <ListGroup  className="list-group-flush"  >
    <ListGroupItem className="Listitem">{`${btns.author}: ${fanfic.author}`}</ListGroupItem>
    <ListGroupItem className="Listitem">{`${btns.category}:  ${fanfic.category}`}</ListGroupItem>
<ListGroupItem className="Listitem" >{btns.tags}: { fanfic.tags.map((tag, index) => {return(<Badge key={index} style={{ marginLeft: "10px" }} variant="info">{tag} </Badge> );} ) }</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href={`/read/${fanfic._id}`}>{btns.read}</Card.Link>
  </Card.Body>
  </Card>);
 })
  }

  </CardColumns>
)
		return (
            <Row className="ContentRow"> 
            <Col id="content" sm>
			<p></p>
      {head}
      <hr id="borderLine"></hr> 
      {Categories}
      <hr id="borderLine"></hr> 
      {fanfics}
      <p></p>
              </Col>
            </Row>
		)
	}
}

const mapStateToProps = state => {
 
	return {
  fanfics: state.homedata.fanfics,
  category: state.addfanfic.categories,
  changedlang: state.changelanguge.lang,
	}
}

export default connect(mapStateToProps)(Home)