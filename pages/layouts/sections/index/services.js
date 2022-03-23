import React from 'react'
import {Container,Row,Col} from 'reactstrap'
const Services = () => (
    <section className="services" id="service">
        <Container>
            <Row>
                <Col md="8" className="offset-md-2">
                    <div className="title">
                        <div className="main-title">
                            <h2 className='mb-3'>¿Cómo Una Web De Alto Impacto Puede Potenciar Tu Negocio?</h2>
                        </div>
                        <div className="sub-title">
                            <p className="para"><b>La imagen en internet es muy importante y tu negocio no es la excepción, si tu web no transmite profesionalidad, no genera confianza y perdes ventas.</b></p>
                        </div>
                    </div>
                </Col>
                <Col md="4">
                    <div className="service service-overlay">
                        <div className="img-block">
                            <img alt="" className="service-img img-fluid" ladoing="lazy" src="/assets/images/app_landing1/icons/1-1.png" />
                        </div>
                        <div className="service-feature">
                            <h4 className="feature-text">Más Tráfico</h4>
                            <p>Una Web De Alto Impacto se diferencia del resto, llama más la atención, por lo tanto consigue más tráfico y más potenciales clientes.</p>

                        </div>
                    </div>
                </Col>
                <Col md="4">
                    <div className="service service-overlay">
                        <div className="img-block">
                            <img alt="" className="service-img img-fluid" ladoing="lazy" src="/assets/images/app_landing1/icons/1-3.png" />
                        </div>
                        <div className="service-feature">
                            <h4 className="feature-text">Más Ventas</h4>
                            <p>Una Web Profesional también genera más confianza, porque se nota la calidad, y junto a textos persuasivos se traduce en nuevos clientes.</p>
                        </div>
                    </div>
                </Col>
                <Col md="4">
                    <div className="service service-overlay">
                        <div className="img-block">
                            <img alt="" className="service-img img-fluid" ladoing="lazy" src="/assets/images/app_landing1/icons/1-2.png" />
                        </div>
                        <div className="service-feature">
                            <h4 className="feature-text">Más tiempo</h4>
                            <p>Una web también es una herramienta que te puede ayudar a automatizar muchos procesos de venta y ahorrarte mucho tiempo de tareas repetitivas.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)


export default Services;