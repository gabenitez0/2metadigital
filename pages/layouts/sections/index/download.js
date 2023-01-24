import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Container,Row,Col} from 'reactstrap'
import Image from 'next/image'

const icon1 = {
    background: 'var(--tertiary)',
    color: 'white',
    padding: 3,
    fontWeight: 800,
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
        <section className="app1 download" id="paginasweb">
            <Container>
                <Row>
                    <Col lg="6" md="6" sm="6" xs="10" className="m-auto">
                        <div className="center-content">
                            <img alt="no pierdas ventas diseños profesionales 2metadigital"
                            loading="lazy"
                            layout="fill"
                            objectFit="contain"
                            className="img-fluid m-b-20 m-auto"
                            src="/assets/images/app_landing1/tiempo.webp"
                            placeholder="blur"
                            blurDataURL="/assets/images/app_landing1/header-blur.png"
                            />
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="center-text">
                            <div>
                                <div className="download-img">
                                    <div className="set-relative">
                                        <div className="set-abs elipse center-abs">
                                            <img alt="" loading="lazy" src="/assets/images/app_landing1/download/Ellipse.png" />
                                        </div>
                                    </div>
                                    <div className="center-img-content" data-aos="fade-left">
                                        <h2 className="mb-4"><u>¿Cómo hacemos las páginas web para nuestros clientes?</u></h2>
                                        <h3 className="mb-5"><b>Nuestra propuesta es diferente, hacemos páginas webs enfocadas a resultados.</b></h3>
                                    </div>
                                </div>
                                <div className="information mt-2" data-aos="fade-left" data-aos-delay="200">
                                    <p className="mb-4">
                                        <i aria-hidden="true" style={{color:"var(--tertiary)"}} class="fa fa-check-square-o mr-2"></i>
                                        <b>Optimización para Google:</b> tu página web aparecerá en los resultados de búsqueda para <b>aumentar tu alcance y clientes potenciales.</b></p>
                                    <p className="mb-4">
                                        <i aria-hidden="true" style={{color:"var(--tertiary)"}} class="fa fa-check-square-o mr-2"></i>
                                        <b>Diseños de Alta Calidad:</b> realizamos diseños que impactan visualmente y redacción de textos para <b>aumentar ventas y conversiones.</b></p>
                                    <p className="mb-4">
                                        <i aria-hidden="true" style={{color:"var(--tertiary)"}} class="fa fa-check-square-o mr-2"></i>
                                        <b>Enfocadas a Ventas:</b> hacemos páginas web preparadas para campañas de publicidad con Google Ads, Analytics, Meta Ads y Pixel.</p>
                                    <p className="mb-5">
                                        <i aria-hidden="true" style={{color:"var(--tertiary)"}} class="fa fa-check-square-o mr-2"></i>
                                        <b>Funcionalidades específicas:</b> hacemos lo que tu negocio necesite, formularios de contacto, chats en vivo, carrito de compras, y más!</p>
                                    <div>
                                        <h4 className="font-primary mb-5"><b>Todo esto,<br/><span style={{color:"var(--tertiary)"}}>¡En solo en 7 días!</span></b></h4>
                                    </div>
                                    {/*<a className="btn btn-default mt-4 btnBig" href="#contacto">Me interesa</a>*/}
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
