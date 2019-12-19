import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Navigationbar from './components/Navigationbar';
import Layout from './components/Layout';

import RegisterModalForm from './components/RegisterModalForm';
import SignInModalForm from './components/SignInModalForm';
import Home from './views/Home';
import About from './views/About';
import Profile from './views/Profile';
import MyFanfic from './views/myFanfic';
import AddFanfic from './views/addFanfic';
import AdminPage from './views/adminpage';
import Read from './views/Read';
import NotFound from './views/NotFound';
import enBtns from './data/enBtns';
import ruBtns from './data/rusBtns';
import { connect } from 'react-redux';
import store from './store';

import { saveState} from './localStorage';
import { defaultFunction } from './actions';
import { changelangFunction } from './actions/changelang';
import { submitRegister,submitLogin,logoutUser} from './actions/authActions';
export const history = createBrowserHistory();
class App extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      details:{},
      isloggin: false
    };
    this.changedroptitle = this.changedroptitle.bind(this);
    this.updateDetails = this.updateDetails.bind(this);
    this.register = this.register.bind(this);
    this.login=this.login.bind(this);
    this.logout=this.logout.bind(this);
    
  }
  
  updateDetails(event){
		let updateDetails = this.state.details;

		updateDetails[event.target.id] = event.target.value;
		this.setState({
			details: updateDetails   
		});
  }
  checkloggedin(){
   if( this.props.loggedIn === true){
    this.setState({
      isloggin: true 
		});
   }
   else{
    this.setState({
      isloggin: false
		});
   } 
  }
  login(){
    

    store.dispatch(submitLogin(this.state.details)).then( () => {
      if(this.props.loggedIn === true){
        history.push("/");
        window.location.reload();
      } 
      else{
        history.push("/sign-in");
        window.location.reload();
      }
    })
  
  }
	register(){
    store.dispatch(submitRegister(this.state.details)).then( () => {
      if(this.props.loggedIn === true){
        history.push("/");
        window.location.reload();
      } 
      else{
        history.push("/sign-up");
        window.location.reload();
      }
    })
  }
  logout(){
    store.dispatch(logoutUser());
    
    window.location.reload();
  }	
 



  changedroptitle(eventkey){
      let title;
      let lang;
         if (eventkey === "1"){
            title ="Русский" ;
            lang="ru";
            store.dispatch(changelangFunction(lang,title));
            saveState({
              changelanguge: store.getState().changelanguge
             });
            console.log(store.getState().changelanguge);
            }
           if (eventkey === "2"){
            title ="English";
            lang ="en";
            store.dispatch(changelangFunction("en","English"));
            saveState({
                changelanguge: store.getState().changelanguge
              });
            console.log(store.getState().changelanguge);
            }
  }
  componentWillMount() {
    this.checkloggedin();
    
 


  }

  render() {
    if (this.props.changedlang === null||this.props.changedlang === "") {
     this.props.history.push('/')
    }

    return (
      <React.Fragment>
      <Router history={history}>
        <Navigationbar 
          dropdownTitle={this.props.changedTittlelang}
          droptitle={this.changedroptitle}
          autcheck={this.state.isloggin}
          username ={this.props.username}
          btns={this.props.changedlang === "en" ? enBtns : ruBtns}
          logout={this.logout}
        />
        <div className="app">
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/read" render={()=><Read username={this.props.username}
                                                />}  />
            <Route path="/profile" render={()=><Profile  
                                               username={this.props.username}
                                               btns={this.props.changedlang === "en" ? enBtns : ruBtns}
                                               />}  />
            <Route path="/admin" render={()=><AdminPage  
                                                />}  />
            <Route path="/myfanfics" render={()=><MyFanfic  
                                                />}  />
            <Route path="/addfanfics" render={()=><AddFanfic  
                                                />}  />
                                                                                      
            <Route path="/sign-in" render={()=><SignInModalForm  
                                                                  btns={this.props.changedlang === "en" ? enBtns : ruBtns}
                                                                  updateDetails={this.updateDetails}
                                                                  login={this.login}
                                                                 
                                                />}  />
            <Route path="/sign-up" render={()=><RegisterModalForm  
                                                                  btns={this.props.changedlang === "en"  ? enBtns : ruBtns}
                                                                  updateDetails={this.updateDetails}
                                                                  register={this.register}
                                                />} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
        </div>
      </Router>
    </React.Fragment>
    );
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    loggedIn: state.auth.loggedIn,
    	username: state.auth.username,
    changedlang: state.changelanguge.lang,
    changedTittlelang: state.changelanguge.title
  };
}

export default connect(mapStateToProps, { changelangFunction ,defaultFunction})(App);
