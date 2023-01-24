import React from 'react';
import Slider from "react-slick";
import {Container,Row,Col} from 'reactstrap'
var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: { slidesToShow: 1 }
        },
        {
            breakpoint: 1024,
            settings: { slidesToShow: 1 }
        }
    ]
};

const Build = () => (
    <section className="saas1 build-bg" id="casosexito">
        {/*<div className="build-right-slider">
            <Slider className="owl-carousel owl-theme sync2" id="sync2" {...settings}>
                <div className="item">
                    <img alt="work-slider" className="img-fluid work-slide" src="/assets/images/saas1/work.png" />
                </div>
                <div className="item">
                    <img alt="work-slider" className="img-fluid work-slide" src="/assets/images/saas1/work.png" />
                </div>
                <div className="item">
                    <img alt="work-slider" className="img-fluid work-slide" src="/assets/images/saas1/work.png" />
                </div>
            </Slider>
        </div>*/}
        <Container>
            <Row>
                <Col md="10" className="offset-md-1 mb-4">
                    <div className="title title1 mt-1">
                        <div className="main-title">
                            <h2 className="mb-2"><span className="theme-color">Casos de éxito</span></h2>
                        </div>
                        <div className="sub-title">
                            <h4 className="para text-white">Te invitamos a ver la calidad de nuestros trabajos y lo que podemos hacer por vos por un precio muy bajo.</h4>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg="12">
                    <Slider className="sync1 owl-carousel owl-theme" id="sync1" {...settings}>
                        <div className="item">
                            <Row>
                            <Col lg="6">
                                <img alt="work-slider" className="img-fluid work-slide m-auto" src="/assets/images/saas1/casos/latitud34.png" />
                            </Col>
                            <Col lg="6">
                            <div className="build-box">
                                <h3 className="build-head text-white">Latitud 34 Desarrollos Urbanos</h3>
                                <p>Empresa que realiza urbanizaciones residenciales y ofrece servicios de comercialización de lotes, movimiento de suelo, arquitectura, entre otros.</p>
                                <ul>
                                    <li><i aria-hidden="true" style={{color:"var(--green)"}} class="fa fa-check-circle mr-1"></i> Optimización para dispositivos móviles y PC</li>
                                    <li><i aria-hidden="true" style={{color:"var(--green)"}} class="fa fa-check-circle mr-1"></i> Optimización para Google y motores de búsqueda</li>
                                    <li><i aria-hidden="true" style={{color:"var(--green)"}} class="fa fa-check-circle mr-1"></i> Generación de contenido de la página y secciones</li>
                                    <li><i aria-hidden="true" style={{color:"var(--green)"}} class="fa fa-check-circle mr-1"></i> Web Institucional con 3 secciones y 3 departamentos</li>
                                    <li><i aria-hidden="true" style={{color:"var(--green)"}} class="fa fa-check-circle mr-1"></i> Dominio + SSL + Web Hosting + Mantenimiento</li>
                                    <li><a href="https://latitud34desarrollos.com" target="_blank" class="btn btn-default mt-4">Visitar sitio web <i class="fa fa-external-link ml-1" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                            </Col>
                            </Row>
                        </div>
                        <div className="item">
                        <Row>
                            <Col lg="6">
                                <img alt="work-slider" className="img-fluid work-slide m-auto" src="/assets/images/saas1/casos/apartkatriel.png" />
                            </Col>
                            <Col lg="6">
                            <div className="build-box">
                                <h3 className="build-head text-white">Apart Katriel</h3>
                                <p>Emprendimiento familiar dedicado al alquiler de departamentos temporarios en Puerto Iguazú ciudad turística.</p>
                                <ul>
                                    <li><i aria-hidden="true" style={{color:"var(--green)"}} class="fa fa-check-circle mr-1"></i> Optimización para dispositivos móviles y PC</li>
                                    <li><i aria-hidden="true" style={{color:"var(--green)"}} class="fa fa-check-circle mr-1"></i> Optimización para Google y motores de búsqueda</li>
                                    <li><i aria-hidden="true" style={{color:"var(--green)"}} class="fa fa-check-circle mr-1"></i> Generación de contenido de la página y secciones</li>
                                    <li><i aria-hidden="true" style={{color:"var(--green)"}} class="fa fa-check-circle mr-1"></i> Web Institucional con 4 secciones y 3 proyectos</li>
                                    <li><i aria-hidden="true" style={{color:"var(--green)"}} class="fa fa-check-circle mr-1"></i> Dominio + SSL + Web Hosting + Mantenimiento</li>
                                    <li><a href="https://apartkatriel.com.ar" target="_blank" class="btn btn-default mt-4">Visitar sitio web <i class="fa fa-external-link ml-1" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                            </Col>
                            </Row>
                        </div>
                        <div className="item">
                            <Row>
                            <Col lg="6">
                                <img alt="work-slider" className="img-fluid work-slide m-auto" src="/assets/images/saas1/casos/barba.png" />
                            </Col>
                            <Col lg="6">
                            <div className="build-box">
                                <h3 className="build-head text-white">Minoxidil Argentina</h3>
                                <p>Ecommerce dedicado a la venta del producto minoxidil Kirkland en argentina.</p>
                                <ul>
                                    <li><i aria-hidden="true" style={{color:"var(--green)"}} class="fa fa-check-circle mr-1"></i> Anuncios en Google con resultados de ventas</li>
                                    <li><i aria-hidden="true" style={{color:"var(--green)"}} class="fa fa-check-circle mr-1"></i> Optimización para dispositivos móviles y PC</li>
                                    <li><i aria-hidden="true" style={{color:"var(--green)"}} class="fa fa-check-circle mr-1"></i> Optimización para Google y motores de búsqueda</li>
                                    <li><i aria-hidden="true" style={{color:"var(--green)"}} class="fa fa-check-circle mr-1"></i> Generación de contenido de la página y productos</li>
                                    <li><i aria-hidden="true" style={{color:"var(--green)"}} class="fa fa-check-circle mr-1"></i> Web Ecommerce con 4 productos</li>
                                    <li><i aria-hidden="true" style={{color:"var(--green)"}} class="fa fa-check-circle mr-1"></i> Dominio + SSL + Web Hosting + Mantenimiento</li>
                                    <li><a href="https://barba.com.ar" target="_blank" class="btn btn-default mt-4">Visitar sitio web <i class="fa fa-external-link ml-1" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                            </Col>
                            </Row>
                        </div>
                    </Slider>
                </Col>
            </Row>
        </Container>

    </section>
)

export default Build;
