import React from 'react';
import Slider from "react-slick";
import { BrandData } from '../../../../database/layouts/enterprice/database';
import { Container, Row, Col } from 'reactstrap'


const LeftNavButton = (props) => {
    const {style, onClick} = props
    return (
        <div
            className="slick-arrow"
            style={{...style,marginLeft:'0%'}}
            onClick={onClick}
        >
            <img src="/assets/images/music/gallery/gallery-icon/left.png" alt="arrow_left"/>
        </div>
    );
}

const RightNavButton = (props) => {
    const {style, onClick} = props
    return (
        <div
            className="slick-arrow"
            style={{...style, display: 'block',marginLeft:'95.5%'}}
            onClick={onClick}
        >
            <img src="/assets/images/music/gallery/gallery-icon/right.png" alt="arrow_left"/>
        </div>
    );
}

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <LeftNavButton />,
    nextArrow: <RightNavButton />,
};
const Brand = () => (
    <section className="saas2 brand">
        <Col md="8" xs="12" className='m-auto'>
            <Container className="saas2-services">
                <Row>
                    <Col md="10" className="offset-md-1">
                        <div className="title">
                            <div className="main-title">
                                <h2>Qué dicen nuestros clientes</h2>
                            </div>
                            <div className="sub-title">
                                <p className="sub-title-para">Creemos que la relación y satisfacción de los clientes es muy importante para el crecimiento de cualquier proyecto o negocio a mediano y largo plazo.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12">
                    <Slider className="testimonial" id="testimonial" {...settings}>
                        <div className="item p-t-30">
                            <Col lg="10" xs="12" className="offset-lg-1">
                                <Row>
                                    <Col sm="3">
                                        <div className="testimonial-msg set-relative">
                                            <img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/team/2.png" />
                                        </div>
                                    </Col>
                                    <Col sm="9">
                                        <div className="quote-margin">
                                            <div className="quotes set-relative m-b-30">
                                                <div className="quote-text">
                                                    <h6>Un espectáculo. Muy buen laburo. Te quedó muy bien.</h6>
                                                </div>
                                            </div>
                                            <div className="rating align-items-center">
                                                <div className="stars">
                                                    <ul>
                                                        <li>
                                                            <i aria-hidden="true" className="fa fa-star yellow"></i>
                                                            <i aria-hidden="true" className="fa fa-star yellow"></i>
                                                            <i aria-hidden="true" className="fa fa-star yellow"></i>
                                                            <i aria-hidden="true" className="fa fa-star yellow"></i>
                                                            <i aria-hidden="true" className="fa fa-star yellow"></i>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h5 className="name">Claudio - <span> CEO Latitud34 Desarrollos Urbanos</span></h5>
                                            </div>
                                        </div>
                                    </Col>
                                    <div>
                                    </div>
                                </Row>
                            </Col>
                        </div>
                        <div className="item p-t-30">
                            <Col lg="10" xs="12" className="offset-lg-1">
                                <Row>
                                    <Col sm="3">
                                        <div className=" testimonial-msg set-relative">
                                            <img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/team/1.png" />
                                        </div>
                                    </Col>
                                    <Col sm="9">
                                        <div className="quote-margin">
                                            <div className="quotes set-relative m-b-20">
                                                
                                                <div className="quote-text">
                                                    <h6>10/10, profesional y rápido. El precio es más que justo. Definitivamente lo recomendaría.</h6>
                                                </div>
                                                
                                            </div>
                                            <div className="rating align-items-center">
                                                <div className="stars">
                                                    <ul>
                                                        <li>
                                                            <i aria-hidden="true" className="fa fa-star yellow"></i>
                                                            <i aria-hidden="true" className="fa fa-star yellow"></i>
                                                            <i aria-hidden="true" className="fa fa-star yellow"></i>
                                                            <i aria-hidden="true" className="fa fa-star yellow"></i>
                                                            <i aria-hidden="true" className="fa fa-star yellow"></i>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h5 className="name">Steven - <span> CEO InfriaMC</span></h5>
                                            </div>
                                        </div>
                                    </Col>
                                    <div>
                                    </div>
                                </Row>
                            </Col>
                        </div>
                        <div className="item p-t-30">
                            <Col lg="10" xs="12" className="offset-lg-1">
                                <Row>
                                    <Col sm="2">
                                        <div className=" testimonial-msg set-relative">
                                            <img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/team/3.jpg" />
                                        </div>
                                    </Col>
                                    <Col sm="9">
                                        <div className="quote-margin">
                                            <div className="quotes set-relative m-b-20">
                                                
                                                <div className="quote-text">
                                                    <h6>Excelente trabajo, me gustó el diseño.</h6>
                                                </div>
                                                
                                            </div>
                                            <div className="rating align-items-center">
                                                <div className="stars">
                                                    <ul>
                                                        <li>
                                                            <i aria-hidden="true" className="fa fa-star yellow"></i>
                                                            <i aria-hidden="true" className="fa fa-star yellow"></i>
                                                            <i aria-hidden="true" className="fa fa-star yellow"></i>
                                                            <i aria-hidden="true" className="fa fa-star yellow"></i>
                                                            <i aria-hidden="true" className="fa fa-star yellow"></i>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h5 className="name">Manuel - <span> CEO Dallas Showroom</span></h5>
                                            </div>
                                        </div>
                                    </Col>
                                    <div>
                                    </div>
                                </Row>
                            </Col>
                        </div>
                        <div className="item p-t-30">
                            <Col lg="10" xs="12" className="offset-lg-1">
                                <Row>
                                    <Col sm="3">
                                        <div className=" testimonial-msg set-relative">
                                            <img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing2/team/4.png" />
                                        </div>
                                    </Col>
                                    <Col sm="9">
                                        <div className="quote-margin">
                                            <div className="quotes set-relative m-b-20">
                                                
                                                <div className="quote-text">
                                                    <h6>El diseño del logotipo quedó increíble, cumplio con mis expectativas y lo recomiendo.</h6>
                                                </div>
                                                
                                            </div>
                                            <div className="rating align-items-center">
                                                <div className="stars">
                                                    <ul>
                                                        <li>
                                                            <i aria-hidden="true" className="fa fa-star yellow"></i>
                                                            <i aria-hidden="true" className="fa fa-star yellow"></i>
                                                            <i aria-hidden="true" className="fa fa-star yellow"></i>
                                                            <i aria-hidden="true" className="fa fa-star yellow"></i>
                                                            <i aria-hidden="true" className="fa fa-star yellow"></i>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h5 className="name">Julian - <span> CoOwner CapitalMC</span></h5>
                                            </div>
                                        </div>
                                    </Col>
                                    <div>
                                    </div>
                                </Row>
                            </Col>
                        </div>
                    </Slider>
                    </Col>
                </Row>
            </Container>
        </Col>
    </section>
)

export default Brand;