import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const Feature = () => (
    <section className="saas2 feature booking" id="calidad">
        <Container id="Servicios">
            <Row>
                <Col md="10" className="offset-md-1">
                    <div className="title">
                        <div className="main-title">
                            <h2>Diseños de Alta Calidad y Alto Impacto</h2>
                        </div>
                        <div className="sub-title">
                            <p className="sub-title-para">Permitimos que tus clientes perciban el valor de tus productos y servicios a simple vista con diseños de alta calidad y redacciones profesionales.</p>
                        </div>
                    </div>
                </Col>
                <Col xl="8" md="7">
                    <div className="center-text justify-content-center">
                        <div className="image-container">
                            <img alt="" className="img-fluid advance-feature-img"
                                src="/assets/images/saas2/advance-feature/01.png" />
                        </div>
                    </div>
                </Col>
                <Col xl="4" md="5">
                    <div>
                        <div className="center-content justify-content-start">
                            <img alt="" className="img-fluid" src="/assets/images/saas2/advance-feature/pro.png" />
                            <div className="feature-content">
                                <h5 className="feature-head">Profesionalismo</h5>
                                <p className="feature-para">Calidad de élite en cada uno de nuestros trabajos.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="center-content justify-content-start">
                            <img alt="" className="img-fluid" src="/assets/images/saas2/advance-feature/enfoque.png" />
                            <div className="feature-content">
                                <h5 className="feature-head">Enfoque en ventas</h5>
                                <p className="feature-para">Sin cosas de más, solo lo justo y necesario para lo importante: vender.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="center-content justify-content-start">
                            <img alt="" className="img-fluid" src="/assets/images/saas2/advance-feature/objetivo2.png" />
                            <div className="feature-content">
                                <h5 className="feature-head">Tu Producto Importa</h5>
                                <p className="feature-para">Seleccionamos el diseño en función de tu producto o servicio específico.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="center-content justify-content-start">
                            <img alt="" className="img-fluid" src="/assets/images/saas2/advance-feature/objetivo.png" />
                            <div className="feature-content">
                                <h5 className="feature-head">Redacciones exactas</h5>
                                <p className="feature-para">Generamos textos persuasivos enfocados al público específico y a la acción concreta.</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)

export default Feature;