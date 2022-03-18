import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const Pricing = () => (
    <section className="saas2 pricing m-0" id="plan">
        <Col md="10" xs="12" className="offset-md-1">
            <Container className="saas2-services">
                <Row>
                    <Col md="10" className="offset-md-1">
                        <div className="title">
                            <div className="main-title">
                                <h2>No te vuelvas loco haciéndolo vos!</h2>
                            </div>
                            <div className="sub-title">
                                <p className="sub-title-para">Como emprendedores entendemos perfectamente lo que es que a veces nos tengamos que ocupar de todas las cosas al mismo tiempo. ¡Que ésta sea tu excepción! Te proponemos ahorrarte dolores de cabeza y tiempo: lo hacemos por vos, en pocos días, de calidad profesional y optimizado para motores de búsqueda.</p>
                            </div>
                        </div>
                        <div className="title">
                            <div className="main-title">
                                <h2>Tu sitio listo en tiempo record! (3 días)</h2>
                            </div>
                            <div className="sub-title">
                                <p className="sub-title-para">Sabemos lo que hacemos y por eso generamos formas de trabajo super eficientes que nos permiten ofrecer este tipo de tiempos record de trabajo en algunos de nuestros servicios.</p>
                            </div>
                        </div>
                        <div className="title">
                            <div className="main-title">
                                <h2>Te asesoramos con valor</h2>
                            </div>
                            <div className="sub-title">
                                <p className="sub-title-para">Sabemos lo que hacemos y por eso generamos formas de trabajo super eficientes que nos permiten ofrecer este tipo de tiempos record de trabajo en algunos de nuestros servicios.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Col>
    </section>
)

export default Pricing;