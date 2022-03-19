 import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
 
 const ReactModal = (props) => {
   const {title,image,price,description} = props.product;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   return (
    <>
   <Button variant="primary" onClick={handleShow}>
     Details
   </Button>

   <Modal show={show} onHide={handleClose}>
     <Modal.Header closeButton>
       <Modal.Title>{title}</Modal.Title>
     </Modal.Header>
     <img className='w-50 m-auto' src={image} alt="" />
     <Modal.Body> <h2>{price}$</h2> </Modal.Body>
     <Modal.Body>{description}</Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleClose}>
         Close
       </Button>
       <Button variant="primary" onClick={handleClose}>
         Save Changes
       </Button>
     </Modal.Footer>
   </Modal>
 </>
   );
 };
 
 export default ReactModal;