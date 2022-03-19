import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const Banner = () => {
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
                                        <h1>El siguiente paso para tu negocio es de calidad e impacto</h1>
                                    </div>
                                    {/*<div className="header-sub-text">
                                        <h3 className="saas2-sub-text">Los clientes se sienten más seguros </h3>
                                    </div>*/}
                                    <div className="header-sub-text">
                                        <p className="sub-para text-white">Si ya tenés una página web pero querés mejorarla para que tus clientes perciban el profesionalismo de tu negocio y también generar mayor confianza, atención y ventas, estás en el lugar indicado.</p>
                                    </div>
                                    <div className="link-horizontal">
                                        <ul>
                                            <li>
                                                <a className="btn btn-default btn-white" href="https://web.whatsapp.com/send?phone=541165003611" target="_blank">Contactar ahora</a>
                                            </li>
                                            <li>
                                                <a className="btn btn-default primary-btn transparent" href="#calidad">más info</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <div className="center-text set-abs">
                            <img alt="" className="img-fluid img-dextop" loading="lazy" src="/assets/images/saas2/dextop2.png" />
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