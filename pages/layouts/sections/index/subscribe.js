import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const Subscribs = () => (
    <footer className="app1 subscribe bg">
        <Container>
            <Row>
                <Col lg="6" className="offset-lg-3">
                    <div className="title title1">
                        <div className="main-title">
                            <h2 style={{lineHeight: 1.2}}>Queremos trabajar con vos y potenciar nuestros resultados juntos</h2>
                        </div>
                        <div className="sub-title">
                            <p className="para">Somos Emprendedores Que Se Potencian Junto A Otros Emprendedores Para Alcanzar Todas Las Metas Trabajando En Equipo.</p>
                        </div>
                    </div>
                </Col>
            </Row>
            {/*<Row>
                <Col lg="8"  className="offset-lg-2">
                    <div className="subscribe">
                        <div className="center-content">
                            <div className="form-group">
                                <div className="d-flex">
                                    <input className="form-control " maxLength="45" name="email"
                                        placeholder="Please Enter Your Email Address" type="email" />
                                    <div className="button-primary">
                                        <button className=" btn btn-default btn-gradient text-white text-uppercase"
                                            type="submit">subscribe
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <div className="socials-lists m-t-20">
                        <ul className="socials-horizontal justify-content-center">
                            <li>
                                <a href="https://www.instagram.com/2metadigital/" target="_blank">
                                    <i aria-hidden="true" className="fa fa-instagram center-content"></i>
                                </a>
                            </li>
                            <li>
                                <a  href="https://www.facebook.com/2metadigital/" target="_blank">
                                    <i aria-hidden="true" className="fa fa-facebook center-content"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>*/}
        </Container>
    </footer>
)


export default Subscribs;