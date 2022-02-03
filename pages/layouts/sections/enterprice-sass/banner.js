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
                    <Row className="justify-content-center text-center">
                        <Col lg="6">
                            <div className="center-text">
                                <div>
                                    <div className="header-text">
                                        <h1>Servicios Digitales</h1>
                                    </div>
                                    <div className="header-sub-text">
                                        <h3 className="saas2-sub-text">Para tu <span className="bold-text">Proyecto</span>
                                        </h3>
                                    </div>
                                    <div className="header-sub-text">
                                        <h4 className="bold-text text-white">Potenciemos tu Proyecto con Servicios Profesionales y Diseños Increíbles!</h4>
                                    </div>
                                    <a className="btn btn-default primary-btn transparent" href="#Servicios">Saber más</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <img alt="" className="img-fluid set-abs background-animate"
                    src="/assets/images/saas1/background2.png" />
                <img alt="" className="img-fluid set-abs img1 move-up-down"
                    src="/assets/images/saas2/header-icon/3.png" />
                <img alt="" className="img-fluid set-abs img2 move-right-left"
                    src="/assets/images/saas2/header-icon/2.png" />
                <img alt="" className="img-fluid set-abs img3 move-up-down"
                    src="/assets/images/saas2/header-icon/4.png" />
                <img alt="" className="img-fluid set-abs img4 move-up-down"
                    src="/assets/images/saas2/header-icon/5.png" />
                <img alt="" className="img-fluid set-abs img5 move-right-left"
                    src="/assets/images/saas2/header-icon/7.png" />
                <img alt="" className="img-fluid set-abs img6 move-up-down"
                    src="/assets/images/saas2/header-icon/9.png" />
                <img alt="" className="img-fluid set-abs img7 move-up-down"
                    src="/assets/images/saas2/header-icon/6.png" />
                <div className="set-abs round move-right-left">
                    <img alt="" className="img-fluid img8" src="/assets/images/saas2/header-icon/10.png" />
                    <div className="set-abs inner-circle">
                        <img alt="" className="img-fluid img9" src="/assets/images/saas2/header-icon/8.png" />
                    </div>
                </div>
                <div className="center-content set-abs bottom-content">
                    <div className="bottom">
                        <a className="down" onClick={()=>scrollToRef('Servicios')}>
                            <img alt="" className="img-fluid" src="/assets/images/saas2/header-icon/down.png" />
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