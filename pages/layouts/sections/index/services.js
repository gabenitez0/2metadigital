import React from 'react'
import {Container,Row,Col} from 'reactstrap'
const Services = () => (
    <section className="services" id="service">
        <Container>
            <Row>
                <Col lg="6" md="8"  className="offset-lg-3 offset-md-2">
                    <div className="title">
                        <div className="main-title">
                            <h2>¿Cómo una web de alto impacto puede mejorar tu negocio?</h2>
                        </div>
                        <div className="sub-title">
                            <p className="para">La imagen en internet es muy importante y tu negocio no es la excepción, si tu web no transmite profesionalidad no genera confianza y perdes ventas.</p>
                        </div>
                    </div>
                </Col>
                <Col md="4">
                    <div className="service service-overlay">
                        <div className="img-block">
                            <img alt="" className="service-img img-fluid" src="/assets/images/app_landing1/icons/1-1.png" />
                        </div>
                        <div className="service-feature">
                            <h4 className="feature-text">Más Tráfico</h4>
                            <p>Un diseño profesional genera mayor atención</p>

                        </div>
                    </div>
                </Col>
                <Col md="4">
                    <div className="service service-overlay">
                        <div className="img-block">
                            <img alt="" className="service-img img-fluid" src="/assets/images/app_landing1/icons/1-2.png" />
                        </div>
                        <div className="service-feature">
                            <h4 className="feature-text">Más Ventas</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the ma- jority have
                                suffered.</p>
                        </div>
                    </div>
                </Col>
                <Col md="4">
                    <div className="service service-overlay">
                        <div className="img-block">
                            <img alt="" className="service-img img-fluid" src="/assets/images/app_landing1/icons/1-3.png" />
                        </div>
                        <div className="service-feature">
                            <h4 className="feature-text">Más tiempo</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the ma- jority have
                                suffered.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)


export default Services;