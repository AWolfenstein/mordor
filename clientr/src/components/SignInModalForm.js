import React from "react";
import {Row,Col } from 'react-bootstrap';

 const SignInModalForm =({updateDetails,login,btns})=>{
    function handleupdateDetails (event){
        updateDetails(event);
      }
      function handlelogin (){
        login();
      }
        return ( <Row className="AuthRow">
        <Col sm></Col>
        <Col  sm  className="ContentRow">
           
                <h3>{btns.signin}</h3>

                <div className="form-group">
                    <label>{btns.email}</label>
                    <input onChange={handleupdateDetails} type="email" id="email" className="form-control" placeholder={btns.email} />
                </div>

                <div className="form-group">
                    <label>{btns.password}</label>
                    <input onChange={handleupdateDetails} type="password" id="password" className="form-control" placeholder={btns.password} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button  onClick={handlelogin} className="btn btn-primary btn-block">{btns.submit}</button>
                <p className="forgot-password text-right">
                    Forgot <a href="/">password?</a>
                </p>
           
            </Col>
            <Col sm></Col>
      </Row>
        );
    
}
export default  SignInModalForm;