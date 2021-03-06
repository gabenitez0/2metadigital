import React from 'react';
import {Container,Row,Col} from 'reactstrap';

const wpp = {
    position: 'fixed',
    bottom: 20,
    right: 10,
    fontSize: '28px',
    background: '#25D366',
    border: '2px solid white',
    borderRadius: '50%',
    width: 50,
    height: 50,
    color: 'white',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const Cta = ({link, mon}) => (
    <section className="saas2 testimonial bg-gradient" id="contacto">
        <Container>
            <Row>
                <Col md="10" className="offset-md-1">
                    <div className="title">
                        <div className="main-title">
                            <h2 className="text-white" style={{lineHeight:'1.5'}}><b>El salto profesional de tu negocio está muy cerca!<br/></b> precios desde {mon}</h2>
                        </div>
                        <div className="sub-title">
                            <p className="sub-title-para text-white">Empecemos a generar impacto a tus clientes en tiempo record y sin que malgastes el tuyo.</p>
                            <p className="sub-title-para text-white">Podemos hablar por chat o agendar una llamada para sacarte de todo tipo de dudas y ayudarte a tomar la mejor decisión.</p>
                        </div>
                    </div>
                </Col>
                <Col md="10" className="offset-md-1 text-center">
                    <a className="btn btn-default btn-white" href={link} target="_blank">Contactar ahora <i aria-hidden="true" className="fa fa-whatsapp m-l-5"></i></a>
                </Col>
            </Row>
        </Container>
        <a style={wpp} href={link} target="_blank">
            <i aria-hidden="true" className="fa fa-whatsapp p-10"></i>
        </a>
    </section>
)

export default Cta;