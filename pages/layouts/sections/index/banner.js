import React from 'react'
import {Container,Row,Col} from 'reactstrap';
import Image from 'next/image'

const Banner = ({link}) => {
    
    return (

    <section className="app1 header" id="home">
        <div className="app1-header bg">
            <Container>
                <Row>
                    <Col lg="6" md="7">
                        <div className="center-text" style={{marginTop: 50}}>
                            <div>
                                <div className="header-text">
                                    <h1><b>Vendé tus servicios en internet con una Web de Alto Impacto</b></h1>
                                </div>
                                <div className="header-sub-text">
                                    <p className="text-white p-light">Permití a tus potenciales clientes conocer mejor tu producto o servicio con una web de alta calidad y textos persuasivos para ayudarlos a tomar la decisión de compra e <b style={{fontWeight:600}}>incrementar tus ventas</b>.</p>
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
                        <div className="img-mobile set-abs" style={{bottom: '0'}}>
                            <Image alt="mockup header 2metadigital celular con web institucional"
                            priority={true}
                            height={661}
                            width={450}
                            layout="fixed"
                            style={{maxHeight: '100vh'}}
                            src="/assets/images/app_landing1/header.webp"
                            />
                        </div>
                    </Col>
                    <div className="squares">
                        <img alt="" className="img-fluid img-1 set-abs" src="/assets/images/app_landing1/Ellipse.png" />
                        <img alt="" className="img-fluid img-2 set-abs" src="/assets/images/app_landing1/Ellipse.png" />
                    </div>
                    <div className="animation-circle-inverse">
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </Row>
            </Container>
        </div>
    </section>
)
}

export default Banner;