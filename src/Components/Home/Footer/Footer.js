import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
       
        <div>
             <h4 style={{color:'#2d2d2d',fontSize:'34px', fontWeight:'600'}} className='font-weight-bold text-center'>
                    CONTACT US
                </h4>
            <Container className='footer-container'>
                <Row xs={12}>
                    <Col md={6} className='footer'>
                        <h1  style={{ fontWeight:'600'}} >Contact Us To get professional service</h1>
                        <small style={{ marginTop:'20px',  fontWeight:'300'}}>
                            We will provide you with very good quality service because we have trained technologists
                        </small>
                    </Col>
                    <Col md={6}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Your email address" />
                            
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Your name / Company's name" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control className='footer-textarea' as="textarea" rows="3" placeholder='Your message'/>
                        </Form.Group>
                        <Button variant="dark" type="submit">
                            Submit
                        </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <small className='d-block text-center mt-5'>Copyright Kawsarly.com {new Date().getFullYear()}</small>
        </div>
    );
};

export default Footer;