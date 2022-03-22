import React from 'react';
import Tilt from 'react-parallax-tilt';
import {Container,Row,Col} from 'reactstrap'
const Business = () => (
    <section className="saas2 bg-gradient quick-sol" id="beneficios">
        <Container className="set-center-div">
            <Row className="align-items-center">
                <Col lg="6">
                    <div className="offers-container">
                        <h3 className="text-white offer-heading-text"><b>¿Cómo tu negocio se potencia con una web profesional de alta calidad?</b></h3>
                        <div className="bottom-border">
                        </div>
                        <div className="offers-content">
                            <div className="d-flex">
                                <i aria-hidden="true" className="fa fa-check-circle"></i>
                                <div>
                                    <h4 className="offer-main-text text-white"><b style={{fontWeight:600}}><u>Transmite confianza y seguridad</u></b></h4>
                                    <p className="offer-sub-text text-white">La calidad transmite confianza y profesionalismo, y un cliente potencial que no confía en una página es un cliente perdido y simplemente se va a buscar otra opción de la competencia.</p>
                                </div>
                            </div>
                        </div>
                        <div className="offers-content">
                            <div className="d-flex">
                                <i aria-hidden="true" className="fa fa-check-circle"></i>
                                <div>
                                    <h4 className="offer-main-text text-white"><b style={{fontWeight:600}}><u>Incrementa y Consolida tus clientes</u></b></h4>
                                    <p className="offer-sub-text text-white">Una página web con un diseño profesional llama mucho más la atención, y sumado a textos persuasivos precisos consigue que realmente seas una competencia y te tomen en cuenta.</p>
                                </div>
                            </div>
                        </div>
                        <div className="offers-content">
                            <div className="d-flex">
                                <i aria-hidden="true" className="fa fa-check-circle"></i>
                                <div>
                                    <h4 className="offer-main-text text-white"><b style={{fontWeight:600}}><u>Transmite el valor real de tu producto</u></b></h4>
                                    <p className="offer-sub-text text-white">Hacemos las páginas web enfocadas a demostrar el valor de tu producto o servicio para que tus potenciales clientes te elijan.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg="6" sm="6" className='m-auto'>
                    <img alt="" className="img-fluid m-t-20" style={{maxHeight:700}} loading="lazy" src="/assets/images/saas2/beneficios2.webp" />
                </Col>
            </Row>
        </Container>
    </section>
)

export default Business;