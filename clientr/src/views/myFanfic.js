import React, { Component,useState  } from 'react';
import { Row,Col,Button,Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import {Tablebody}  from '../components/table';
import {DeleteAlert} from '../components/alertdelete';
import {loadUserFanfic,deleteFanfic} from '../actions/myFanficsActions';
import store from '../store';
import enBtns from '../data/enBtns';
import ruBtns from '../data/rusBtns';
let  btns=[];
class MyFanfic extends Component {

	constructor(){
		super();

		this.state = {
			rowid:"",
			data:[	],
					
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
						dataField: 'createdAt',
						text: ' Create',
						sort: true
					  }, {
						dataField: 'updatedAt',
						text: 'update',
						sort: true
					  }],
					  show:false
		};
		this.showmodal=this.showmodal.bind(this);
		this.closemodal=this.closemodal.bind(this);
		this.acceptmodal=this.acceptmodal.bind(this);
	}

	componentDidMount(){
		console.log(this.props.params)
		store.dispatch(loadUserFanfic(this.props.match.params.email)).then(()=>{
			let udatedData= [];
			this.props.myfanfics && this.props.myfanfics.map((fanfic)=>{
				udatedData.push({id:fanfic._id,title:fanfic.title,likes:'2',updatedAt:fanfic.updatedAt,createdAt:fanfic.createdAt} )
			}
			)
			this.setState({
				data:udatedData
			})
	})
}
	closemodal(){
		this.setState({
			show:false
		})
	}
acceptmodal(){
if (this.state.rowid !== null){
	store.dispatch(deleteFanfic({id:this.state.rowid})).then(()=>{
		this.setState({
			show:false
		})
	}).then(()=>{
		window.location.reload();
	})
}
}
showmodal(){
	this.setState({
		show:true
	})
}
handleOnSelect = (row, isSelect) => {
console.log("row",row.id)
this.setState({
	rowid:row.id
})	
}


	render(){
		btns= this.props.changedlang === "en" ? enBtns : ruBtns 
		const selectRow = {
			mode: 'radio',
			clickToSelect: true,
			onSelect: this.handleOnSelect.bind(this),
		  };
		return (
			<Row className="ContentRow"> 
            <Col id="content" sm>
            
		<h2>{btns.myfanfic}</h2>
			  <DeleteAlert show={this.state.show}
					   close={this.closemodal}
					   accept={this.acceptmodal}
			  />
			  <Tablebody 
			  colums={this.state.columns} 
			  data={this.state.data}
			  selectRow={selectRow}
			  />
			  <div >
			  <Button variant="primary" style={{width:"30%"}} href={`/read/${this.state.rowid}`}>{btns.read}</Button>
			  <Button variant="warning" style={{width:"30%"}} href={`/addfanfics/${localStorage.getItem('email') || null}/${this.state.rowid}`}>{btns.edit}</Button>
			  <Button variant="danger" style={{width:"30%"}} onClick={this.showmodal}  >{btns.delete}</Button>
			  </div>
              </Col>
            </Row>
		)
	}
}

const mapStateToProps = state => {
	return {
	myfanfics: state.myfanfics.fanfics,
	changedlang: state.changelanguge.lang,
	}
}

export default connect(mapStateToProps)(MyFanfic)