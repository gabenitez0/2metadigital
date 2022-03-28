import React from 'react'
import {Container,Row,Col,FormGroup,Input} from 'reactstrap'
const Footer = () => (

    <footer className="app2 bg footer2 p-0">
        {/*<div className="subscribe subscribe-2">
            <Container>
                <Row>
                    <Col lg="8"  md="10"  className="offset-lg-2 offset-md-1">
                        <div className="subscribe">
                            <div className="center-content">
                                <FormGroup className="m-0">
                                    <div className="flex">
                                        <i aria-hidden="true" className="fa fa-envelope icon"></i>
                                        <Input className="form-control text-capitalize" name="email"
                                              placeholder="example@gmail.com" type="email" />
                                        <div className="button-primary">
                                            <button className=" btn btn-default btn-gradient text-white text-capitalize"
                                                    type="submit">
                                                subscribe now
                                            </button>
                                        </div>
                                    </div>
                                </FormGroup>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>*/}
        <section style={{paddingTop:125}}>
            <Container>
                <Row>
                    <Col lg="3" md="6" sm="12">
                        <div className="logo-sec">
                            <div className="footer-title mobile-title p-t-0">
                                <h3 className="text-white">Nosotros</h3>
                            </div>
                            <div className="footer-contant">
                                <img alt="" className="img-fluid footer-logo" src="/assets/images/logo/logo4neg.png" />
                                <div className="footer-para">
                                    <p className="text-white">Somos emprendedores que se potencian junto a otros emprendedores para alcanzar todas las Metas trabajando en equipo.</p>
                                </div>
                                <ul className="d-flex footer-social social">
                                    <li className="footer-social-list">
                                        <a href="https://www.facebook.com/2metadigital/" target="_blank"><i aria-hidden="true" className="fa fa-facebook"></i></a>
                                    </li>
                                    <li className="footer-social-list">
                                        <a href="https://www.instagram.com/2metadigital/" target="_blank"><i aria-hidden="true" className="fa fa-instagram"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg="2" md="6" sm="12">
                        <div className="footer-title mobile-title">
                            <h3 className="text-white">Navegación</h3>
                        </div>
                        <div className="footer-contant">
                            <h5 className="footer-headings">Navegación</h5>
                            <div>
                                <ul className="footer-lists">
                                    <li>
                                        <a href="#">Inicio</a>
                                    </li>
                                    <li>
                                        <a href="#beneficios">Beneficios</a>
                                    </li>
                                    <li>
                                        <a href="#caracteristicas">Características</a>
                                    </li>
                                    <li>
                                        <a href="#proyectos">Proyectos</a>
                                    </li>
                                    <li>
                                        <a href="#feedback">Feedback</a>
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
                                        <a href="#!">Diseño Gráfico Profesional</a>
                                    </li>
                                    <li>
                                        <a href="#!">E-Commerces: Tiendas Online</a>
                                    </li>
                                    <li>
                                        <a href="#!">Copywriting: Redacción Ventas</a>
                                    </li>
                                    <li>
                                        <a href="#!">Landing Pages: Página Ventas</a>
                                    </li>
                                    <li>
                                        <a href="#!">Administración y Mantenimiento</a>
                                    </li>
                                    <li>
                                        <a href="#!">Hosting, Dominios, SSL y DNS</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4" md="6" sm="12">
                        <div className="footer-title mobile-title">
                            <h3 className="text-white">Información</h3>
                        </div>
                        <div className="footer-contant">
                            <h5 className="footer-headings">Información</h5>
                            <div>
                                <ul className="footer-lists contacts">
                                    <li>
                                        <i aria-hidden="true" className="fa fa-map-marker"></i>
                                        Saenz Peña, Buenos Aires, Argentina
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
        </section>
    </footer>

)


export default Footer;