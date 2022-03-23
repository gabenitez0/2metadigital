import React from 'react'
import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap'

var settings = {
    centerMode: true,
    centerPadding: '140px',
    infinite: true,
    autoplay: true,
    arrows: true,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                centerPadding: "0",
                padding: "0",
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                centerPadding: "160px",
                padding: "20px",
                slidesToScroll: 1,
                centerMode: true,
                autoplay: true,
                dots: true
            }
        }
    ]
};

const ScreenShots = () => {
    return (
        <section className="app1 screenshot bg-theme" id="proyectos">
            <Container>
                <Row>
                    <Col md="10" className="offset-md-1 m-b-10">
                        <div className="title title1">
                            <div className="main-title">
                                <h2 className="text-white">Conocé Algunos De Nuestros Trabajos</h2>
                            </div>
                            <div className="sub-title">
                                <p className="text-white para">Te invitamos a ver la calidad de nuestros trabajos y lo que podemos hacer por vos.</p>
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
}
export default ScreenShots;