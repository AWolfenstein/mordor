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
import {createFanfic ,loadTags,loadToEditFanfic,editedFanfic} from "../actions/addFanficActions";
import enBtns from '../data/enBtns';
import ruBtns from '../data/rusBtns';
let  btns=[];
let colourOptions =[];
let tagsOptions =[];
export const filterColors2 = (inputValue) => {
	return tagsOptions.filter(i =>
	  i.label.toLowerCase().includes(inputValue.toLowerCase())
	);
  };
  
  export  const promiseOptions2 = inputValue =>
	new Promise(resolve => {
	  setTimeout(() => {
		resolve(filterColors2(inputValue));
	  }, 1000);
	});


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
			page:0,
			inputValue: '',
			//colourOptions:[],
			details:{
				email:'',
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
	  checkLoginAndAdmin() {
		const banstatus = localStorage.getItem('banstatus')
		if  (banstatus === "false" ) {
		}
		else{
			this.props.history.push("/");
		}
	  }
	componentWillMount(){
		this.checkLoginAndAdmin()
		let updateDetails = this.state.details;
       let email= localStorage.getItem('email');
	   updateDetails['email'] = email;
	   this.setState({
		details: updateDetails   
	});

		if(this.props.match.params.id !== "newfanfic"){
			store.dispatch(loadToEditFanfic(this.props.match.params.id)).then(()=>{
				let updateDetails = this.state.details;
				updateDetails['title']=this.props.fanfictoedit.title; 
				updateDetails['category']=this.props.fanfictoedit.category; 
				updateDetails['tags']=this.props.fanfictoedit.tags;
				updateDetails['description']=this.props.fanfictoedit.description;
				updateDetails['fantext']=this.props.fanfictoedit.fantext; 
				console.log(updateDetails)
				this.setState({
					details: updateDetails  
					
				})	
			})
			console.log(this.state.details) 
			this.setState({
				page: 1
			})
		}
		store.dispatch(loadTags())
		.then(()=>{this.props.valuecategories && this.props.valuecategories.map((cat)=>{
			colourOptions.push({value: cat, label: cat} )
			})
		})
		.then(()=>{this.props.valuetags && this.props.valuetags.map((cat)=>{
				tagsOptions.push({value: cat, label: cat} )
				})
		
	})
		
	}
	
	createfanfic(){

		store.dispatch(createFanfic(this.state.details));
	}
	udpdatefanfic(){

		store.dispatch(editedFanfic(this.props.match.params.id,this.state.details));
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
		btns= this.props.changedlang === "en" ? enBtns : ruBtns 
	const {fantext} =this.state.details;
const body=(
	<Row>  
        <Col  sm></Col> 
         <Col  sm={10}>
	<div className="form-group" >
<label>{btns.title}</label>
		<input value={this.state.page=== 1 ?this.state.details.title:''} onChange={(event)=>{this.updateDetails(event);}} type="text" className="form-control" placeholder="Enter Title" id="title" />
	</div>
	<div className="form-group">
		<label>{btns.category}:</label>
		<AsyncSelect
          loadOptions={promiseOptions}
		  defaultOptions
		  value={this.state.page=== 1 ?{ value:this.state.details.category,label:this.state.details.category}:''}
		 onChange={this.handleInputChange}
		  styles={colourStyles}
        />
	</div>
	<div className="form-group" >
		<label>{btns.tags}:</label>
		<AsyncCreatableSelect
		isMulti
        cacheOptions
		defaultOptions
		value={this.state.page=== 1 ?this.state.details.tags.map((tag)=>{return{ value:tag,label:tag}}):''}
		onChange={this.handleChange}
		loadOptions={promiseOptions2}
		styles={colourStyles}
      />
 
	</div>
	<div className="form-group" >
		<label>{btns.description}:</label>
		<Form.Control value={this.state.page=== 1 ?this.state.details.description:''} onChange={(event)=>{this.updateDetails(event);}} id="description" as="textarea" rows="3" />
	</div>
	<div className="form-group"  style={{ width: "100%"}} >
		<label>{btns.text}:</label>
		<SimpleMDEReact
          className={""}
          value={this.state.details.fantext}
          onChange={this.handleMarkEditChange}
        />

	</div>
	<button onClick={()=>{ this.state.page=== 1 ? this.udpdatefanfic() : this.createfanfic()}}  className="btn btn-primary btn-block">{btns.submit}</button>
	<p></p>
	</Col>
        <Col  sm></Col>
    </Row>
			);


		return (
            <Row className="ContentRow"> 
            <Col id="content" sm>
              <h2>{this.state.page=== 1 ? btns.editfanfic : btns.addfanfic} </h2>
              {body}
              
              </Col>
            </Row>
		)
	}
}

const mapStateToProps = state => {
	return {
		fanfictoedit: state.addfanfic.fanfic,
	valuecategories: state.addfanfic.categories,
	valuetags: state.addfanfic.tags,
	changedlang: state.changelanguge.lang
	}
}

export default connect(mapStateToProps)(AddFanfic)