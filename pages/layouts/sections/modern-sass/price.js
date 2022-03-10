import React, { useState } from 'react';
import Slider from "react-slick";
import {Container,Row,Col} from 'reactstrap'
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: false,
    centerMode: true,
    swipeToSlide: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll:1,
                dots:true
            }
        },
        {
            breakpoint:991,
            settings:{
                slidesToShow:1,
                centerPadding: "160px",
                padding:"20px",
                slidesToScroll:1,
                centerMode:true,
                autoplay:true,
                dots:true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }
    ]
};

var prices = {
    marginLeft: 0,
    textDecoration: 'initial'
}

const Price = () => {
    const [active, setActive] = useState(true);
    const toggleClick = () => {
        setActive(!active)
    }
    return (
        <section className="saas1 pricing" id="plan">
            <Container>
                <Col md="12"  className="text-center">
                    <div className="title">
                        <img alt="title-logo" className="img-fluid" src="/assets/images/saas1/title-logo.png" />
                        <div className="main-title">
                            <h2 className="text-white">
                                <span className="theme-color">P</span>recios <span className="theme-color">Ú</span>nicos
                        </h2>
                        </div>
                        <hr />
                        <div className="sub-title">
                            <p className="p-padding text-white">Estos precios son para latinoamérica, para clientes de otras regiones como USA o Europa, estos precios pueden aumentar entre un 50% a 100%.</p>
                        </div>
                    </div>
                </Col>
            </Container>
            <Container>
                <div className="wrapper-full" id="monthly">
                    <Row>
                        <Col lg="12" md="12" sm="12" xs="12" className="text-center">
                            <Slider className="owl-carousel owl-theme pricing-slider plan-box" {...settings}>
                                <div className="item">
                                    <div className="price-box">
                                        <h3 className="price-heading">Landing Page</h3>
                                        <img alt="pan-line" src="/assets/images/saas1/plan-box.png" />
                                        <h4 className="no-weight">$<span>150</span></h4>
                                        <ul>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />Diseño <span>Profesional</span></li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />Contenido <span>Copywriting</span></li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" /><span>1</span> Página de Aterrizaje</li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" /><span>1</span> Llamada a la Acción</li>
                                        </ul>
                                        <a className="btn btn-default btn-white">Comisión de $60</a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="price-box active">
                                        <h3 className="price-heading">Embudo Ventas</h3>
                                        <img alt="plan-line" src="/assets/images/saas1/plan-box.png" />
                                        <h4 className="no-weight">$<span>200</span></h4>
                                        <ul>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />Diseño <span>Profesional</span></li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />Contenido <span>Copywriting</span></li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" /><span>3</span> Páginas de Aterrizaje</li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" /><span>1</span> Llamada a la Acción</li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />E-mail <span>Marketing</span></li>
                                        </ul>
                                        <a className="btn btn-default btn-white">Comisión de $80</a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="price-box">
                                        <h3 className="price-heading">E-commerce</h3>
                                        <img alt="plan-line" src="/assets/images/saas1/plan-box.png" />
                                        <h4 className="no-weight">$<span>200</span></h4>
                                        <ul>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />Diseño <span>Profesional</span></li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />Contenido <span>Copywriting</span></li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" /><span>1</span> Página de Aterrizaje</li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />E-mail <span>Marketing</span></li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />Sección de <span>Usuarios</span></li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />Panel de <span>Administración</span></li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" /><span>Infinitos</span> Productos, Categorías, etc.</li>
                                        </ul>
                                        <a className="btn btn-default btn-white">Comisión de $80</a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="price-box">
                                        <h3 className="price-heading">Blog / Noticias</h3>
                                        <img alt="plan-line" src="/assets/images/saas1/plan-box.png" />
                                        <h4 className="no-weight">$<span>300</span></h4>
                                        <ul>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />Diseño <span>Profesional</span></li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />Contenido <span>Copywriting</span></li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" /><span>1</span> Página de Aterrizaje</li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />E-mail <span>Marketing</span></li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />Sección de <span>Usuarios</span></li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />Panel de <span>Administración</span></li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" /><span>Infinitos</span> Posts, Páginas, etc.</li>
                                        </ul>
                                        <a className="btn btn-default btn-white">Comisión de $120</a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="price-box">
                                        <h3 className="price-heading">Institucional</h3>
                                        <img alt="plan-line" src="/assets/images/saas1/plan-box.png" />
                                        <h4 className="no-weight">$<span>400</span></h4>
                                        <ul>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />Diseño <span>Profesional</span></li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />Contenido <span>Copywriting</span></li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" /><span>2</span> Páginas de Aterrizaje</li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" /><span>2</span> Llamadas a la Acción</li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" /><span>Varias</span> Secciones</li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />E-mail <span>Marketing</span></li>
                                        </ul>
                                        <a className="btn btn-default btn-white">Comisión de $160</a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="price-box">
                                        <h3 className="price-heading">Institucional +</h3>
                                        <img alt="plan-line" src="/assets/images/saas1/plan-box.png" />
                                        <h4 className="no-weight">$<span>625</span></h4>
                                        <ul>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />Diseño <span>Profesional</span></li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />Contenido <span>Copywriting</span></li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" /><span>2</span> Páginas de Aterrizaje</li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" /><span>2</span> Llamadas a la Acción</li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" /><span>Varias</span> Secciones</li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />E-mail <span>Marketing</span></li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />Panel de <span>Administración</span></li>
                                            <li style={prices}><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" />Incluye <span>Blog y eCommerce</span></li>
                                        </ul>
                                        <a className="btn btn-default btn-white">Comisión de $250</a>
                                    </div>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}


export default Price;