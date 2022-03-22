import React from 'react'
import {Container,Row,Col} from 'reactstrap'

const icon1 = {
    background: 'var(--primary)',
    color: 'white',
    padding: 3,
    fontWeight: 600,
    display: 'inline-block',
    width: 20,
    height: 27,
    textAlign: 'center'
}


const About = () => (
    <section className="app2 about format" id="beneficios">
    <div className="animated-bg"><i></i><i></i><i></i></div>
        <Container>
            <Row>
                <Col sm="8" md="6" className="counters m-auto m-b-20 m-t-20">
                    <img alt="" className="img-fluid mobile1" data-aos="fade-right" loading="lazy" src="/assets/images/app_landing2/beneficios2.svg" />
                </Col>
                <Col md="6" className="counters">
                    <div className="abouts center-text">
                        <div>
                            <div className="format-head-text">
                                <h3 className="about-font-header font-secondary">Aumentá el alcance y potenciá tus ventas con una tienda online profesional</h3>
                            </div>
                            <div className="format-sub-text">
                                <p className="about-para"><i style={icon1}>1.</i> <b>Millones de personas</b> en Argentina y en todo el mundo ya realizan compras directamente en Tiendas Online.</p>
                                <p className="about-para"><i style={icon1}>2.</i> <b>Muchos clientes quieren comprar un producto inmediatamente</b>, <u>y no esperar a que alguien les responda el chat y envíe links de pago.</u></p>
                                <p className="about-para"><i style={icon1}>3.</i> <b>Los rubros de:</b> Moda, Electrónica, Juguetes, Muebles, Videojuegos, Música, Viajes y Turismo <b>mueven $1,5 billones en Tiendas Online!</b></p>
                                <p className="about-para"><i>Fuente: Estadísticas de Comercio Electrónico en Argentina 2022</i></p>
                            </div>
                            <div>
                                <h6 className="font-primary m-b-25 text-uppercase"><span>No te quedes afuera!</span></h6>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>

)


export default About;