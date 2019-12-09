import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigationbar from './componets/Navigationbar';
import Layout from './componets/Layout';
import Footerpage from './componets/footer';
import RegisterModalForm from './componets/RegisterModalForm';
import SignInModalForm from './componets/SignInModalForm';
import Home from './views/Home';
import About from './views/About';
import NotFound from './views/NotFound';
import enBtns from './data/enBtns';
import ruBtns from './data/rusBtns';
import logo from './logo.svg';
import './App.css';
let val;
let lang;
class App extends Component {

  constructor(props) {
    
    super(props);
    this.state = {
      dropdownTitle: val,
      changelang:lang
    }
    this.changedroptitle = this.changedroptitle.bind(this);

  }
  
  changedroptitle(eventkey){
    
    if (eventkey === "1"){
      val ="Русский" ;
      lang ="ru";
    }
    if (eventkey === "2"){
      val ="English";
      lang ="en";
    }
    this.setState({dropdownTitle: val,
      changelang:lang
    });  
  }
componentDidMount(){
  console.log("val "+val);
  if(val=="" || val==null){
    
  val ="English";
      lang ="en"; 
      this.setState({dropdownTitle: val,
        changelang:lang
      });  }
      console.log("val "+val);
}
componentWillUnmount() {
  this.setState({dropdownTitle: val,
    changelang:lang
  });  }


  render() {
  
		return (
			<React.Fragment>
        <Router>
   
          <Navigationbar 
           dropdownTitle={this.state.dropdownTitle}
          droptitle={this.changedroptitle}
        btns={this.state.changelang === "en" ? enBtns : ruBtns}
          />
          <div className="app">
          <Layout>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/sign-in" render={()=><SignInModalForm  btns={this.state.changelang === "en" ? enBtns : ruBtns}/>}  />
            <Route path="/sign-up" render={()=><RegisterModalForm  btns={this.state.changelang === "en"  ? enBtns : ruBtns}/>} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
          </div>
         
        </Router>
        
      </React.Fragment>
      
      );
      }
}

export default App;
