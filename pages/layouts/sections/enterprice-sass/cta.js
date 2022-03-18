import React from 'react';
import {Container,Row,Col} from 'reactstrap';

const wpp = {
    position: 'fixed',
    bottom: 10,
    right: 10,
    fontSize: '28px',
    background: '#25D366',
    border: '2px solid white',
    borderRadius: '50%',
    padding: '0 10px',
    color: 'white',
    zIndex: 10,
}

const Cta = () => (
    <section className="saas2 testimonial bg-gradient" id="contacto">
        <Container>
            <Row>
                <Col md="10" className="offset-md-1">
                    <div className="title">
                        <div className="main-title">
                            <h2 className="text-white" style={{lineHeight:'1.5'}}>El salto de calidad de tu negocio está muy cerca! precios desde $18000 ARS</h2>
                        </div>
                        <div className="sub-title">
                            <p className="sub-title-para text-white">Empecemos a generar impacto a tus clientes en tiempo record y sin que malgastes el tuyo.</p>
                            <p className="sub-title-para text-white">Podemos hablar por texto o agendar una llamada para sacarte de todo tipo de dudas y ayudarte a tomar la mejor decisión.</p>
                        </div>
                    </div>
                </Col>
                <Col md="10" className="offset-md-1 text-center">
                    <a className="btn btn-default btn-white" href="https://web.whatsapp.com/send?phone=541165003611" target="_blank">Contactar ahora <i aria-hidden="true" className="fa fa-whatsapp m-l-5"></i></a>
                </Col>
            </Row>
        </Container>
        <a style={wpp} href="https://web.whatsapp.com/send?phone=541165003611" target="_blank">
            <i aria-hidden="true" className="fa fa-whatsapp p-10"></i>
        </a>
    </section>
)

export default Cta;