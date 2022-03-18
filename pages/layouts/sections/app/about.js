import React from 'react'
import {Container,Row,Col} from 'reactstrap'
const About = () => (
    <section className="app2 about format" id="beneficios">
    <div className="animated-bg"><i></i><i></i><i></i></div>

        <Container>
            <Row>
                <Col sm="6" className="counters set-height">
                    <img alt="" className="img-fluid mobile1" data-aos="fade-right" src="/assets/images/app_landing2/beneficios2.svg" />
                </Col>
                <Col sm="6" className="counters">
                    <div className="abouts center-text">
                        <div>
                            <div>
                                <h6 className="font-primary m-b-25 text-uppercase"><span>Beneficios únicos ecommerce</span></h6>
                            </div>
                            <div className="format-head-text">
                                <h3 className="about-font-header font-secondary">Vendé a todos los clientes de internet en argentina con una tienda online Profesional!</h3>
                            </div>
                            <div className="format-sub-text">
                                <p className="about-para">Millones de personas en argentina y en todos los países realizan compras regularmente en sitios de internet y tiendas online.</p>
                                <p className="about-para">Los rubros más importantes son Belleza y Moda (Ropa, Zapatillas), Productos Electrónicos, Juguetes y Hobbies, Muebles y Decoraciones, Comida y Cuidado Personal, Videojuegos, Música Digital, Viajes y Turismo, entre otros!</p>
                                <p className="about-para">No te quedes afuera!.</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>

)


export default About;