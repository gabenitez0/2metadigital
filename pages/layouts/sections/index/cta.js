import React, { useState } from 'react'
import {Container,Row,Col} from 'reactstrap'

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

const Video = () => {
    const [modal, setModal] = useState();
    const toggle = () => {
        setModal(!modal)
    }

    return (
        <section className="app1 videos bg-theme" id="contacto">
            <Container>
            <Row>
                <Col md="10" className="offset-md-1">
                    <div className="title">
                        <div className="main-title">
                            <h2 className="text-white" style={{lineHeight:'1.5'}}><b><u>Vendé tus productos o servicios con una página web profesional ahora!</u></b> precios desde $18000 ARS</h2>
                        </div>
                        <div className="sub-title">
                            <p className="sub-title-para text-white">Empecemos a generar impacto a tus clientes en tiempo record y sin que malgastes el tuyo.</p>
                            <p className="sub-title-para text-white">Podemos hablar por texto o agendar una llamada para sacarte de todo tipo de dudas y ayudarte a tomar la mejor decisión.</p>
                        </div>
                    </div>
                </Col>
                <Col md="10" className="offset-md-1 text-center">
                    <a className="btn btn-default btn-white" href="https://wa.me/541122505698?text=Hola%2C%20me%20interesa%20una%20página%20web%20profesional%20para%20mi%20negocio%0A" target="_blank">Contactar ahora <i aria-hidden="true" className="fa fa-whatsapp m-l-5"></i></a>
                </Col>
            </Row>
        </Container>
        <a style={wpp} href="https://wa.me/541122505698?text=Hola%2C%20me%20interesa%20una%20página%20web%20profesional%20para%20mi%20negocio%0A" target="_blank">
            <i aria-hidden="true" className="fa fa-whatsapp p-10"></i>
        </a>
        </section>
    )
}



export default Video;