import React from 'react';
import {Container,Row,Col} from 'reactstrap'
import Image from 'next/image';


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
                                        <h1>Transformá tu negocio con una <span className="theme-color">Página Web Profesional</span> y atractiva</h1>
                                        <div className="center-content slider-logo">
                                            <img alt="" className="img-fluid" src="/assets/images/saas1/slider-logo.png" />
                                        </div>
                                    </div>
                                </div>
                                <div className="header-sub-text">
                                    <h3 className="text-white">¡Atrae más clientes y aumenta tus ventas hoy!</h3>
                                </div>
                                <div className="header-sub-text">
                                    <h6>No pierdas más oportunidades de negocio.
                                    <br/>Obtené una página web profesional y 
                                    <span className="theme-color"> ¡destacá entre la competencia!</span><br/>
                                    </h6>
                                </div>
                                <div className="link-horizontal">
                                    <ul>
                                        <li>
                                            <a className="btn btnBig" href="#contacto">Me interesa (contactar)</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <div>
                        <div className="center-text slider-banner">
                            <Image alt="pagina web profesional metadigital"
                            data-aos="fade-left"
                            height={661}
                            width={450}
                            layout="fixed"
                            style={{maxHeight: '100vh'}}
                            src="/assets/images/app_landing1/header.webp"
                            quality={100}
                            placeholder="blur"
                            blurDataURL="/assets/images/app_landing1/header-blur.png"
                            />
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
