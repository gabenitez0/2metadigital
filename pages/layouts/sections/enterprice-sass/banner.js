import React from 'react';
import {Container,Row,Col} from 'reactstrap';

const Banner = ({link}) => {
    const scrollToRef = (val) => {
        document.querySelector(`#${val}`).scrollIntoView({behavior: 'smooth' });
      }
        return(
    <section className="saas2 header" id="home">
        <div className="saas2-content ">
            <div className="bg saas2-bg">
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className="center-text">
                                <div>
                                    <div className="header-text">
                                        <h1 style={{lineHeight:1.2}}><b>El siguiente paso para tu negocio: impacto y profesionalismo</b></h1>
                                    </div>
                                    {/*<div className="header-sub-text">
                                        <h3 className="saas2-sub-text">Los clientes se sienten más seguros </h3>
                                    </div>*/}
                                    <div className="header-sub-text">
                                        <p className="sub-para text-white">El salto de calidad y profesional que necesita tu negocio, lo conseguimos con diseños de alto impacto y redacciones persuasivas que transmiten el valor de tu producto o servicio.</p>
                                    </div>
                                    <div className="link-horizontal">
                                        <ul>
                                            <li>
                                                <a className="btn btn-default btn-white" href={link} target="_blank">Contactar ahora</a>
                                            </li>
                                            <li>
                                                <a className="btn btn-default primary-btn transparent" href="#calidad">más info</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <div className="center-text set-abs" style={{right:'-6%', zIndex: 1}}>
                            <img alt="mockup header celular con web institucional alto impacto 2metadigital"
                            className="img-fluid img-dextop"
                            style={{maxHeight:'90vh', minHeight:'85vh'}}
                            src="/assets/images/saas2/header.webp"
                            data-aos="fade-left"
                            />
                        </div>
                    </Row>
                </Container>

                <img alt="" className="img-fluid set-abs background-animate" loading="lazy"
                    src="/assets/images/saas1/background22.webp" />
                <img alt="" className="img-fluid set-abs img1 move-up-down" loading="lazy"
                    src="/assets/images/saas2/header-icon/3.png" />
                <img alt="" className="img-fluid set-abs img2 move-right-left" loading="lazy"
                    src="/assets/images/saas2/header-icon/2.png" />
                <img alt="" className="img-fluid set-abs img3 move-up-down" loading="lazy"
                    src="/assets/images/saas2/header-icon/4.png" />
                <img alt="" className="img-fluid set-abs img4 move-up-down" loading="lazy"
                    src="/assets/images/saas2/header-icon/5.png" />
                <img alt="" className="img-fluid set-abs img5 move-right-left" loading="lazy"
                    src="/assets/images/saas2/header-icon/7.png" />
                <img alt="" className="img-fluid set-abs img6 move-up-down" loading="lazy"
                    src="/assets/images/saas2/header-icon/9.png" />
                <img alt="" className="img-fluid set-abs img7 move-up-down" loading="lazy"
                    src="/assets/images/saas2/header-icon/6.png" />
                <div className="set-abs round move-right-left">
                    <img alt="" className="img-fluid img8" loading="lazy" src="/assets/images/saas2/header-icon/10.png" />
                    <div className="set-abs inner-circle">
                        <img alt="" className="img-fluid img9" loading="lazy" src="/assets/images/saas2/header-icon/8.png" />
                    </div>
                </div>
                <div className="center-content set-abs bottom-content">
                    <div className="bottom">
                        <a className="down" onClick={()=>scrollToRef('calidad')}>
                            <img alt="" className="img-fluid" loading="lazy" src="/assets/images/saas2/header-icon/down.png" />
                        </a>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
        </div>
    </section>
)}
export default Banner;