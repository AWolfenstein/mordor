import React, { Component } from 'react';
import { Row,Col,Dropdown,Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import AsyncSelect from 'react-select/async';
import AsyncCreatableSelect from 'react-select/async-creatable';
import CreatableSelect from 'react-select/creatable';
//import {colourOptions} from '../data/dataselect'
import {colourStyles} from  '../stylesheets/colour';
import SimpleMDEReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import store from '../store';
import {createFanfic ,loadTags} from "../actions/addFanficActions";
let colourOptions =[];
export const filterColors = (inputValue) => {
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
		let vm= React.createRef();
		this.state = {
			page:'Add Fanfic',
			inputValue: '',
			//colourOptions:[],
			details:{
				title:'',	
			category: '',
			tags: [''],
			description:'',
			fantext:''
			}
		};
	
	}

	updateDetails(event){
		let updateDetails = this.state.details;
       let email= localStorage.getItem('email');
       updateDetails['email'] = email;
        updateDetails[event.target.id] = event.target.value;
		this.setState({
			details: updateDetails   
		});
  }
	
	handleMarkEditChange=text=> {
		let updateDetails = this.state.details;
		updateDetails['fantext']=text; 
		this.setState({
			details: updateDetails 
		})
	  }

	componentWillMount(){
		console.log("props",this.props.match)
		if(this.props.match.params.id !== "newfanfic"){
			this.setState({
				page:'Edit Fanfic'
			})
		}
		store.dispatch(loadTags()).then(()=>{this.props.valuecategories && this.props.valuecategories.map((cat)=>{
			colourOptions.push({value: cat, label: cat} )
			})
		
	})
		
	}
	
	createfanfic(){

		store.dispatch(createFanfic(this.state.details));
	}

	
	handleInputChange = (newValue) => {
		const value = newValue.value;
		let updateDetails = this.state.details;
		updateDetails['category']=value; 
		this.setState({ details: updateDetails  });
		return value;
	  };

	handleChange = (newValue, actionMeta) => {
		let updateDetails = this.state.details;
		let tags =[];
		if(newValue != null){
		for(let i=0;i<newValue.length;i++){
			tags.push(newValue[i].value) 
		}
		updateDetails['tags']=tags;
		this.setState( { details: updateDetails });
	}
	  };
	

	render(){
	const {fantext} =this.state.details;
const body=(
	<Row>  
        <Col  sm></Col> 
         <Col  sm={10}>
	<div className="form-group" >
		<label>Title</label>
		<input onChange={(event)=>{this.updateDetails(event);}} type="text" className="form-control" placeholder="Enter Title" id="title" />
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
		<AsyncCreatableSelect
		isMulti
        cacheOptions
		defaultOptions
		onChange={this.handleChange}
		loadOptions={promiseOptions}
		styles={colourStyles}
      />
 
	</div>
	<div className="form-group" >
		<label>intro</label>
		<Form.Control onChange={(event)=>{this.updateDetails(event);}} id="description" as="textarea" rows="3" />
	</div>
	<div className="form-group"  style={{ width: "100%"}} >
		<label>Body</label>
		<SimpleMDEReact
          className={""}
          value={this.state.details.fantext}
          onChange={this.handleMarkEditChange}
        />

	</div>
	<button onClick={()=>{this.createfanfic();}}  className="btn btn-primary btn-block">submit</button>
	<p></p>
	</Col>
        <Col  sm></Col>
    </Row>
			);


		return (
            <Row className="ContentRow"> 
            <Col id="content" sm>
              <h2>{this.state.page} Page</h2>
              {body}
              
              </Col>
            </Row>
		)
	}
}

const mapStateToProps = state => {
	return {
	valuecategories: state.addfanfic.categories,
	valuetags: state.addfanfic.tags,
	changedlang: state.changelanguge.lang
	}
}

export default connect(mapStateToProps)(AddFanfic)