import React, { Component,useState  } from 'react';
import { Row,Col,Button,Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import {Tablebody}  from '../components/table';
import {DeleteAlert} from '../components/alertdelete';
class MyFanfic extends Component {

	constructor(){
		super();

		this.state = {
			data:[{id:'1',title:'name',likes:'2',udtateAt:'2019-12-11T21:20:59.453+00:00',createAt:'2019-12-11T21:20:59.453+00:00'},
			],
					
					columns:[{
						dataField: 'id',
						text: 'ID',
						sort: true
					  }, {
						dataField: 'title',
						text: 'Name',
						sort: true
					  }, {
						dataField: 'likes',
						text: 'likes',
						sort: true
					  }, {
						dataField: 'createAt',
						text: ' Create',
						sort: true
					  }, {
						dataField: 'udtateAt',
						text: 'update',
						sort: true
					  }],
					  show:false
		};
		this.showmodal=this.showmodal.bind(this);
		this.closemodal=this.closemodal.bind(this);
	}

	componentDidMount(){
		
	}
	closemodal(){
		this.setState({
			show:false
		})
	}
showmodal(){
	this.setState({
		show:true
	})
}
	 

	render(){
		
		return (
			<Row className="ContentRow"> 
            <Col id="content" sm>
            
              <h2>MyFanfic  Page</h2>
			  <DeleteAlert show={this.state.show}
			           close={this.closemodal}
			  />
			  <Tablebody 
			  colums={this.state.columns} 
			  data={this.state.data}
			  />
			  <div >
			  <Button variant="primary" style={{width:"30%"}} href="/read">Read</Button>
			  <Button variant="warning" style={{width:"30%"}} href={`/addfanfics/${localStorage.getItem('email') || null}/gtthtytjtju`}>Edit</Button>
			  <Button variant="danger" style={{width:"30%"}} onClick={this.showmodal}  >Delete</Button>
			  </div>
              </Col>
            </Row>
		)
	}
}

const mapStateToProps = state => {
	return {
    
	}
}

export default connect(mapStateToProps)(MyFanfic)