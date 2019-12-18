import React, { Component } from 'react';
import { Row,Col,Dropdown,Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import AsyncSelect from 'react-select/async';
import CreatableSelect from 'react-select/creatable';
import { colourOptions } from '../data/dataselect';
import {colourStyles} from  '../stylesheets/colour';

export const filterColors = (inputValue: string) => {
	return colourOptions.filter(i =>
	  i.label.toLowerCase().includes(inputValue.toLowerCase())
	);
  };
  
  export  const promiseOptions = inputValue =>
	new Promise(resolve => {
	  setTimeout(() => {
		resolve(filterColors(inputValue));
	  }, 1000);
	});
  
class AddFanfic extends Component {

	constructor(){
		super();

		this.state = {
			inputValue: ''
		};
	}
	
	  
	componentDidMount(){
		
	}
	handleInputChange = (newValue) => {
		const inputValue = newValue.value;
		console.log(newValue.value);
		this.setState({ inputValue });
		return inputValue;
	  };
	handleChange = (newValue, actionMeta: any) => {
		console.group('Value Changed');
		for(let i=0;i<newValue.length;i++){
			console.log(newValue[i].value);
		}
		
		console.log(`action: ${actionMeta.action}`);
		console.groupEnd();
	  };
	

	render(){
		
	
const body=(
	<Row>  
        <Col  sm></Col> 
         <Col  sm={10}>
	<div className="form-group" >
		<label>Title</label>
		<input type="text" className="form-control" placeholder="Enter Title"  />
	</div>
	<div className="form-group">
		<label>Category</label>
		<AsyncSelect
          loadOptions={promiseOptions}
          defaultOptions
		 onChange={this.handleInputChange}
		  styles={colourStyles}
        />
	</div>
	<div className="form-group" >
		<label>tags</label>
  <CreatableSelect
        isMulti
        onChange={this.handleChange}
		options={colourOptions}
		styles={colourStyles}
      />
	</div>
	<div className="form-group" >
		<label>intro</label>
		<Form.Control as="textarea" rows="3" />
	</div>
	<div className="form-group" >
		<label>Body</label>
		<Form.Control as="textarea" rows="4" />
	</div>
	<button   className="btn btn-primary btn-block">submit</button>
	<p></p>
	</Col>
        <Col  sm></Col>
    </Row>
			);


		return (
            <Row className="ContentRow"> 
            <Col id="content" sm>
              <h2>AddFanfic Page</h2>
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

export default connect(mapStateToProps)(AddFanfic)