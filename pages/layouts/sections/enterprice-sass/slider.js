import React from 'react';
import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap'
var settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [ 
        { 
            breakpoint: 359, 
            settings: { slidesToShow: 1 } 
        }, 
        { 
            breakpoint: 479, 
            settings: { slidesToShow: 2 } 
        }, 
        { 
            breakpoint: 1024, 
            settings: { slidesToShow: 3 } 
        }
    ]
  };

const SliderSection = () => (
    <section className="saas2 laptop-slider bg-gradient" id="proyectos">
        <Container>
            <Row>
                <Col md="10" className="offset-md-1">
                    <div className="title m-b-0">
                        <div className="main-title">
                            <h2 className="text-white">Conocé Algunos de nuestros trabajos</h2>
                        </div>
                        <div className="sub-title">
                            <p className="sub-title-para text-white">Te invitamos a ver la calidad de nuestros trabajos y lo que podemos hacer por vos.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container fluid={true}>
            <div className="slider-container">
                    <Slider className="screenshot-slider" {...settings}>
                        <div className="item">
                            <a href="http://electro.2meta.digital/" target="_blank"><img alt="" className="img-fluid" src="/assets/images/app_landing2/screenshot/1.jpg" /></a>
                        </div>
                        <div className="item">
                        <a href="http://ropa.2meta.digital/" target="_blank"><img alt="" className="img-fluid" src="/assets/images/app_landing2/screenshot/2.jpg" /></a>
                        </div>
                        <div className="item">
                        <a href="http://muebles.2meta.digital/" target="_blank"><img alt="" className="img-fluid" src="/assets/images/app_landing2/screenshot/3.jpg" /></a>
                        </div>
                        <div className="item">
                        <a href="http://cosmeticos.2meta.digital/" target="_blank"><img alt="" className="img-fluid" src="/assets/images/app_landing2/screenshot/4.jpg" /></a>
                        </div>
                        <div className="item">
                        <a href="http://mascotas.2meta.digital/" target="_blank"><img alt="" className="img-fluid" src="/assets/images/app_landing2/screenshot/5.jpg" /></a>
                        </div>
                        <div className="item">
                        <a href="http://simple.2meta.digital/" target="_blank"><img alt="" className="img-fluid" src="/assets/images/app_landing2/screenshot/6.jpg" /></a>
                        </div>
                        <div className="item">
                        <a href="http://deportes.2meta.digital/" target="_blank"><img alt="" className="img-fluid" src="/assets/images/app_landing2/screenshot/7.jpg" /></a>
                        </div>
                        <div className="item">
                        <a href="http://farma.2meta.digital/" target="_blank"><img alt="" className="img-fluid" src="/assets/images/app_landing2/screenshot/8.jpg" /></a>
                        </div>
                        <div className="item">
                        <a href="http://joyeria.2meta.digital/" target="_blank"><img alt="" className="img-fluid" src="/assets/images/app_landing2/screenshot/9.jpg" /></a>
                        </div>
                        <div className="item">
                        <a href="http://fitness.2meta.digital/" target="_blank"><img alt="" className="img-fluid" src="/assets/images/app_landing2/screenshot/10.jpg" /></a>
                        </div>
                        <div className="item">
                        <a href="http://mecanica.2meta.digital/" target="_blank"><img alt="" className="img-fluid" src="/assets/images/app_landing2/screenshot/11.jpg" /></a>
                        </div>
                        <div className="item">
                        <a href="http://niños.2meta.digital/" target="_blank"><img alt="" className="img-fluid" src="/assets/images/app_landing2/screenshot/12.jpg" /></a>
                        </div>
                        <div className="item">
                        <a href="http://libros.2meta.digital/" target="_blank"><img alt="" className="img-fluid" src="/assets/images/app_landing2/screenshot/13.jpg" /></a>
                        </div>
                    </Slider>
            </div>
        </Container>
    </section>
)

export default SliderSection;