import React  from "react";
import {Row,Col } from 'react-bootstrap';



    const RegisterModalForm=({updateDetails,register,btns}) =>{
        function handleupdateDetails (event){
            updateDetails(event);
          }
          function handleregister (){
            register();
          }
            return (
                <Row className="AuthRow">
                <Col sm></Col>
                <Col  sm  className="ContentRow">
         
            <h3>{btns.register}</h3>
    
                    <div className="form-group">
                        <label>{btns.firstname}</label>
                        <input onChange={handleupdateDetails} type="text" id="fname" className="form-control" placeholder={btns.firstname} />
                    </div>
    
                    <div className="form-group">
                        <label>{btns.lastname}</label>
                        <input onChange={handleupdateDetails} type="text" id="lname" className="form-control" placeholder={btns.lastname} />
                    </div>
    
                    <div className="form-group">
                        <label>{btns.email}</label>
                        <input onChange={handleupdateDetails} type="email" id="email" className="form-control" placeholder={btns.email} />
                    </div>
    
                    <div className="form-group">
                        <label>{btns.password}</label>
                        <input onChange={handleupdateDetails} type="password" id="password" className="form-control" placeholder={btns.password} />
                    </div>
    
                    <button onClick={handleregister} className="btn btn-primary btn-block">{btns.register}</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="/sign-in">{btns.signin}?</a>
                    </p>
                
                </Col>
            <Col sm></Col>
      </Row>
            );
        
    }

    export default RegisterModalForm;

