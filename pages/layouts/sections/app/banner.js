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
                                <h6 className="header-top-line">Creamos tu tienda online profesional</h6>
                                <div className="header-text">
                                    <h1><span className="bold-text">Empezá a vender en línea de manera profesional ahora</span></h1>
                                </div>
                                <div className="header-sub-text">
                                    <p className="text-white">8 de cada 10 argentinos realizan al menos una compra online al año. Hacemos tu tienda online profesional por vos para que empieces a vender en línea ahora.</p>
                                </div>
                                <div className="link-horizontal">
                                    <ul>
                                        <li>
                                            <a className="btn btn-default btn-white" href="https://web.whatsapp.com/send?phone=541165003611" target="_blank">Contactar ahora</a>
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
                        <div className="img-mobile set-abs" style={{bottom:0, zIndex:0, position:'absolute', left:'20vw'}}>
                            <img alt="" className="headaer-image" src="/assets/images/app_landing2/header.png"
                            style={{width:'90vh', height:'auto'}}
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