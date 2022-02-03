import React from 'react'
import { Container, Row, Col } from 'reactstrap'
const Footer = () => (
    <React.Fragment>
        <footer className="agency footer2 p-b-0">
            <Container>
                <Row>
                    <Col lg="4" md="4" sm="12" className="set-first">
                        <div className="logo-sec">
                            <div className="footer-title mobile-title">
                                <h3 className="text-white">Nosotros</h3>
                            </div>
                            <div className="footer-contant">
                                <img alt="" className="img-fluid footer-logo" src="/assets/images/logo/1.png" />
                                <div className="footer-para">
                                    <h6 className="text-white para-address">Somos Emprendedores que buscan complementarse y mejorar junto a otros emprendedores.</h6>
                                    <h6 className="text-white para-address">Buenos Aires, Argentina</h6>
                                    <h6 className="text-white para-address">2MetaDigital</h6>
                                </div>
                                <ul className="d-d-flex footer-social social">
                                    <li className="footer-social-list">
                                        <a href="#"><i aria-hidden="true" className="fa fa-instagram"></i></a>
                                    </li>
                                    <li className="footer-social-list">
                                        <a href="#"><i aria-hidden="true" className="fa fa-twitter"></i></a>
                                    </li>
                                    <li className="footer-social-list">
                                        <a href="#"><i aria-hidden="true" className="fa fa-google"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3" md="4" sm="12">
                        <div className="footer-title mobile-title">
                            <h3 className="text-white">Nosotros</h3>
                        </div>
                        <div className="footer-contant">
                            <h5 className="footer-headings">Nosotros</h5>
                            <div>
                                <ul className="footer-lists op-text">
                                    <li>
                                        <a href="#Nosotros">Meta</a>
                                    </li>
                                    <li>
                                        <a href="#Servicios">Servicios</a>
                                    </li>
                                    <li>
                                        <a href="#Proyectos">Proyectos</a>
                                    </li>
                                    <li>
                                        <a href="#Calificaciones">Calificaciones</a>
                                    </li>
                                    <li>
                                        <a href="#Contacto">Contacto</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4" md="4" sm="12">
                        <div className="footer-title mobile-title">
                            <h3 className="text-white">Servicios</h3>
                        </div>
                        <div className="footer-contant">
                            <h5 className="footer-headings">Servicios</h5>
                            <div>
                                <ul className="footer-lists op-text">
                                    <li>
                                        <a href="#Servicios">Desarrollo Web Profesional</a>
                                    </li>
                                    <li>
                                        <a href="#Servicios">Diseño Web Profesional</a>
                                    </li>
                                    <li>
                                        <a href="#Servicios">Diseño Gráfico Profesional</a>
                                    </li>
                                    <li>
                                        <a href="#Servicios">Administación de Servidores</a>
                                    </li>
                                    <li>
                                        <a href="#Servicios">Copywriting (Redacción)</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
        <div className="agency copyright pt-5">
            <Container>
                <Row>
                    <Col md="12">
                        <div>
                            <h6 className="copyright-text text-white text-center">Copyright © 2022 Todos los derechos reservados por <i aria-hidden="true" className="fa fa-heart"></i> 2MetaDigital
                            </h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </React.Fragment>
)

export default Footer;