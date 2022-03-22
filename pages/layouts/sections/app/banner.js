import React from 'react'
import {Container,Row,Col} from 'reactstrap'
const Banner = () => (
    <section className="app2 header overflow-unset app2-animation" id="home">
        <div className="animated-bg"><i></i><i></i><i></i></div>
        <div className="app2-header bg">
            <Container>
                <Row>
                    <Col xl="7" lg="6" md="8">
                        <div className="center-text">
                            <div>
                                <h6 className="header-top-line">8 de cada 10 argentinos ya realizan compras en internet a través de tiendas online</h6>
                                <div className="header-text">
                                    <h1><span className="bold-text">Empezá a venderle a todos los clientes de internet con una tienda online profesional</span></h1>
                                </div>
                                <div className="header-sub-text">
                                    <p className="text-white">Creamos tu Tienda Online Profesional por vos para que no pierdas tiempo y empieces a vender en línea y llegar a la mayor cantidad de clientes posibles.</p>
                                </div>
                                <div className="link-horizontal">
                                    <ul>
                                        <li>
                                            <a className="btn btn-default btn-white" href="https://wa.me/541122505698?text=Hola%2C%20me%20interesa%20una%20tienda%20online%20para%20mi%20negocio." target="_blank">Contactar ahora</a>
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