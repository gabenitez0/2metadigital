import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
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

const link = {
    color: 'var(--primary)',
    display: 'block',
    marginTop: 6,
}


const Format = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500
        })
    }, []);
    return (
        <section className="app2 format quality p-t-0">
            <div className="animated-bg"><i></i><i></i><i></i></div>
            <Container>
                <Row>
                    <Col md="6"  className="counters set-order-2">
                        <div className="abouts center-text">
                            <div>
                                <div className="format-head-text">
                                    <h3 className="about-font-header font-secondary">No pierdas más ventas por diseños poco confiables, poco acordes con tu producto o fallas técnicas</h3>
                                </div>
                                <div className="format-sub-text">
                                    <p className="about-para"><i style={icon1}>1.</i> <b>Todos nuestros diseños son de Calidad Profesional y Alto Impacto</b>: <u>lo que genera mayor Atención, mayor Confianza y mayor Conversión.</u> <a href="#proyectos" style={link}>Ver Diseños →</a></p>
                                    <p className="about-para"><i style={icon1}>2.</i> <b>Seleccionamos un diseño exclusivo</b> 100% adaptado a tu producto específico.</p>
                                    <p className="about-para"><i style={icon1}>3.</i> <b>Nuestros servicios incluyen Soporte Técnico y Asesoramiento de Valor</b> para solucionar cualquier falla y resolver cualquier duda.</p>
                                </div>
                                <div>
                                    <h6 className="font-primary m-b-25 text-uppercase"><span><b>PLUS! ► No pierdas dinero:</b> <br/><u>tus ventas tienen 0% de comisiones!</u></span></h6>
                                </div>
                                <a className="btn btn-default btn-gradient mt-4" href="#contacto">Me interesa</a>
                                {/*
                                <ul className="icon-collection">
                                    <li className="about-icon">
                                        <a className="center-content" href="#">
                                            <h4 className="quality">2 M</h4>
                                            <h6 className="users ">user</h6>
                                        </a>
                                    </li>
                                    <li className="about-icon">
                                        <a className="center-content" href="#">
                                            <h4 className="quality">2.5 M</h4>
                                            <h6 className="users">download</h6>
                                        </a>
                                    </li>
                                </ul>*/}
                            </div>
                        </div>
                    </Col>
                    <Col sm="6" md="6"  className="counters set-height overflow-hide m-auto m-b-20 m-t-20">
                        <img alt="" className="img-fluid" loading="lazy" data-aos="fade-left"
                            src="/assets/images/app_landing2/calidad2.webp" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default Format;