import React from 'react'
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


const Client = () => (
    <section className="app2 brand-sliders p-t-0" id="contacto">
        <div className="animated-bg"><i></i><i></i><i></i></div>
        <Container>
            <Row>
                <Col md="10" className="offset-md-1">
                    <div className="title title2">
                        <img alt="" className="img-fluid title-img" src="/assets/images/app_landing2/service/contact.png" />
                        <h6 className="font-primary borders main-text"><span>EMPIEZA LA NUEVA ETAPA DE TU NEGOCIO</span></h6>
                        <div className="sub-title">
                            <h2 className="title-text text-capitalize text-center mb-4" style={{lineHeight:'1.5'}}><b><u>Vendé a Todos los Clientes de Internet con una tienda online profesional Ahora!</u></b> Precios desde $18000 ARS!</h2>
                        </div>
                        <p>Te asesoramos sin compromiso: te ayudamos a decidir si nuestros servicios son para vos o no, te cotizamos y hacemos crecer tus proyectos.</p>
                        <a className="btn btn-default btn-gradient mt-5" href="https://wa.me/541122505698?text=Hola%2C%20me%20interesa%20una%20tienda%20online%20para%20mi%20negocio." target="_blank">Contactar ahora <i aria-hidden="true" className="fa fa-whatsapp m-l-5"></i></a>
                    </div>
                </Col>
            </Row>
        </Container>
        <a style={wpp} href="https://wa.me/541122505698?text=Hola%2C%20me%20interesa%20una%20tienda%20online%20para%20mi%20negocio." target="_blank">
            <i aria-hidden="true" className="fa fa-whatsapp p-10"></i>
        </a>
    </section>

)


export default Client;