import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import { Container, Row, Col } from 'reactstrap'
const Faq = () => {
    const DummyContent1 = () => (
        <div className="collapse show" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordionoc">
            <div className="card-body">Nací y vivo en Buenos Aires, Argentina. Tengo 24 años y soy emprendedor desde hace casi 10 años (desde mis 15 años). Actualmente estoy enfocado principalmente en este proyecto llamado 2metadigital, el cual inicié hace alrededor de 2 años y estoy llevando a cabo nuevas estrategias de crecimiento en equipo.</div>
        </div>
    );
    const DummyContent2 = () => (
        <div className="collapse show" id="collapseicon1" aria-labelledby="collapseicon1" data-parent="#accordionoc">
            <div className="card-body">Para pagos internacionales, por el momento solo cuento con PayPal y USDT (criptomonedas). Para pagos nacionales utilizo preferentemente transferencia bancaria.</div>
        </div>
    );
    return (
        <section className="saas1 faq" id="faq">
            <Container>
                <Row>
                    <Col md="8">
                        <div className="faq-block">
                            <div>
                                <h3 className="frequent-text">Hola, soy Gabriel</h3>
                                <h6>A lo largo de mi carrera como emprendedor aprendí que el contacto humano, el trabajo en equipo y la comunicación transparente es muy importante para el crecimiento en cualquier área de la vida, incluyendo los negocios, es por eso que quiero que trabajemos de la mejor forma y alcancemos nuestras METAS juntos!</h6>
                                <Accordion atomic={true} className="mb-3">
                                    <AccordionItem className="card-header bg-primary" title="Más información personal">
                                        <DummyContent1 className="active" />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title="Qué medios de pago utilizo?">
                                        <DummyContent2 />
                                    </AccordionItem>
                                </Accordion>
                                <a className="btn btn-default primary-btn mt-4" href="https://web.whatsapp.com/send?phone=541165003611" target="_blank">Contactame por WhatsApp</a>
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