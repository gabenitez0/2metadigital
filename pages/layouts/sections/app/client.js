import React from 'react'
import {Container,Row,Col} from 'reactstrap'
const Client = () => (

    <section className="app2 brand-sliders p-t-0" id="contacto">
        <Container>
            <Row>
                <Col md="10" className="offset-md-1">
                    <div className="title title2">
                        <img alt="" className="img-fluid title-img" src="/assets/images/app_landing2/service/contact.png" />
                        <h6 className="font-primary borders main-text"><span>Empieza la aventura de tu negocio</span></h6>
                        <div className="sub-title">
                            <h2 className="title-text text-capitalize text-center mb-4">Tu negocio vendiendo en línea sin perder tiempo</h2>
                        </div>
                        <p>Te asesoramos sin compromiso: te ayudamos a decidir si nuestros servicios son para vos o no, te cotizamos y hacemos crecer tus proyectos.</p>
                        <a className="btn btn-default btn-gradient mt-5" href="https://web.whatsapp.com/send?phone=541165003611" target="_blank">Contactar ahora</a>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>

)


export default Client;