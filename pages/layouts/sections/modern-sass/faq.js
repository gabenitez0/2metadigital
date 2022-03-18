import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import { Container, Row, Col } from 'reactstrap'
const Faq = () => {
    const Personal = () => (
        <div className="collapse show" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordionoc">
            <div className="card-body">Me llamo Gabriel, nací y vivo en Buenos Aires, Argentina. Tengo 24 años y soy emprendedor desde hace casi 10 años (desde mis 15 años). <br/><br/>Actualmente estoy enfocado principalmente en este proyecto llamado 2metadigital, el cual inicié hace 2 años aproximadamente y en ese tiempo desarrolle formas de trabajo muy eficientes y de excelente calidad.</div>
        </div>
    );
    const Proyecto = () => (
        <div className="collapse show" id="collapseicon1" aria-labelledby="collapseicon1" data-parent="#accordionoc">
            <div className="card-body">2MetaDigital empezó hace 2 años con otro nombre y solo se enfocaba en eCommerces, en todo este tiempo conseguimos ampliar la gama de soluciones y perfeccionar nuestros productos y servicios no solo hacia el cliente sino en cuanto a los costos de tiempo por trabajo: es decir, podemos entregar productos terminados en pocas horas/días. <br/><br/>Actualmente estamos llevando a cabo nuevas estrategias de marketing de crecimiento en equipo.</div>
        </div>
    );
    const Mercado = () => (
        <div className="collapse show" id="collapseicon1" aria-labelledby="collapseicon1" data-parent="#accordionoc">
            <div className="card-body">Nuestros productos se pueden enfocar a diversos mercados y públicos específicos. Lo mejor es dirigirse específicamente a un tipo de público o problema. <br/><br/>Nosotros les proporcionamos una serie de herramientas (lading pages) a nuestros afiliados para que puedan promocionar y vender nuestros productos y servicios más facilmente. <br/><br/>Si ya eres un experimentado en el tema, puedes utilizar tus propios recursos publicitarios que mejor te funcionen. Está prohibido utilizar mentiras o engaños como forma de vender.</div>
        </div>
    );
    const Contacto = () => (
        <div className="collapse show" id="collapseicon1" aria-labelledby="collapseicon1" data-parent="#accordionoc">
            <div className="card-body">Puedes contactarte conmigo cuando quieras! utilizo preferentemente WhatsApp. Si gustas podemos acordar una reunión por Zoom para conocernos mejor y despejar cualquier duda.</div>
            <a className="btn btn-default primary-btn mt-4" href="https://web.whatsapp.com/send?phone=541165003611" target="_blank">Contactame por WhatsApp</a>
        </div>
    );
    return (
        <section className="saas1 faq" id="contacto">
            <Container>
                <Row>
                    <Col md="8">
                        <div className="faq-block">
                            <div>
                                <h3 className="frequent-text">Hola, soy el creador de 2MetaDigital!</h3>
                                <h6 style={{textTransform:'none'}}>A lo largo de mi carrera como emprendedor aprendí que el contacto humano, el trabajo en equipo y la comunicación transparente es muy importante para el crecimiento en cualquier área de la vida, incluyendo los negocios, es por eso que quiero que trabajemos de la mejor forma y alcancemos nuestras METAS juntos!</h6>
                                <Accordion atomic={true} className="mb-3">
                                    <AccordionItem className="card-header bg-primary" title="Más Información Personal">
                                        <Personal className="active" />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title="Sobre el Proyecto 2MetaDigital">
                                        <Proyecto />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title="Mercado de Nuestros Productos y Servicios">
                                        <Mercado />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title="Cómo Contactarme?">
                                        <Contacto />
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="faq-img-block">
                            <img alt="faq-person" className="img-fluid" src="/assets/images/saas1/gabriel2.jpg" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Faq;