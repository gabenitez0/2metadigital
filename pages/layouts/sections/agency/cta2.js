import React, { useState } from 'react'
import {Container,Row,Col} from 'reactstrap'
const Video = () => {
    const [modal, setModal] = useState();
    const toggle = () => {
        setModal(!modal)
    }
    return(
        <section className="agency video video-bg" id="Contacto">
            <Container>
                <Row>
                    <Col xs="12">
                        <div className="text-center">
                            <div className="d-inline-block">
                                <img alt="" className="img-fluid bg-video" src="/assets/images/agency/videos/bg.png" />
                                <div className="abs-center" style={{left:'49.5%'}}>
                                    <div>
                                        <div>
                                            <img alt="" className="img-fluid m-b-20"
                                                src="/assets/images/agency/cta/cta4.png" />
                                            <div>
                                                <h3 className="video-heading text-white text-center">Empecemos a potenciar tu negocio</h3>
                                            </div>
                                            <div style={{margin: '0 0 0', textAlign: 'center'}}>
                                                <h6 className="video-text text-white text-center pb-3">Contanos qué querés lograr y qué dudas tenes: te proponemos soluciones que no requieran de tu tiempo!</h6>
                                                <a className="btn btn-default primary-btn mt-4" href="https://web.whatsapp.com/send?phone=541165003611" target="_blank">Contactar ahora</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Video;