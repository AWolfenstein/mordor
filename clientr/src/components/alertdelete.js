import React, { useState  } from 'react';
import { Button,Modal } from 'react-bootstrap';

export function DeleteAlert({show,close,accept}) {
	//onst [show, setShow] = useState(false);
	function handleAccept(){
        accept();
      }
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
			<Button variant="primary" onClick={handleAccept}>
			  Yes
			</Button>
		  </Modal.Footer>
		</Modal>
	  </>
	);
  }