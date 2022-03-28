import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Container,Row,Col} from 'reactstrap'
import Image from 'next/image'

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

const Download = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    }, []);

    return (
        <section className="app1 download">
            <Container>
                <Row>
                    <Col lg="5" md="6">
                        <div className="center-content">
                            <img alt="no pierdas ventas diseños profesionales de alta calidad y alto impacto 2metadigital"
                            loading="lazy"
                            layout="fill"
                            objectFit="contain"
                            className="img-fluid m-b-20"
                            src="/assets/images/app_landing1/tiempo.webp"
                            placeholder="blur"
                            blurDataURL="/assets/images/app_landing1/header-blur.png" 
                            />
                        </div>
                    </Col>
                    <Col lg="6" md="6" className="offset-lg-1">
                        <div className="center-text">
                            <div>
                                <div className="download-img">
                                    <div className="set-relative">
                                        <div className="set-abs elipse center-abs">
                                            <img alt="" loading="lazy" src="/assets/images/app_landing1/download/Ellipse.png" />
                                        </div>
                                    </div>
                                    <div className="center-img-content" data-aos="fade-left">
                                        <h3 className="m-b-40"><b><u>No Pierdas Más Ventas</u> Por Diseños Poco Confiables, Poco Acordes Con Tus Servicios O Fallas Técnicas</b></h3>
                                    </div>
                                </div>
                                <div className="information" data-aos="fade-left" data-aos-delay="200">
                                    <p style={{margin: '0 0 30px'}}><i style={icon1}>1.</i> <b>Todos nuestros diseños son de Calidad Profesional y Alto Impacto</b>: <u>lo que genera mayor Atención, mayor Confianza y mayor Conversión.</u> <a href="#proyectos" style={link}>Ver Diseños →</a></p>
                                    <p style={{margin: '0 0 30px'}}><i style={icon1}>2.</i> <b>Seleccionamos un diseño exclusivo</b> 100% adaptado a tu producto o servicio específico.</p>
                                    <p style={{margin: '0 0 30px'}}><i style={icon1}>3.</i> <b>Nuestros servicios incluyen Soporte Técnico y Asesoramiento de Valor</b> para solucionar cualquier falla y resolver cualquier duda.</p>
                                    <div>
                                        <h6 className="font-primary m-b-25 text-uppercase"><span><b>PLUS! ► No pierdas tiempo:</b> <br/><u>Hacemos todo esto por vos!</u></span></h6>
                                    </div>
                                    <a className="btn btn-default btn-gradient mt-4" href="#contacto">Me interesa</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}



export default Download;