import React from 'react'
import {Container,Row,Col} from 'reactstrap'
const Banner = ({link}) => (
    <section className="app2 header overflow-unset app2-animation" id="home">
        <div className="animated-bg"><i></i><i></i><i></i></div>
        <div className="app2-header bg">
            <Container>
                <Row>
                    <Col xl="7" lg="6" md="8">
                        <div className="center-text">
                            <div>
                                <h6 className="header-top-line">Millones de personas en Argentina y en todo el mundo ya realizan compras directamente en Tiendas Online</h6>
                                <div className="header-text">
                                    <h1><span className="bold-text">Dejá de perder clientes y Empezá a vender con una tienda online profesional</span></h1>
                                </div>
                                <div className="header-sub-text">
                                    <p className="text-white">Creamos tu Tienda Online Profesional por vos para que no pierdas tiempo y empieces a vender en línea y llegar a la mayor cantidad de clientes posibles.</p>
                                </div>
                                <div className="link-horizontal">
                                    <ul>
                                        <li>
                                            <a className="btn btn-default btn-white" href={link} target="_blank">Contactar ahora</a>
                                        </li>
                                        <li>
                                            <a className="btn btn-default primary-btn transparent" href="#beneficios">más info</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl="5" lg="6" md="4">
                        <div className="img-mobile set-abs">
                            <img alt="" className="headaer-image" src="/assets/images/app_landing2/header.webp"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="wave"></div>
        </div>
    </section>
)


export default Banner;