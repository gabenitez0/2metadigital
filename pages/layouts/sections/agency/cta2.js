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
                                                <h3 className="video-heading text-white text-center">¿Tenes ideas para tu proyecto?</h3>
                                            </div>
                                            <div style={{margin: '0 0 0', textAlign: 'center'}}>
                                                <h6 className="video-text text-white text-center pb-3">Contanos qué querés lograr</h6>
                                                <h6 className="video-text text-white text-center pb-3">También qué dudas tenes</h6>
                                                <h6 className="video-text text-white text-center pb-4">Te proponemos soluciones</h6>
                                                <a className="btn btn-default primary-btn" onClick={() => window.HubSpotConversations.widget.open()} href="#!">Iniciar Chat</a>
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