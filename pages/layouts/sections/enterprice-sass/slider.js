import React from 'react';
import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap'
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

const SliderSection = () => (
    <section className="saas2 laptop-slider bg-gradient" id="proyectos">
        <Container>
            <Row>
                <Col md="10" className="offset-md-1">
                    <div className="title">
                        <div className="main-title">
                            <h2 className="text-white">Conocé Algunos de nuestros trabajos</h2>
                        </div>
                        <div className="sub-title">
                            <p className="sub-title-para text-white">Te invitamos a ver la calidad de nuestros trabajos y lo que podemos hacer por vos.</p>
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
                                <a href="http://electro.2meta.digital/" target="_blank"><img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/screenshot/1.avif" /></a>
                                </div>
                                <div className="item">
                                <a href="http://ropa.2meta.digital/" target="_blank"><img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/screenshot/2.avif" /></a>
                                </div>
                                <div className="item">
                                <a href="http://muebles.2meta.digital/" target="_blank"><img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/screenshot/3.avif" /></a>
                                </div>
                                <div className="item">
                                <a href="http://cosmeticos.2meta.digital/" target="_blank"><img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/screenshot/4.avif" /></a>
                                </div>
                                <div className="item">
                                <a href="http://mascotas.2meta.digital/" target="_blank"><img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/screenshot/5.avif" /></a>
                                </div>
                                <div className="item">
                                <a href="http://simple.2meta.digital/" target="_blank"><img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/screenshot/6.avif" /></a>
                                </div>
                                <div className="item">
                                <a href="http://deportes.2meta.digital/" target="_blank"><img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/screenshot/7.avif" /></a>
                                </div>
                                <div className="item">
                                <a href="http://farma.2meta.digital/" target="_blank"><img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/screenshot/8.avif" /></a>
                                </div>
                                <div className="item">
                                <a href="http://joyeria.2meta.digital/" target="_blank"><img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/screenshot/9.avif" /></a>
                                </div>
                                <div className="item">
                                <a href="http://fitness.2meta.digital/" target="_blank"><img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/screenshot/10.avif" /></a>
                                </div>
                                <div className="item">
                                <a href="http://mecanica.2meta.digital/" target="_blank"><img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/screenshot/11.avif" /></a>
                                </div>
                                <div className="item">
                                <a href="http://niños.2meta.digital/" target="_blank"><img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/screenshot/12.avif" /></a>
                                </div>
                                <div className="item">
                                <a href="http://libros.2meta.digital/" target="_blank"><img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/screenshot/13.avif" /></a>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)

export default SliderSection;