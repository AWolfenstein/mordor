import React, { Component } from 'react';
import { Row,Col,Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {Tablebody}  from '../components/table';
import {DeleteAlert} from '../components/alertdelete';
import store from '../store';
import {loadAllUsers,removeUser,banUser,unBanUser,adminUser,unAdminUser} from '../actions/adminActions';
class AdminPage extends Component {

	constructor(){
		super();

		this.state = {
			rowid:"",
			data:[],
					
					columns:[{
						dataField: 'id',
						text: 'ID',
						sort: true
					  }, {
						dataField: 'email',
						text: 'Email',
						sort: true
					  }, {
						dataField: 'banstatus',
						text: 'Ban Status',
						sort: true
					  }, 
					  {
						dataField: 'admin',
						text: 'is Admin?',
						sort: true
					  },
					  {
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
		this.ban=this.ban.bind(this);
		this.unban=this.unban.bind(this);
		this.admin=this.admin.bind(this);
		this.unadmin=this.unadmin.bind(this);
	}
	checkLoginAndAdmin() {
		const admin = localStorage.getItem('admin')
		const banstatus = localStorage.getItem('banstatus')
	
		if  (admin === "true" &&admin !== null ) {
	
		} else if  (banstatus === "false") {
	
		}
		else{
			this.props.history.push("/");
		}
	  }
	componentDidMount(){
		this.checkLoginAndAdmin()
	console.log(this.props)
		store.dispatch(loadAllUsers()).then(()=>{
			let udatedData= [];
			this.props.adminpanel && this.props.adminpanel.map((user)=>{
				udatedData.push({id:user._id,email:user.email,banstatus:user.banstatus,admin:user.admin,updatedAt:user.updatedAt,createdAt:user.createdAt} )
			}
			)
			this.setState({
				data:udatedData
			})
	})
	}
	acceptmodal(){
		if (this.state.rowid !== null){
			store.dispatch(removeUser(this.state.rowid)).then(()=>{
				this.setState({
					show:false
				})
			}).then(()=>{
				window.location.reload();
			})
		}
	}
		ban(){
			if (this.state.rowid !== null){
				store.dispatch(banUser(this.state.rowid)).then(()=>{
					window.location.reload();
				})
			}
		}
			unban(){
				if (this.state.rowid !== null){
					store.dispatch(unBanUser(this.state.rowid)).then(()=>{
						window.location.reload();
					})
				}
			}
				admin(){
					if (this.state.rowid !== null){
						store.dispatch(adminUser(this.state.rowid)).then(()=>{
							window.location.reload();
						})
					}
				}
				unadmin(){
					if (this.state.rowid !== null){
						store.dispatch(unAdminUser(this.state.rowid)).then(()=>{
							window.location.reload();
						})
					}
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
	
handleOnSelect = (row, isSelect) => {
	console.log("row",row.id)
	this.setState({
		rowid:row.id
	})	
	}
	render(){
		const selectRow = {
			mode: 'radio',
			clickToSelect: true,
			onSelect: this.handleOnSelect.bind(this),
		  };
		return (
            <Row className="ContentRow"> 
            <Col id="content" sm>
			<DeleteAlert show={this.state.show}
					   close={this.closemodal}
					   accept={this.acceptmodal}
			  />
              <h2>Admin Page</h2>
              <Tablebody 
			  colums={this.state.columns} 
			  data={this.state.data}
			  selectRow={selectRow}
			  />
              <div >
			  <Button variant="primary" style={{width:"25%"}} onClick={this.ban}>Ban</Button> 
			  <Button variant="primary" style={{width:"25%"}} onClick={this.unban}>unBan</Button>   
			  <Button variant="warning" style={{width:"25%"}} onClick={this.unadmin}>unAdmin</Button>
			  <Button variant="success" style={{width:"25%"}} onClick={this.admin}>Give admin</Button>
			  <Button variant="danger" style={{width:"25%"}}  onClick={this.showmodal} >Delete</Button>
			  </div>
              </Col>
            </Row>
		)
	}
}

const mapStateToProps = state => {
	return {
		adminpanel: state.adminpanel.adminaction
	}
}

export default connect(mapStateToProps)(AdminPage)