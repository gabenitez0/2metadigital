import React from 'react';
import {Container,Row,Col,FormGroup,Input} from 'reactstrap'
const Footer = () => (
    <footer className="saas2 footer2" id="contact">
        <Container className="footer-padding">
            <Row>
                <Col lg="4" md="6" sm="12">
                    <div className="logo-sec">
                        <div className="footer-title mobile-title p-t-0">
                            <h3 className="text-white">Nosotros</h3>
                        </div>
                        <div className="footer-contant">
                            <img alt="" className="img-fluid footer-logo" loading="lazy" src="/assets/images/logo/logo4neg.png" />
                            <div className="footer-para">
                                <h6 className="text-white para-address">Somos emprendedores que se potencian junto a otros emprendedores para alcanzar todas las Metas trabajando en equipo.</h6>
                                <h6 className="text-white para-address">Buenos Aires, Argentina</h6>
                                <h6 className="text-white para-address">2MetaDigital</h6>
                            </div>
                            <ul className="d-d-flex footer-social social">
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

                <Col lg="2" md="6" sm="12">
                    <div className="footer-title mobile-title">
                        <h3 className="text-white">Navegaci??n</h3>
                    </div>
                    <div className="footer-contant">
                        <h5 className="footer-headings">Navegaci??n</h5>
                        <div>
                            <ul className="footer-lists">
                                <li>
                                    <a href="#">Inicio</a>
                                </li>
                                <li>
                                    <a href="#calidad">Alta Calidad</a>
                                </li>
                                <li>
                                    <a href="#beneficios">Beneficios</a>
                                </li>
                                <li>
                                    <a href="#funciones">Funciones extra</a>
                                </li>
                                <li>
                                    <a href="#proyectos">Nuestros Dise??os</a>
                                </li>
                                <li>
                                    <a href="#tiempo">No pierdas tiempo</a>
                                </li>
                                <li>
                                    <a href="#contacto">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>

                <Col lg="3" md="6" sm="12">
                    <div className="footer-title mobile-title">
                        <h3 className="text-white">Servicios</h3>
                    </div>
                    <div className="footer-contant">
                        <h5 className="footer-headings">Servicios</h5>
                        <div>
                            <ul className="footer-lists">
                                <li>
                                    <a href="#!">Desarrollo Web Profesional</a>
                                </li>
                                <li>
                                    <a href="#!">Dise??o Gr??fico Profesional</a>
                                </li>
                                <li>
                                    <a href="#!">E-Commerces: Tiendas Online</a>
                                </li>
                                <li>
                                    <a href="#!">Copywriting: Redacci??n Ventas</a>
                                </li>
                                <li>
                                    <a href="#!">Landing Pages: P??gina Ventas</a>
                                </li>
                                <li>
                                    <a href="#!">Administraci??n y Mantenimiento</a>
                                </li>
                                <li>
                                    <a href="#!">Hosting, Dominios, SSL y DNS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col lg="3" md="6" sm="12">
                    <div className="footer-title mobile-title">
                        <h3 className="text-white">Informaci??n</h3>
                    </div>
                    <div className="footer-contant">
                        <h5 className="footer-headings">Informaci??n</h5>
                        <div>
                            <ul className="footer-lists contacts">
                                <li>
                                    <i aria-hidden="true" className="fa fa-map-marker"></i>
                                    Saenz Pe??a, Buenos Aires, Argentina
                                </li>
                                <li>
                                    <i aria-hidden="true" className="fa fa-phone m-r-15"></i>(+54) 1122505698
                                </li>
                                <li><i aria-hidden="true" className="fa fa-envelope m-r-15"></i>gabriel@2meta.digital
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
)

export default Footer;