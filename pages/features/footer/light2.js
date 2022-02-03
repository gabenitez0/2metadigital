import React from 'react';
import {Container,Row,Col,FormGroup,Input} from 'reactstrap'
const Light2 = () => (
    <footer className="app1 subscribe light" id="contact">
        <Container>
            <Row>
                <Col lg="6" className="offset-lg-3">
                    <div className="title title1">
                        <div className="text-capitalize text-center">
                            <h2>¿Tienes ideas para tu proyecto?</h2>
                        </div>
                        <div>
                            <h3>Hagámoslo realidad ahora mismo!</h3>
                        </div>
                        <div>
                            <h3>Cuéntanos tu META y hagamos que suceda</h3>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <div className="socials-lists m-t-50">
                        <ul className="socials-horizontal justify-content-center">
                            <li>
                                <a href="#"><i aria-hidden="true" className="fa fa-facebook center-content"></i></a>
                            </li>
                            <li>
                                <a href="#"><i aria-hidden="true"
                                    className="fa fa-twitter center-content"></i></a>
                            </li>
                            <li>
                                <a href="#"><i aria-hidden="true"
                                    className="fa fa-google center-content"></i></a>
                            </li>
                            <li>
                                <a href="#"><i aria-hidden="true" className="fa fa-instagram center-content"></i></a>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
)

export default Light2;