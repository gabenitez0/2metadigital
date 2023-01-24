import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const Footer = () => (
    <React.Fragment>
    <footer className="saas1 footer2" id="nosotros">
        <Container>
            <Row>
                <Col lg="4" md="8" sm="12" className="set-first footer-nosotros">
                    <div className="logo-sec">
                        {/*<div className="footer-title mobile-title">
                            <h3 className="text-white">Nosotros</h3>
                        </div>*/}
                        <div className="footer-contant">
                            <img alt="" className="img-fluid footer-logo" src="/assets/images/logo/logo5.png" />
                            <div className="footer-para">
                                <h6 className="text-white para-address">Somos el departamento especializado en Páginas Web de la Agencia de Marketing MetaDigital</h6>
                                <h6 className="text-white para-address"><i class="fa fa-map-marker mr-2" aria-hidden="true"></i> Buenos Aires, Argentina</h6>
                            </div>
                            <ul className="d-d-flex footer-social social">
                                <li className="footer-social-list">
                                    <a href="https://www.instagram.com/paginasweb_arg/" target="_blank"><i aria-hidden="true" className="fa fa-instagram"></i></a>
                                </li>
                                <li className="footer-social-list">
                                    <a href="https://www.instagram.com/2metadigital/" target="_blank"><i aria-hidden="true" className="fa fa-instagram"></i></a>
                                </li>
                                <li className="footer-social-list">
                                    <a href="https://www.facebook.com/2metadigital/" target="_blank"><i aria-hidden="true" className="fa fa-facebook"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col lg="1" md="4" sm="12"></Col>
                <Col lg="2" md="4" sm="12">
                    <div className="footer-title mobile-title">
                        <h3 className="text-white">Inicio</h3>
                    </div>
                    <div className="footer-contant">
                        <h5 className="footer-headings">Inicio</h5>
                        <div>
                            <ul className="footer-lists op-text">
                                <li>
                                    <a href="/#paginasweb">Cómo trabajamos</a>
                                </li>
                                <li>
                                    <a href="/#casosexito">Casos de éxito</a>
                                </li>
                                <li>
                                    <a href="/#contacto">Lista de precios</a>
                                </li>
                                <li>
                                    <a href="/#contacto">Contacto</a>
                                </li>
                                <li>
                                    <a href="/#nosotros">Sobre nosotros</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col lg="2" md="4" sm="12">
                    <div className="footer-title mobile-title">
                        <h3 className="text-white">Servicios Web</h3>
                    </div>
                    <div className="footer-contant">
                        <h5 className="footer-headings">Servicios Web</h5>
                        <div>
                            <ul className="footer-lists op-text">
                                <li>
                                    <a href="/#!">Web Ecommerce</a>
                                </li>
                                <li>
                                    <a href="/#!">Web Landing Page</a>
                                </li>
                                <li>
                                    <a href="/#!">Web Institucional</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col lg="3" md="4" sm="12">
                    <div className="footer-title mobile-title">
                        <h3 className="text-white">Servicios Adicionales</h3>
                    </div>
                    <div className="footer-contant">
                        <h5 className="footer-headings">Servicios Adicionales</h5>
                        <div>
                            <ul className="footer-lists op-text">
                                <li>
                                    <a href="/#!">Generación de Contenido Web</a>
                                </li>
                                <li>
                                    <a href="/#!">Posicionamiento en Google</a>
                                </li>
                                <li>
                                    <a href="/#!">Publicidad en Google</a>
                                </li>
                                <li>
                                    <a href="/#!">Hosting, Dominio y Mantenimiento</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
        <div className="saas1 copyright">
            <Container>
                <Row>
                    <Col md="12">
                        <div>
                            <h6 className="copyright-text text-white text-center">Copyright © 2023 <i aria-hidden="true" className="fa fa-heart"></i> Derechos reservados por  <a href="https://metadigital.com.ar" target="_blank">MetaDigital</a> y <a href="https://paginasweb.metadigital.com.ar" target="_blank">PaginasWebArg</a>
                            </h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </React.Fragment>
)

export default Footer;
