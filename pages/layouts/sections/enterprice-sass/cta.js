import React from 'react';
import Slider from "react-slick";
 
import {Container,Row,Col} from 'reactstrap'

const Cta = () => (
    <section className="saas2 testimonial bg-gradient" id="contacto">
        <Container>
            <Row>
                <Col md="10" className="offset-md-1">
                    <div className="title">
                        <div className="main-title">
                            <h2 className="text-white">El salto de calidad de tu negocio está muy cerca</h2>
                        </div>
                        <div className="sub-title">
                            <p className="sub-title-para text-white">Empecemos a generar impacto a tus clientes en tiempo record y sin que malgastes el tuyo.</p>
                        </div>
                    </div>
                </Col>
                <Col md="10" className="offset-md-1 text-center">
                    <a className="btn btn-default btn-white" href="https://web.whatsapp.com/send?phone=541165003611" target="_blank">Contactar ahora</a>                    
                </Col>
            </Row>
        </Container>
    </section>
)

export default Cta;