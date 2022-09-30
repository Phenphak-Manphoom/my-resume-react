import React from 'react'
import "./contact.css"
import { Container,Row,Col } from 'reactstrap'

const Contact = () => {
  return (
    <section id="contact">
        <Container>
            <Row>
                <Col lg="12" className='mb-5'>
                    <h2>Contact Me</h2>
                </Col>
                <Col lg="6" md="6">
                    <div className="contact-container d-flex align-items-center gap-4">
                        <div className="single_info-box w-50">
                            <h6>Phone</h6>
                            <p>08 xxxx xxxx</p>
                        </div>
                        <div className="single_info-box w-50">
                            <h6>Email</h6>
                            <p>tt@test.com</p>
                        </div>
                      
                    </div>
                  
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact