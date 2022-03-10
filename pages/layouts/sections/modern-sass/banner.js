import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const Banner = () => (
    <section className="saas1 header" id="home">
        <div className="saas1-header bg header8-content">
            <Container>
                <Row>
                    <Col md="8">
                        <div className="center-text">
                            <div>
                                <div className="header-text">
                                    <div className="d-flex">
                                        <h1><span className="theme-color">P</span>rograma <span
                                            className="small-text">de </span><span className="theme-color">A</span>filiados</h1>
                                        <div className="center-content slider-logo">
                                            <img alt="" className="img-fluid" src="/assets/images/saas1/slider-logo.png" />
                                        </div>
                                    </div>
                                </div>
                                <div className="header-sub-text">
                                    <h3 className="text-white">¿Eres vendedor? ¿Te dedicas al marketing o publicidad?<span>
                                        <br/> Genera Ingresos Extra</span> con Nosotros Ahora!</h3>
                                </div>
                                <div className="header-sub-text">
                                    <h6>Gana desde<span className="theme-color"> $60 USD </span>hasta<span className="theme-color"> +$250 USD </span>por<span className="theme-color"> Cada Venta </span><br/>de cualquiera de nuestros productos y servicios</h6>
                                </div>
                                <div className="link-horizontal">
                                    <ul>
                                        <li>
                                            <a className="btn btn-default primary-btn transparent" href="#como-funciona">¿Cómo funciona?</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <div>
                        <div className="center-text slider-banner">
                            <img alt="slid-banner" src="/assets/images/saas1/slider-laptop2.png" className="img-fluid"/>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
        <img alt="" className="img-fluid set-abs background" src="/assets/images/saas1/background2.png" />
        <img alt="" className="img-fluid set-abs dot" src="/assets/images/saas1/dot.png" />
    </section>
)

export default Banner;