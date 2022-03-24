import React from 'react'
import Slider from "react-slick";
import {Container,Row,Col} from 'reactstrap'
var settings = {
    centerMode: true,
    centerPadding: '10px',
    padding: "10px",
    infinite: true,
    autoplay: true,
    arrows: true,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                arrows: false,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
            }
        }
    ]
};

const Screenshot = () => (

    <section className="app2 screenshot p-t-0" id="proyectos">
        <div className="animated-bg"><i></i><i></i><i></i></div>
        <Container>
            <Row>
                <Col md="10" className="offset-md-1">
                    <div className="title title2">
                        <img alt="" className="img-fluid title-img" src="/assets/images/app_landing2/service/proyectos.png" />
                        <h6 className="font-primary borders main-text"><span>DISEÑOS DE ALTA CALIDAD Y ALTO IMPACTO</span></h6>
                        <div className="sub-title">
                            <h2 className="title-text text-capitalize text-center">El Diseño de Tienda Online que tu negocio necesita</h2>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="set-relative">
                <Col xs="12">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <Slider className="screenshot-slider" style={{marginTop:0}} {...settings}>
                                <div className="item">
                                <a href="http://electro.2meta.digital/" target="_blank"><img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/screenshot/1.jpg" /></a>
                                </div>
                                <div className="item">
                                <a href="http://ropa.2meta.digital/" target="_blank"><img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/screenshot/2.jpg" /></a>
                                </div>
                                <div className="item">
                                <a href="http://muebles.2meta.digital/" target="_blank"><img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/screenshot/3.jpg" /></a>
                                </div>
                                <div className="item">
                                <a href="http://cosmeticos.2meta.digital/" target="_blank"><img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/screenshot/4.jpg" /></a>
                                </div>
                                <div className="item">
                                <a href="http://mascotas.2meta.digital/" target="_blank"><img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/screenshot/5.jpg" /></a>
                                </div>
                                <div className="item">
                                <a href="http://simple.2meta.digital/" target="_blank"><img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/screenshot/6.jpg" /></a>
                                </div>
                                <div className="item">
                                <a href="http://deportes.2meta.digital/" target="_blank"><img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/screenshot/7.jpg" /></a>
                                </div>
                                <div className="item">
                                <a href="http://farma.2meta.digital/" target="_blank"><img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/screenshot/8.jpg" /></a>
                                </div>
                                <div className="item">
                                <a href="http://joyeria.2meta.digital/" target="_blank"><img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/screenshot/9.jpg" /></a>
                                </div>
                                <div className="item">
                                <a href="http://fitness.2meta.digital/" target="_blank"><img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/screenshot/10.jpg" /></a>
                                </div>
                                <div className="item">
                                <a href="http://mecanica.2meta.digital/" target="_blank"><img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/screenshot/11.jpg" /></a>
                                </div>
                                <div className="item">
                                <a href="http://niños.2meta.digital/" target="_blank"><img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/screenshot/12.jpg" /></a>
                                </div>
                                <div className="item">
                                <a href="http://libros.2meta.digital/" target="_blank"><img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/screenshot/13.jpg" /></a>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>

)


export default Screenshot;