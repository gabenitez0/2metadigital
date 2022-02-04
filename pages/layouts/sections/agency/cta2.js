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
                                                    src="/assets/images/agency/cta/cta2.png" />
                                            <div>
                                                <h3 className="video-heading text-white text-center">¿Tienes Ideas para tu proyecto?</h3>
                                                <h6 className="video-text text-white text-center pb-4">Contanos tu meta e ideas y hagámoslas realidad ahora!</h6>
                                                <h6 className="video-text text-white text-center">↓ CHATEA con nosotros ↓</h6>
                                            </div>
                                            <div style={{marginTop: 40, textAlign: 'center'}}>
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