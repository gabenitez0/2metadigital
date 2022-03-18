import React from 'react'
import Tilt from 'react-parallax-tilt';
import {Container,Row,Col} from 'reactstrap'
const Banner = () => (
    <section className="agency header" id="header">
        <div className="agency bg">
            <Container>
                <Row>
                    <Col md="6">
                        <div className="center-text">
                            <div>
                                <div className="header-text">
                                    <h1 className="text-uppercase"><span className="bold-text">Soluciones para <br/>tu Negocio Digital</span></h1>
                                </div>
                                <div className="header-sub-text">
                                    <p>Potenciemos tu negocio generando impacto con una imagen digital profesional y textos persuasivos precisos enfocados en la venta.</p>
                                </div>
                                <div className="link-horizontal">
                                    <ul>
                                        <li>
                                            <a className="btn btn-default primary-btn" href="https://web.whatsapp.com/send?phone=541165003611" target="_blank">Contactar ahora</a>
                                        </li>
                                        <li>
                                            <a className="btn btn-default btn-white" href="#Servicios">más info</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="set-abs abs-horizon-center girl-boy">
            <Tilt perspective="2000" transitionSpeed="3000">
                <img alt="" className="img-fluid" src="/assets/images/agency/slider/img2.png" />
            </Tilt>
            <div className="plus-container plus-container6">
                <div className="plus white">
                </div>
            </div>
            <div className="plus-container plus-container7">
                <div className="plus white">
                </div>
            </div>
            <div className="plus-container plus-container8">
                <div className="plus white">
                </div>
            </div>
            <div className="circle-container">
                <div className="gradient-circle-big">
                </div>
            </div>
            <div className="circle-container small">
                <div className="gradient-circle-small">
                </div>
            </div>
        </div>
        <div className="plus-container">
            <div className="plus">
            </div>
        </div>
        <div className="plus-container plus-container2">
            <div className="plus plus-medium">
            </div>
        </div>
        <div className="plus-container plus-container3">
            <div className="plus plus-small">
            </div>
        </div>
        <div className="plus-container plus-container4">
            <div className="plus plus-small">
            </div>
        </div>
        <div className="plus-container plus-container5">
            <div className="plus plus-medium">
            </div>
        </div>
    </section>
)

export default Banner;