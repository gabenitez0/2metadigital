import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Container,Row,Col} from 'reactstrap'


const icon1 = {
    background: 'var(--primary)',
    color: 'white',
    padding: 3,
    fontWeight: 600,
    display: 'inline-block',
    width: 20,
    height: 27,
    textAlign: 'center'
}


const Format = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500
        })
    }, []);
    return (
        <section className="app2 format quality p-t-0">
            <Container>
                <Row>
                    <Col sm="6" md="5" lg="6"  className="counters set-height overflow-hide m-auto m-b-20 m-t-20">
                        <img alt="" className="img-fluid" loading="lazy" data-aos="fade-right"
                            src="/assets/images/app_landing2/tiempo.webp" />
                    </Col>
                    <Col md="7" lg="6" className="counters set-order-2">
                        <div className="abouts center-text">
                            <div>
                                <div className="format-head-text">
                                    <h3 className="about-font-header font-secondary">Imaginá como sería potenciar el alcance, las ventas y ahorrar toneladas de tiempo!</h3>
                                </div>
                                <div className="format-sub-text">
                                <p className="about-para"><i style={icon1}>1.</i> <b>Muchos potenciales clientes están esperando para comprar inmediatamente desde tu Tienda Online</b>, <u>no quieren estar pidiendo información por cada producto que les interesa</u>.</p>
                                <p className="about-para"><i style={icon1}>2.</i> <b>Una Tienda Online te ahorra mucho tiempo</b>, ésta plataforma te permite automatizar la mayoría de los procesos de venta y dar un salto de calidad y accesibilidad para tu negocio y tus clientes.</p>
                                <div>
                                    <h6 className="font-primary m-b-25 text-uppercase"><span>Es como tener un robot vendedor que puede vender las 24 horas y brindar a tus clientes toda la información y medios que necesitan para comprar SIN intervención humana en cualquier momento</span></h6>
                                </div>
                                <a className="btn btn-default btn-gradient mt-4" href="#contacto">Empezar Ahora</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default Format;