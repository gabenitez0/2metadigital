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
                            <h2 style={{lineHeight:1.2}}><b>Imaginá los beneficios de este salto de calidad para tu negocio...</b></h2>
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
                    <div className="title" data-aos="fade-left" data-aos-delay="200">
                        <div className="main-title">
                            <h2><b>Tu proyecto nos importa:</b></h2>
                        </div>
                        <div className="sub-title">
                            <p className="sub-title-para"><b>Para conseguir los resultados que ofrecemos en esta página, hacemos una investigación de mercado de tu proyecto y análisis de tu producto o servicio, de esta forma nosotros podemos comprender el valor y el factor diferencial del mismo y presentarlo de una manera profesional y enfocada a resultados!</b></p>
                        </div>
                    </div>
                    <div className="title" data-aos="fade-right" data-aos-delay="200">
                        <div className="main-title">
                            <h2><b>Vos nos importas:</b></h2>
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