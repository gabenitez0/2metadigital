import React, {useEffect} from 'react'
import {Container,Row,Col} from 'reactstrap';
import Image from 'next/image';

const Banner = ({link}) => {

    return (
    <section className="app1 header" id="home">
        <div className="app1-header bg">
            <Container>
                <Row>
                    <Col lg="6" md="7">
                        <div className="center-text" style={{marginTop: 50}}>
                            <div>
                                <div className="header-text">
                                    <h1><b>Transformá tu negocio con una página web profesional y atractiva: atraé más clientes y aumentá tus ventas hoy!</b></h1>
                                </div>
                                <div className="mb-5">
                                    <p className="text-white p-light">No pierdas más oportunidades de negocio: obtené una página web profesional y <b style={{fontWeight:600}}>destacá entre la competencia</b>.</p>
                                </div>
                                    <a className="btn btn-default btn-white btnBig" href={link} onClick={() => fbq('track', 'Lead')} target="_blank">Me interesa <i aria-hidden="true" className="fa fa-whatsapp m-l-5"></i></a>
                            </div>
                        </div>
                    </Col>
                    <Col xl="5" lg="6" md="4">
                        <div className="img-mobile set-abs" style={{bottom: '0'}}>
                            <Image alt="pagina web profesional metadigital"
                            data-aos="fade-left"
                            height={661}
                            width={450}
                            layout="fixed"
                            style={{maxHeight: '100vh'}}
                            src="/assets/images/app_landing1/header.webp"
                            quality={100}
                            placeholder="blur"
                            blurDataURL="/assets/images/app_landing1/header-blur.png"
                            />
                        </div>
                    </Col>
                    <div className="squares">
                        <img alt="" className="img-fluid img-1 set-abs" src="/assets/images/app_landing1/Ellipse.png" />
                        <img alt="" className="img-fluid img-2 set-abs" src="/assets/images/app_landing1/Ellipse.png" />
                    </div>
                    <div className="animation-circle-inverse">
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </Row>
            </Container>
        </div>
        <style jsx global>{`
            .btnBig {
                display: block;
                max-width: 300px;
                text-transform: uppercase;
                font-weight: 600;
                font-size: calc(13.5px + 3 * (100vw - 300px) / 1620);
            }
            @media only screen and (max-width: 767px){
                .btnBig {
                    margin: auto;
                }
            }
            @media only screen and (max-width: 500px){
                .btnBig {
                    max-width: none;
                }
            }
        `}</style>
    </section>
)
}

export default Banner;
