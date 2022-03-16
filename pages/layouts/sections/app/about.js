import React from 'react'
import {Container,Row,Col} from 'reactstrap'
const About = () => (
    <section className="app2 about format" id="beneficios">
    <div className="animated-bg"><i></i><i></i><i></i></div>

        <Container>
            <Row>
                <Col sm="6" className="counters set-height">
                    <img alt="" className="img-fluid mobile1" data-aos="fade-right" src="/assets/images/app_landing2/beneficios.png" />
                </Col>
                <Col sm="6" className="counters">
                    <div className="abouts center-text">
                        <div>
                            <div>
                                <h6 className="font-primary m-b-25 text-uppercase"><span>Beneficios únicos ecommerce</span></h6>
                            </div>
                            <div className="format-head-text">
                                <h3 className="about-font-header font-secondary">Ahorrá toneladas de tiempo!</h3>
                            </div>
                            <div className="format-sub-text">
                                <p className="about-para">Tener una tienda online te puede ahorrar mucho tiempo, ya que ésta plataforma te permite automatizar la mayoría de los procesos de venta y dar un salto de calidad y accesibilidad para tu negocio y tus clientes.</p>
                                <p className="about-para"><b>Es como tener un robot vendedor que puede vender las 24 horas y brindar a tus clientes toda la información que necesitan para comprar: Stock, Precio, Colores, Talles, Medios de Pago, Catálogos, etc. y además, la tecnología de Carrito y Pasarelas de Pago para que puedan Concretar la Compra SIN intervención humana en cualquier momento.</b></p>
                                <p className="about-para">Pero no pierdas tiempo, somos especialistas, lo hacemos por vos considerando cada detalle, de calidad profesional y escalable.</p>
                            </div>
                            {/*
                            <ul className="icon-collection">
                                <li className="about-icon">
                                    <a className="center-content" href="#">
                                      <img alt="" className="img-fluid" src="/assets/images/app_landing2/about-icons/1.png" /></a>
                                </li>
                                <li className="about-icon">
                                    <a className="center-content" href="#">
                                      <img alt="" className="img-fluid" src="/assets/images/app_landing2/about-icons/2.png" /></a>
                                </li>
                                <li className="about-icon">
                                    <a className="center-content" href="#">
                                      <img alt="" className="img-fluid" src="/assets/images/app_landing2/about-icons/3.png" /></a>
                                </li>
                            </ul>*/}
                            <a className="btn btn-default btn-gradient m-t-50" href="#caracteristicas">características</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>

)


export default About;