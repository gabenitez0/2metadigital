import React, {useEffect} from 'react'
import {Container,Row,Col} from 'reactstrap';
import Image from 'next/image'

const icon1 = {
    color: '#fff',
    fontSize: 20,
    marginRight: 20,
    marginTop: 5,
}


const About = () => {
return (
    <section className="app1 about bg-theme">
        <Container>
            <Row>
                <Col lg="7">
                    <div className="title title mb-5">
                        <div className="main-title">
                            <h2 className="text-white" style={{lineHeight: 1.5, textAlign:'left'}}><b>Beneficios de ofrecer tus productos y servicios de manera profesional</b></h2>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg="6">
                    <Row className="set-padding">
                    <div className="m-b-40">
                            <div className="d-flex">
                                <i aria-hidden="true" style={icon1} className="fa fa-check-circle"></i>
                                <div>
                                    <h4 className="offer-main-text text-white m-b-15"><b style={{fontWeight:600}}><u>Transmite confianza y seguridad</u></b></h4>
                                    <p className="offer-sub-text text-white">La calidad transmite confianza y profesionalismo, y un cliente potencial que no confía en una página es un cliente perdido y simplemente se va a buscar otra opción de la competencia.</p>
                                </div>
                            </div>
                        </div>
                        <div className="m-b-40">
                            <div className="d-flex">
                                <i aria-hidden="true" style={icon1} className="fa fa-check-circle"></i>
                                <div>
                                    <h4 className="offer-main-text text-white m-b-15"><b style={{fontWeight:600}}><u>Incrementa y Consolida tus clientes</u></b></h4>
                                    <p className="offer-sub-text text-white">Una página web con un diseño profesional llama mucho más la atención, y sumado a textos persuasivos precisos consigue que realmente seas una competencia y te tomen en cuenta.</p>
                                </div>
                            </div>
                        </div>
                        <div className="m-b-40">
                            <div className="d-flex">
                                <i aria-hidden="true" style={icon1} className="fa fa-check-circle"></i>
                                <div>
                                    <h4 className="offer-main-text text-white m-b-15"><b style={{fontWeight:600}}><u>Transmite el valor real de tu producto</u></b></h4>
                                    <p className="offer-sub-text text-white">Hacemos las páginas web enfocadas a demostrar el valor de tu producto o servicio para que tus potenciales clientes te elijan.</p>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
        <div className="set-abs mobile mobile-img bottom-0">
            <div className="set-relative">
                <Image alt="beneficios de una web profesional de alto impacto 2metadigital"
                    height={680}
                    width={450}
                    className="img-fluid mobile-screen"
                    src="/assets/images/app_landing1/beneficios2.webp"
                    placeholder="blur"
                    blurDataURL="/assets/images/app_landing1/beneficios-blur.png"
                />
                <div className="set-abs mobile rectangle r-2  center-content bottom-0">
                    <img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing1/icons/1-2.png" />
                </div>
                <div className="set-abs mobile rectangle center-content bottom-0">
                    <img alt="" className="img-fluid" loading="lazy" src="/assets/images/app_landing1/Ellipse-2-copy-241.png" />
                </div>
            </div>
        </div>
    </section>
    )
}


export default About;