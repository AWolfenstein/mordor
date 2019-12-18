import React, { Component } from 'react';
import { Row,Col,Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {Tablebody}  from '../components/table';

class MyFanfic extends Component {

	constructor(){
		super();

		this.state = {
			data:[{id:'1',name:'name',likes:'2',udtateAt:'2019-12-11T21:20:59.453+00:00',createAt:'2019-12-11T21:20:59.453+00:00'},
			{id:'2',name:'namffe',likes:'2',udtateAt:'2019-12-11T21:20:59.453+00:00',createAt:'2019-12-11T21:20:59.453+00:00'},
			{id:'3',name:'nee',likes:'2',udtateAt:'2019-12-11T21:20:59.453+00:00',createAt:'2019-12-11T21:20:59.453+00:00'},
			{id:'4',name:'namwfwe',likes:'2',udtateAt:'2019-12-11T21:20:59.453+00:00',createAt:'2019-12-11T21:20:59.453+00:00'},
			{id:'5',name:'namewfw',likes:'2',udtateAt:'2019-12-11T21:20:59.453+00:00',createAt:'2019-12-11T21:20:59.453+00:00'},
			{id:'6',name:'namewfw',likes:'2',udtateAt:'2019-12-11T21:20:59.453+00:00',createAt:'2019-12-11T21:20:59.453+00:00'},
			{id:'7',name:'namwewfwe',likes:'2',udtateAt:'2019-12-11T21:20:59.453+00:00',createAt:'2019-12-11T21:20:59.453+00:00'}],
					
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
            
              <h2>MyFanfic  Page</h2>
              
			  <Tablebody 
			  colums={this.state.columns} 
			  data={this.state.data}
			  />
			  <div >
			  <Button variant="primary" style={{width:"30%"}}>Read</Button>
			  <Button variant="warning" style={{width:"30%"}}>Edit</Button>
			
			  <Button variant="danger" style={{width:"30%"}}  >Delete</Button>
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