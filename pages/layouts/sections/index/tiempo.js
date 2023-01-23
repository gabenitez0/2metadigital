import React from 'react'
import {Container,Row,Col} from 'reactstrap'

const lista = {
    fontSize: '1rem',
}

const Price = () => (
    <section className="app1 pricing mb-0" id="plan">
        <Container>
            <Row>
                <Col md="10"  className="offset-md-1">
                    <div className="title" data-aos="fade-right" data-aos-delay="200">
                        <div className="main-title">
                            <h3 className="mb-4" style={{fontWeight:800}}>Imaginá los beneficios para vos y tu negocio...</h3>
                        </div>
                        <div className="sub-title">
                            <ul className="sub-title-para">
                                <li><p className="sub-title-para pb-1"><i aria-hidden="true" className="fa fa-check-circle mr-1" style={{color:'var(--tertiary)'}}></i><b> ... aparecerás en los principales motores de búsqueda como Google.</b></p></li>
                                <li><p className="sub-title-para pb-1"><i aria-hidden="true" className="fa fa-check-circle mr-1" style={{color:'var(--tertiary)'}}></i> <b>... podrás automatizar procesos de marketing y ventas.</b></p></li>
                                <li><p className="sub-title-para pb-1"><i aria-hidden="true" className="fa fa-check-circle mr-1" style={{color:'var(--tertiary)'}}></i> <b>... tus clientes podrán encontrarte y comprar en cualquier momento 24/7.</b></p></li>
                                <li><p className="sub-title-para pb-1"><i aria-hidden="true" className="fa fa-check-circle mr-1" style={{color:'var(--tertiary)'}}></i> <b>... tendrás una nueva imagen profesional y de alto valor.</b></p></li>
                                <li><p className="sub-title-para pb-1"><i aria-hidden="true" className="fa fa-check-circle mr-1" style={{color:'var(--tertiary)'}}></i> ... tendrás disponibilidad 24/7 para todos los dispositivos.</p></li>
                                <li><p className="sub-title-para pb-1"><i aria-hidden="true" className="fa fa-check-circle mr-1" style={{color:'var(--tertiary)'}}></i> ... ahorrarás hasta 24 horas semanales de tareas repetitivas.</p></li>
                                <li><p className="sub-title-para pb-1"><i aria-hidden="true" className="fa fa-check-circle mr-1" style={{color:'var(--tertiary)'}}></i> ... tendrás acceso a estadísticas y analíticas sobre tu público.</p></li>
                                <li><p className="sub-title-para"><i aria-hidden="true" className="fa fa-check-circle mr-1" style={{color:'var(--tertiary)'}}></i> ... podrás transmitir el valor de tu producto o servicio.</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="title" data-aos="fade-left" data-aos-delay="200">
                        <div className="main-title">
                            <h3 className="mb-4 mt-5" style={{fontWeight:800}}>Tu proyecto nos importa</h3>
                        </div>
                        <div className="sub-title">
                            <p className="sub-title-para"><b>Para conseguir los resultados que ofrecemos en esta página, hacemos una investigación de mercado de tu proyecto y análisis de tu producto o servicio, de esta forma nosotros podemos comprender el valor y el factor diferencial del mismo y presentarlo de una manera profesional y enfocada a resultados!</b></p>
                        </div>
                    </div>
                    <div className="title" data-aos="fade-right" data-aos-delay="200">
                        <div className="main-title">
                        <h3 className="mb-4 mt-5" style={{fontWeight:800}}>Vos nos importas</h3>
                        </div>
                        <div className="sub-title">
                            <p className="sub-title-para"><b>Como emprendedores comprendemos perfectamente lo valioso de tu tiempo, es por eso que solo te vamos a sacar lo justo y necesario para hacer nuestro trabajo, de todo el resto nos encargamos nosotros!</b></p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        <style jsx>{`
        h2{font-size: calc(20px + (33 - 20) * ((100vw - 300px) / (1920 - 300)))}
        p{font-size: calc(13px + (16 - 13) * ((100vw - 300px) / (1920 - 300)))}
        `}</style>
    </section>
)


export default Price;
