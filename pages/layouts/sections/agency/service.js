import React from 'react'
import {Container,Row,Col} from 'reactstrap'
const Service = () => (
    <section className="agency format service-bg" id="Servicios">
        <Container>
            <Row>
                <Col md="4"  className="offset-lg-1">
                    <div className="center-text">
                        <div className="format-container">
                            <h6 className="borders-before text-uppercase">
                                <span>Nuestros Servicios</span>
                            </h6>
                            <div className="format-head-text">
                                <h2 className="about-font-header">¿Cómo Te Ayudamos <span className="block-span">
                                                A Mejorar Tu Negocio?</span></h2>
                            </div>
                            <div className="format-sub-text">
                                <p className="about-para">Optimizamos el proceso de venta mediante servicios que mejoran la imagen de tu marca y accesibilidad en internet.</p>
                            </div>
                            <a className=" btn btn-default btn-gradient" href="/#Proyectos">Ver Ejemplos</a>
                        </div>
                    </div>
                </Col>
                <Col lg="7" md="8">
                    <Row>
                        <Col sm="4"  className="center-content unset-height">
                            <ul className="icon-collection" data-aos="fade-left" data-aos-duration="500">
                                <li className="about-icon">
                                    <a className="center-content" href="#Servicios">
                                        <img alt="" src="/assets/images/agency/service/web-development2.png" />
                                        <h5>Desarrollo Web Profesional</h5>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col sm="4"  className="center-content unset-height">
                            <ul className="icon-collection" data-aos="fade-left" data-aos-duration="2000">
                                <li className="about-icon">
                                    <a className="center-content" href="#Servicios">
                                        <img alt="" src="/assets/images/agency/service/graphic-design.png" />
                                        <h5>Diseño Gráfico Profesional</h5>
                                    </a>
                                </li>
                                <li className="about-icon">
                                    <a className="center-content" href="#Servicios">
                                        <img alt="" src="/assets/images/agency/service/ventas3.png" />
                                        <h5>Copywriting:<br/>Enfocado en Ventas</h5>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col sm="4"  className="center-content unset-height">
                            <ul className="icon-collection" data-aos="fade-left" data-aos-duration="3000">
                                <li className="about-icon">
                                    <a className="center-content" href="#Servicios">
                                        <img alt="" src="/assets/images/agency/service/ecommerce2.png" />
                                        <h5>E-Commerce<br/>Tienda Online</h5>
                                    </a>
                                </li>
                                <li className="about-icon">
                                    <a className="center-content" href="#Servicios">
                                        <img alt="" src="/assets/images/agency/service/landing.png" />
                                        <h5>Landing Page<br/> Página Simple<br/>con Acción</h5>
                                    </a>
                                </li>
                                <li className="about-icon">
                                    <a className="center-content" href="#Servicios">
                                        <img alt="" src="/assets/images/agency/service/server.png" />
                                        <h5>Gestión Hosting, Dominios, SSL y DNS.</h5>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
)

export default Service;