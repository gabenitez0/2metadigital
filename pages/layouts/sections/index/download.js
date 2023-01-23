import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Container,Row,Col} from 'reactstrap'
import Image from 'next/image'

const icon1 = {
    background: 'var(--tertiary)',
    color: 'white',
    padding: 3,
    fontWeight: 600,
    display: 'inline-block',
    width: 20,
    height: 27,
    textAlign: 'center'
}

const link = {
    color: 'var(--tertiary)',
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
                                        <h2 className="mb-4"><u>No dejes que tu negocio se quede atrás</u></h2>
                                        <h3 className="m-b-40"><b>Aprovechá las ventajas de una página web profesional y atraé más clientes.</b></h3>
                                    </div>
                                </div>
                                <div className="information" data-aos="fade-left" data-aos-delay="200">
                                    <p style={{margin: '0 0 30px'}}><i style={icon1}>1.</i> <b>Potencia tu Alcance y Ventas:</b> aparece en Google y vende 24/7 de forma automática.</p>
                                    <p style={{margin: '0 0 30px'}}><i style={icon1}>2.</i> <b>Trabajos de Alta Calidad Profesional:</b> lo que genera más Atracción, más Confianza y más Ventas. <a href="#proyectos" style={link}>Ver Trabajos →</a></p>
                                    <p style={{margin: '0 0 30px'}}><i style={icon1}>3.</i> <b>Soporte Técnico y Asesoramiento:</b> te resolvemos cualquier duda y solucionamos cualquier problema.</p>
                                    <div>
                                        <h6 className="font-primary mb-5 text-uppercase"><span><b>¡Tu página web profesional en solo 7 días!</b> <br/><u>Para Empresas de servicios y tiendas de productos</u></span></h6>
                                    </div>
                                    <a className="btn btn-default mt-4 btnBig" href="#contacto">Me interesa</a>
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
