import React, { useState } from 'react'
import {Container,Row,Col} from 'reactstrap'

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

const CTA = ({link, mon}) => {
    const [modal, setModal] = useState();
    const toggle = () => {
        setModal(!modal)
    }

    return (<>
        <section className="app1 videos bg-theme" id="contacto">
            <Container>
            <Row data-aos="fade-right" data-aos-delay="200">
                <Col md="10" className="offset-md-1">
                    <div className="title mb-4">
                        <div className="main-title">
                            <h2 className="text-white mb-4" style={{lineHeight:'1.5'}}><u>¡Empecemos a transformar tu negocio con tu Nueva Página Web Profesional!</u></h2>
                            <h3 className="text-white mb-3" style={{lineHeight:'1.5', fontWeight:600}}>Tenemos Precios Promocionales y una Propuesta Personalizada para tu negocio Solo para los próximos 10 clientes</h3>
                            <h4 className="text-white mb-4" style={{lineHeight:'1.5', fontSize: 24, fontWeight:800}}>↓ ¡<u>Contactanos Ahora</u>! ↓</h4>
                        </div>
                    </div>
                </Col>
                <Col md="10" className="offset-md-1 text-center">
                    <a className="btn btn-default btn-white btnBig mt-2" href={link} target="_blank" onClick={() => fbq('track', 'Lead')}>Quiero aprovechar esta oportunidad <i aria-hidden="true" className="fa fa-whatsapp m-l-5"></i></a>
                </Col>
            </Row>
        </Container>
        </section>
        <a style={wpp} href={link} target="_blank" onClick={() => fbq('track', 'Lead')}>
            <i aria-hidden="true" className="fa fa-whatsapp p-10"></i>
        </a>
        <style jsx>{`
        h2{font-size: calc(20px + (33 - 20) * ((100vw - 300px) / (1920 - 300)))}
        p{font-size: calc(13px + (16 - 13) * ((100vw - 300px) / (1920 - 300)))}
        .btnBig {
            margin: auto;
        }
        `}</style>
    </>)
}



export default CTA;
