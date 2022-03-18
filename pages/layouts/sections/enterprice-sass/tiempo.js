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
                                <h2>No te vuelvas loco haciéndolo vos!</h2>
                            </div>
                            <div className="sub-title">
                                <p className="sub-title-para">Como emprendedores entendemos perfectamente lo que es que a veces nos tengamos que ocupar de todas las cosas al mismo tiempo. ¡Que ésta sea tu excepción! Te proponemos ahorrarte dolores de cabeza y tiempo: lo hacemos por vos, en pocos días, de calidad profesional y optimizado para motores de búsqueda.</p>
                            </div>
                        </div>
                        <div className="title">
                            <div className="main-title">
                                <h2>Imaginá cómo sería trabajar con nosotros:</h2>
                            </div>
                            <div className="sub-title">
                                <ul className="sub-title-para">
                                    <li><p className="sub-title-para pb-1"><i aria-hidden="true" className="fa fa-check-circle mr-1" style={{color:'var(--primary)'}}></i> Imaginá como te van a percibir tus clientes con una web profesional.</p></li>
                                    <li><p className="sub-title-para pb-1"><i aria-hidden="true" className="fa fa-check-circle mr-1" style={{color:'var(--primary)'}}></i> Imaginá las facilidades y accesibilidad que les podrás brindar a tus clientes.</p></li>
                                    <li><p className="sub-title-para pb-1"><i aria-hidden="true" className="fa fa-check-circle mr-1" style={{color:'var(--primary)'}}></i> Imaginá la cantidad de tiempo que vas a ahorrar si dejas que hagamos todo por vos.</p></li>
                                    <li><p className="sub-title-para pb-1"><i aria-hidden="true" className="fa fa-check-circle mr-1" style={{color:'var(--primary)'}}></i> Imaginá cómo vas a poder mejorar tu producto y tu negocio con estadísticas.</p></li>
                                    <li><p className="sub-title-para"><i aria-hidden="true" className="fa fa-check-circle mr-1" style={{color:'var(--primary)'}}></i> Imaginá que ni siquiera te tengas que ocupar de la generación de contenido (opcional).</p></li>
                                </ul>
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
                    </Col>
                </Row>
            </Container>
        </Col>
    </section>
)

export default Pricing;