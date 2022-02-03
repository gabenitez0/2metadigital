import React, {useMemo} from 'react'
import {Container,Row,Col} from 'reactstrap'


const CTA = () => (
    <section className="agency blog blog-bg" id="blog">
        <Container>
            <Row>
                <Col md="6" className="offset-md-3">
                    <div className="title">
                        <div className="main-title">
                            <h2 className="text-capitalize text-center">¿Tienes Ideas para tu proyecto?</h2>
                        </div>
                    </div>
                    <h3 className="text-center">Hagámoslo realidad ahora mismo!</h3>
                    <h3 className="text-center">Cuéntanos tu META y hagamos que suceda</h3>
                    <h3 className="text-center">↓ CHATEA con nosotros ↓</h3>
                    <div className="link-horizontal" style={{marginTop: 50, textAlign: 'center'}}>
                        <a className="btn btn-default btn-gradient text-white active" href="#Nosotros">Iniciar Chat</a>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)

export default CTA;