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
                            <h2 className="text-white mb-4" style={{lineHeight:'1.5'}}><b><u>Vendé tus productos o servicios con una página web profesional ahora!</u></b> precios desde {mon}</h2>
                            <p className="text-white mb-3" style={{lineHeight:'1.5'}}>Empecemos a generar impacto a tus clientes en tiempo record y sin que malgastes el tuyo.</p>
                            <p className="text-white" style={{lineHeight:'1.5'}}>Podemos hablar por chat o agendar una llamada para sacarte de todo tipo de dudas y ayudarte a tomar la mejor decisión.</p>
                        </div>
                        <div className="">
                        </div>
                    </div>
                </Col>
                <Col md="10" className="offset-md-1 text-center">
                    <a className="btn btn-default btn-white btnBig mt-2" href={link} target="_blank" onClick={() => fbq('track', 'Lead')}>Contactar ahora <i aria-hidden="true" className="fa fa-whatsapp m-l-5"></i></a>
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