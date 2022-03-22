import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const Pricing = () => (
    <section className="saas2 pricing m-0" id="tiempo">
        <Col md="10" xs="12" className="offset-md-1">
            <Container className="saas2-services">
                <Row>
                    <Col md="10" className="offset-md-1">
                        <div className="title">
                            <div className="main-title">
                                <h2 style={{lineHeight:1.2}}><b><u>Imaginá los beneficios de este salto de calidad para tu negocio...</u></b></h2>
                            </div>
                            <div className="sub-title">
                                <ul className="sub-title-para">
                                    <li><p className="sub-title-para pb-1"><i aria-hidden="true" className="fa fa-check-circle mr-1" style={{color:'var(--primary)'}}></i> <b>... tus potenciales clientes ahora te van a tomar en serio.</b></p></li>
                                    <li><p className="sub-title-para pb-1"><i aria-hidden="true" className="fa fa-check-circle mr-1" style={{color:'var(--primary)'}}></i> <b>... podrás realmente transmitir el valor de tu producto o servicio.</b></p></li>
                                    <li><p className="sub-title-para pb-1"><i aria-hidden="true" className="fa fa-check-circle mr-1" style={{color:'var(--primary)'}}></i> <b>... una nueva imagen profesional y de alto valor.</b></p></li>
                                    <li><p className="sub-title-para pb-1"><i aria-hidden="true" className="fa fa-check-circle mr-1" style={{color:'var(--primary)'}}></i> ... la accesibilidad que les podrás brindar a tu tráfico.</p></li>
                                    <li><p className="sub-title-para pb-1"><i aria-hidden="true" className="fa fa-check-circle mr-1" style={{color:'var(--primary)'}}></i> ... la cantidad de tiempo que vas a ahorrar de tareas repetitivas.</p></li>
                                    <li><p className="sub-title-para pb-1"><i aria-hidden="true" className="fa fa-check-circle mr-1" style={{color:'var(--primary)'}}></i> ... cómo vas a poder mejorar tu producto y tu negocio con estadísticas.</p></li>
                                    <li><p className="sub-title-para"><i aria-hidden="true" className="fa fa-check-circle mr-1" style={{color:'var(--primary)'}}></i> ... que ni siquiera te tengas que ocupar de la generación de contenido.</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="title">
                            <div className="main-title">
                                <h2><b><u>Tu proyecto nos importa:</u></b></h2>
                            </div>
                            <div className="sub-title">
                                <p className="sub-title-para"><b>Para conseguir los resultados que ofrecemos en esta página, hacemos una investigación de mercado de tu proyecto y análisis de tu producto o servicio, de esta forma nosotros podemos comprender el valor y el factor diferencial del mismo y presentarlo de la manera correcta!</b></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Col>
    </section>
)

export default Pricing;