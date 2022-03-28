import React from 'react';
import Tilt from 'react-parallax-tilt';
import {Container,Row,Col} from 'reactstrap'

const primary = {
    color: 'var(--primary)',
    borderColor: 'var(--primary)',
    marginBottom: 40
}

const Business = () => (
    <section className="saas2" id="historia">
        <Container className="set-center-div">
            <Row className="align-items-center">
                <Col lg="8">
                    <div className="offers-container">
                        <div data-aos="fade-right" data-aos-delay="200">
                            <h3 className=" offer-heading-text"><b>Hola! Soy Gabriel, creador de 2MetaDigital</b></h3>
                            <p className="m-b-20">A lo largo de mi carrera como emprendedor aprendí que el contacto humano, el trabajo en equipo y la comunicación transparente es muy importante para el crecimiento en cualquier área de la vida, incluyendo los negocios, es por eso que quiero que trabajemos de la mejor forma y alcancemos nuestras METAS juntos!</p>
                            <div className="bottom-border" style={primary}></div>
                        </div>
                        <div className="offers-content" data-aos="fade-right" data-aos-delay="200">
                            <div className="d-flex">
                                <div>
                                    <h4 className="offer-main-text "><b style={{fontWeight:600}}><u>Sobre mí:</u></b></h4>
                                    <p className="offer-sub-text">Nací y vivo en Buenos Aires, Argentina, tengo 24 años y soy emprendedor desde hace casi 10 años (desde mis 15 años). No solo hice desarrollo web, pero esto es algo que hago desde mis inicios como emprendedor ya que es la herramienta que siempre me permitió promocionar y vender mis productos y servicios en línea.</p>
                                    <p className="offer-sub-text mt-2"><b>En este 2022 estoy enfocado principalmente a este proyecto llamado 2metadigital, el cual inicié hace aproximadamente 2 años, y en todo este tiempo aprendí a como transformar los servicios que brindo para realmente solucionar las necesidades de mis clientes.</b></p>
                                </div>
                            </div>
                        </div>
                        <div className="offers-content" data-aos="fade-right" data-aos-delay="200">
                            <div className="d-flex">
                                <div>
                                    <h4 className="offer-main-text "><b style={{fontWeight:600}}><u>Sobre 2MetaDigital:</u></b></h4>
                                    <p className="offer-sub-text ">Cuando empezamos con 2MetaDigital solo se enfocaba en vender eCommerces. En todo este tiempo conseguimos ampliar la gama de soluciones y perfeccionar nuestros servicios no solo en cuanto a solucionar problemas sino también en cuanto a los costos de tiempo por trabajo, es decir que podemos entregar proyectos listos para funcionar en poco tiempo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg="4" sm="6" className='m-auto'>
                    <img alt="" className="img-fluid m-t-20" style={{maxHeight:700}} loading="lazy" src="/assets/images/cert.jpg" />
                </Col>
            </Row>
        </Container>
    </section>
)

export default Business;