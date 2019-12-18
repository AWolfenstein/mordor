import React, { Component } from 'react';
import { Row,Col,Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {Tablebody}  from '../components/table';
class AdminPage extends Component {

	constructor(){
		super();

		this.state = {
			data:[{id:'1',name:'name',likes:'2',udtateAt:'2019-12-11T21:20:59.453+00:00',createAt:'2019-12-11T21:20:59.453+00:00'},
					{id:'2',name:'nff',price:'pdd'}],
					
					columns:[{
						dataField: 'id',
						text: 'ID',
						sort: true
					  }, {
						dataField: 'name',
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
					  }]
		};
	}

	componentDidMount(){
		
	}

	

	render(){

		return (
            <Row className="ContentRow"> 
            <Col id="content" sm>
            
              <h2>AdminPage Page</h2>
              <Tablebody 
			  colums={this.state.columns} 
			  data={this.state.data}
			  />
              <div >
			  <Button variant="primary" style={{width:"25%"}}>Ban</Button>  
			  <Button variant="warning" style={{width:"25%"}}>Edit</Button>
			  <Button variant="success" style={{width:"25%"}}>Give admin</Button>
			  <Button variant="danger" style={{width:"25%"}}  >Delete</Button>
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

export default connect(mapStateToProps)(AdminPage)