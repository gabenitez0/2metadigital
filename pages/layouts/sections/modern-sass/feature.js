import React from 'react';
import { FeatureData } from '../../../../database/layouts/modern/database'
import {Container,Row,Col} from 'reactstrap'
const Feature = () => (
    <section className="saas1 service" id="feature">
        <div className="about-chat">
            <Container>
                <Row>
                    <Col md="12" className="text-center">
                        <div className="title">
                            <img alt="title-logo" className="img-fluid" src="/assets/images/saas1/title-logo.png" />
                            <div className="main-title">
                                <h2>
                                    Pero, qué soluciona <span className="theme-color">2MetaDigital</span>?
                                </h2>
                            </div>
                            <hr />
                            <div className="sub-title">
                                <p className="p-padding">2MetaDigital fue creada para resolver la integración de los negocios al mercado digital, si bien existen diversas plataformas que pueden hacer esto, no son gratis y también demandan tiempo. Nuestros servicios tampoco son gratis, pero sí <span className="theme-color">conseguimos Ahorrarle todo ese Tiempo a nuestros clientes con trabajos de Alta Calidad</span>, para que ellos se ocupen de lo que realmente les importa: su negocio, sus productos y sus clientes.</p>
                            </div>
                        </div>
                    </Col>
                    {
                        FeatureData.map((item, i) => {
                            return (
                                <Col lg="4" md="6"  className="service-container" key={i}>
                                    <div className="chat-box">
                                        <img alt="stay-connected" src={item.img} />
                                        <div className="feature-content">
                                            <h4 className="service-heading"> {item.heading} <span className="theme-color">{item.layout}</span>
                                            </h4>
                                            <hr />
                                            <p className="mb-2">{item.desc}</p>
                                            <a href={item.link} target="_blank"><span className="theme-color">{item.button}</span></a>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    </section>
)
export default Feature;