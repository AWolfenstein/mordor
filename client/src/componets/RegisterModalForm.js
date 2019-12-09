import React, { Component } from "react";
import {Row,Col } from 'react-bootstrap';



    const RegisterModalForm=({btns}) =>{
       
            return (
                <Row className="AuthRow">
                <Col sm></Col>
                <Col  sm  className="ContentRow">
                <form>
            <h3>{btns.register}</h3>
    
                    <div className="form-group">
                        <label>{btns.firstname}</label>
                        <input type="text" className="form-control" placeholder={btns.firstname} />
                    </div>
    
                    <div className="form-group">
                        <label>{btns.lastname}</label>
                        <input type="text" className="form-control" placeholder={btns.lastname} />
                    </div>
    
                    <div className="form-group">
                        <label>{btns.email}</label>
                        <input type="email" className="form-control" placeholder={btns.email} />
                    </div>
    
                    <div className="form-group">
                        <label>{btns.password}</label>
                        <input type="password" className="form-control" placeholder={btns.password} />
                    </div>
    
                    <button type="submit" className="btn btn-primary btn-block">{btns.register}</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="/sign-in">{btns.signin}?</a>
                    </p>
                </form>
                </Col>
            <Col sm></Col>
      </Row>
            );
        
    }

    export default RegisterModalForm;

