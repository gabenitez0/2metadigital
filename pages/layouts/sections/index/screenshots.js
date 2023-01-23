import React from 'react'
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

const ScreenShots = () => {
    return (
        <section className="app1 screenshot bg-theme" id="proyectos">
            <Container>
                <Row>
                    <Col md="10" className="offset-md-1 m-b-10">
                        <div className="title title1">
                            <div className="main-title">
                                <h2 className="text-white mb-4">Trabajos de alta calidad</h2>
                            </div>
                            <div className="sub-title">
                                <p className="text-white para">Te invitamos a ver la calidad de nuestros trabajos y lo que podemos hacer por vos. Contactanos para ver en más detalle.</p>
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
                                    <a href="https://latitud34desarrollos.com" target="_blank">
                                        <picture>
                                            <source srcSet="/assets/images/app_landing1/screen-shot/1.avif" type="image/avif" />
                                            <img className="img-fluid" decoding="async" loading="lazy" src="/assets/images/app_landing1/screen-shot/1.jpg" alt="" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="#!">
                                        <picture>
                                            <source srcSet="/assets/images/app_landing1/screen-shot/1.avif" type="image/avif" />
                                            <img className="img-fluid" decoding="async" loading="lazy" src="/assets/images/app_landing1/screen-shot/1.jpg" alt="" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="#!">
                                        <picture>
                                            <source srcSet="/assets/images/app_landing1/screen-shot/2.avif" type="image/avif" />
                                            <img className="img-fluid" decoding="async" loading="lazy" src="/assets/images/app_landing1/screen-shot/2.jpg" alt="" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="#!">
                                        <picture>
                                            <source srcSet="/assets/images/app_landing1/screen-shot/3.avif" type="image/avif" />
                                            <img className="img-fluid" decoding="async" loading="lazy" src="/assets/images/app_landing1/screen-shot/3.jpg" alt="" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="#!">
                                        <picture>
                                            <source srcSet="/assets/images/app_landing1/screen-shot/4.avif" type="image/avif" />
                                            <img className="img-fluid" decoding="async" loading="lazy" src="/assets/images/app_landing1/screen-shot/4.jpg" alt="" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="#!">
                                        <picture>
                                            <source srcSet="/assets/images/app_landing1/screen-shot/5.avif" type="image/avif" />
                                            <img className="img-fluid" decoding="async" loading="lazy" src="/assets/images/app_landing1/screen-shot/5.jpg" alt="" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="#!">
                                        <picture>
                                            <source srcSet="/assets/images/app_landing1/screen-shot/6.avif" type="image/avif" />
                                            <img className="img-fluid" decoding="async" loading="lazy" src="/assets/images/app_landing1/screen-shot/6.jpg" alt="" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="#!">
                                        <picture>
                                            <source srcSet="/assets/images/app_landing1/screen-shot/7.avif" type="image/avif" />
                                            <img className="img-fluid" decoding="async" loading="lazy" src="/assets/images/app_landing1/screen-shot/7.jpg" alt="" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="#!">
                                        <picture>
                                            <source srcSet="/assets/images/app_landing1/screen-shot/8.avif" type="image/avif" />
                                            <img className="img-fluid" decoding="async" loading="lazy" src="/assets/images/app_landing1/screen-shot/8.jpg" alt="" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="#!">
                                        <picture>
                                            <source srcSet="/assets/images/app_landing1/screen-shot/9.avif" type="image/avif" />
                                            <img className="img-fluid" decoding="async" loading="lazy" src="/assets/images/app_landing1/screen-shot/9.jpg" alt="" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="#!">
                                        <picture>
                                            <source srcSet="/assets/images/app_landing1/screen-shot/10.avif" type="image/avif" />
                                            <img className="img-fluid" decoding="async" loading="lazy" src="/assets/images/app_landing1/screen-shot/10.jpg" alt="" />
                                        </picture>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="#!">
                                        <picture>
                                            <source srcSet="/assets/images/app_landing1/screen-shot/11.avif" type="image/avif" />
                                            <img className="img-fluid" decoding="async" loading="lazy" src="/assets/images/app_landing1/screen-shot/11.jpg" alt="" />
                                        </picture>
                                    </a>
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
