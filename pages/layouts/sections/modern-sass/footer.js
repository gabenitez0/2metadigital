import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const Footer = () => (
    <React.Fragment>
    <footer className="saas1 footer2">
        <Container>
            <Row>
            <Col lg="4" md="4" sm="12" className="set-first">
                        <div className="logo-sec">
                            <div className="footer-title mobile-title">
                                <h3 className="text-white">Nosotros</h3>
                            </div>
                            <div className="footer-contant">
                                <img alt="" className="img-fluid footer-logo" src="/assets/images/logo/logo4neg.png" />
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
                    <Col lg="2" md="4" sm="12">
                        <div className="footer-title mobile-title">
                            <h3 className="text-white">Inicio</h3>
                        </div>
                        <div className="footer-contant">
                            <h5 className="footer-headings">Inicio</h5>
                            <div>
                                <ul className="footer-lists op-text">
                                    <li>
                                        <a href="/#">Potencia tu Negocio</a>
                                    </li>
                                    <li>
                                        <a href="/#Servicios">Qué Hacemos</a>
                                    </li>
                                    <li>
                                        <a href="/#Proyectos">Proyectos</a>
                                    </li>
                                    <li>
                                        <a href="/#Calificaciones">Calificaciones</a>
                                    </li>
                                    <li>
                                        <a href="/#Contacto">Contacto</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3" md="4" sm="12">
                        <div className="footer-title mobile-title">
                            <h3 className="text-white">Servicios</h3>
                        </div>
                        <div className="footer-contant">
                            <h5 className="footer-headings">Servicios</h5>
                            <div>
                                <ul className="footer-lists op-text">
                                    <li>
                                        <a href="/#Servicios">Desarrollo Web Profesional</a>
                                    </li>
                                    <li>
                                        <a href="/#Servicios">Diseño Gráfico Profesional</a>
                                    </li>
                                    <li>
                                        <a href="/#Servicios">E-Commerces: Tiendas Online</a>
                                    </li>
                                    <li>
                                        <a href="/#Servicios">Copywriting: Redacción Ventas</a>
                                    </li>
                                    <li>
                                        <a href="/#Servicios">Landing Pages: Página Ventas</a>
                                    </li>
                                    <li>
                                        <a href="/#Servicios">Administración y Mantenimiento</a>
                                    </li>
                                    <li>
                                        <a href="/#Servicios">Hosting, Dominios, SSL y DNS</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3" md="4" sm="12">
                        <div className="footer-title mobile-title">
                            <h3 className="text-white">Afiliados</h3>
                        </div>
                        <div className="footer-contant">
                            <h5 className="footer-headings">Afiliados</h5>
                            <div>
                                <ul className="footer-lists op-text">
                                    <li>
                                        <a href="/afiliados">Programa de Afiliados</a>
                                    </li>
                                    <li>
                                        <a href="/afiliados">Trabaja con Nosotros</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
            </Row>
        </Container>
    </footer>
        <div className="saas1 copyright pt-5">
            <Container>
                <Row>
                    <Col md="12">
                        <div>
                            <h6 className="copyright-text text-white text-center">Copyright © 2022 Todos los derechos reservados por <i aria-hidden="true" className="fa fa-heart"></i> 2Meta.Digital
                            </h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </React.Fragment>
)

export default Footer;