import React from 'react';
import Slider from "react-slick";
import {Container,Row,Col} from 'reactstrap'
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
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
    <section className="saas1 build-bg">
        <div className="build-right-slider">
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
        </div>
        <Container>
            <Row>
                <Col lg="6">
                    <div className="build-box">
                        <h3 className="build-head text-white">Vende Productos de<span className="theme-color"> Alta Calidad</span></h3>
                        <p>Ofrecemos una gama de productos y servicios de desarrollo web, diseño gráfico y redes sociales de máxima calidad, ultra optimizados y a precios inmejorables.</p>
                        <ul>
                            <li className="text-white"><img alt="icon" src="/assets/images/saas1/build-.png" />Embudos de Venta</li>
                            <li className="text-white"><img alt="icon" src="/assets/images/saas1/build-.png" />Páginas eCommerce</li>
                            <li className="text-white"><img alt="icon" src="/assets/images/saas1/build-.png" />Páginas de Aterrizaje</li>
                            <li className="text-white"><img alt="icon" src="/assets/images/saas1/build-.png" />Páginas Institucionales</li>
                            <li className="text-white"><img alt="icon" src="/assets/images/saas1/build-.png" />Páginas de Noticias / Blog</li>
                            <li className="text-white"><img alt="icon" src="/assets/images/saas1/build-.png" />Diseño para Redes Sociales</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>

    </section>
)

export default Build;