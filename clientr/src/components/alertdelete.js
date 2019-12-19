import React, { useState  } from 'react';
import { Button,Modal } from 'react-bootstrap';

export function DeleteAlert({show,close}) {
	//onst [show, setShow] = useState(false);
  
	 function handleClose (){
        close();
      }

console.log(show)
  
	return (
	  <>
		<Modal show={show} onHide={handleClose}>
		  <Modal.Header closeButton>
			<Modal.Title>Warrning!</Modal.Title>
		  </Modal.Header>
		  <Modal.Body>Are you shure delete this?</Modal.Body>
		  <Modal.Footer>
			<Button variant="secondary" onClick={handleClose}>
			  Close
			</Button>
			<Button variant="primary" onClick={handleClose}>
			  Yes
			</Button>
		  </Modal.Footer>
		</Modal>
	  </>
	);
  }