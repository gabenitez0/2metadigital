import React from 'react';
import Tilt from 'react-parallax-tilt';
import {Container,Row,Col} from 'reactstrap'
const Business = () => (
    <section className="saas2 bg-gradient quick-sol" id="beneficios">
        <Container className="set-center-div">
            <Row>
                <Col lg="6">
                    <div className="offers-container">
                        <h3 className="text-white offer-heading-text">Beneficios de una página de alta calidad para tu negocio</h3>
                        <div className="bottom-border">
                        </div>
                        <div className="offers-content">
                            <div className="d-flex">
                                <i aria-hidden="true" className="fa fa-check-circle"></i>
                                <div>
                                    <h4 className="offer-main-text text-white"><b>Genera Mayor confianza y más ventas</b></h4>
                                    <p className="offer-sub-text text-white">La calidad transmite seguridad, y un cliente potencial que no confía en una página simplemente se va a buscar otra.</p>
                                </div>
                            </div>
                        </div>
                        <div className="offers-content">
                            <div className="d-flex">
                                <i aria-hidden="true" className="fa fa-check-circle"></i>
                                <div>
                                    <h4 className="offer-main-text text-white"><b>Genera mayor Impacto y más atención</b></h4>
                                    <p className="offer-sub-text text-white">Una página con un diseño atractivo y textos precisos llaman mucho más la atención, y por lo tanto venden más.</p>
                                </div>
                            </div>
                        </div>
                        <div className="offers-content">
                            <div className="d-flex">
                                <i aria-hidden="true" className="fa fa-check-circle"></i>
                                <div>
                                    <h4 className="offer-main-text text-white"><b>Genera mayor tráfico y más retención</b></h4>
                                    <p className="offer-sub-text text-white">Además de todo lo anterior, todos nuestros sitios están optimizados para redes sociales y motores de búsqueda.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <div className="center-text side-img">
                    <Tilt perspective="20000" transitionSpeed="3000">
                        <img alt="" className="img-fluid" src="/assets/images/saas2/we-offer/img.png" />
                    </Tilt>
                </div>
            </Row>
        </Container>
    </section>
)

export default Business;