import React from 'react';
import { Modal,Row,Col} from 'react-bootstrap';
import { Slide, Zoom } from "react-awesome-reveal";

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='body-modal'
        
      >
        <Modal.Body  style={{padding:"0px"}}>
        <Row>
                  <Col sm={6}>
            <Slide direction='left' duration={600}>
                      <img width="100%" src={props.Woa.Url} alt='' />
                </Slide> 
                  </Col>
                  <Col sm={6}>
            <Slide direction='right' duration={600}>

                        <h1 className='modal-name-code'>{props.Woa.Name} {props.Woa.Id}</h1>
               </Slide>
                  </Col>
              </Row>  
        </Modal.Body>
        
      </Modal>
    );
  }

  export default MyVerticallyCenteredModal;