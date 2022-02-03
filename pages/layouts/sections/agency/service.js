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
                                <h2 className="about-font-header">Podemos ayudarte <span className="block-span">
                                                a Mejorar Tu Proyecto</span></h2>
                            </div>
                            <div className="format-sub-text">
                                <p className="about-para">Potenciemos tu negocio dando una excelente impresión, una imagen profesional y textos precisos.</p>
                            </div>
                            <a className=" btn btn-default btn-gradient" href="/#Proyectos">Ver Proyectos</a>
                        </div>
                    </div>
                </Col>
                <Col lg="7" md="8">
                    <Row>
                        <Col sm="4"  className="center-content unset-height">
                            <ul className="icon-collection" data-aos="fade-left" data-aos-duration="500">
                                <li className="about-icon">
                                    <a className="center-content" href="#Servicios">
                                        <img alt="" src="/assets/images/agency/service/web-development.png" />
                                        <h5>Desarrollo Web Profesional</h5>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col sm="4"  className="center-content unset-height">
                            <ul className="icon-collection" data-aos="fade-left" data-aos-duration="2000">
                                <li className="about-icon">
                                    <a className="center-content" href="#Servicios">
                                        <img alt="" src="/assets/images/agency/service/web-design.png" />
                                        <h5>Diseño Web Profesional</h5>
                                    </a>
                                </li>
                                <li className="about-icon">
                                    <a className="center-content" href="#Servicios">
                                        <img alt="" src="/assets/images/agency/service/graphic-design.png" />
                                        <h5>Diseño Gráfico Profesional</h5>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col sm="4"  className="center-content unset-height">
                            <ul className="icon-collection" data-aos="fade-left" data-aos-duration="3000">
                                <li className="about-icon">
                                    <a className="center-content" href="#Servicios">
                                        <img alt="" src="/assets/images/agency/service/sysadmin.png" />
                                        <h5>Administración Servidores</h5>
                                    </a>
                                </li>
                                <li className="about-icon">
                                    <a className="center-content" href="#Servicios">
                                        <img alt="" src="/assets/images/agency/service/copywriting.png" />
                                        <h5>Redacción persuasiva</h5>
                                    </a>
                                </li>
                                <li className="about-icon">
                                    <a className="center-content" href="#Servicios">
                                        <img alt="" src="/assets/images/agency/service/support.png" />
                                        <h5>Soporte Personalizado</h5>
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