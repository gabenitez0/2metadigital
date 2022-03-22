import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Container,Row,Col} from 'reactstrap'
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
                    <Col sm="6"  className="counters set-height overflow-hide">
                        <img alt="" className="img-fluid" data-aos="fade-right"
                            src="/assets/images/app_landing2/tiempo2.svg" />
                    </Col>
                    <Col sm="6"  className="counters set-order-2">
                        <div className="abouts center-text">
                            <div>
                                <div className="format-head-text">
                                    <h3 className="about-font-header font-secondary">Imaginá como sería potenciar el alcance, las ventas y ahorrar toneladas de tiempo!</h3>
                                </div>
                                <div className="format-sub-text">
                                <p className="about-para">Tener una tienda online te puede ahorrar mucho tiempo, ya que ésta plataforma te permite automatizar la mayoría de los procesos de venta y dar un salto de calidad y accesibilidad para tu negocio y tus clientes.</p>
                                <p className="about-para"><b>Es como tener un robot vendedor que puede vender las 24 horas y brindar a tus clientes toda la información que necesitan para comprar: Stock, Precio, Colores, Talles, Medios de Pago, Catálogos, etc. y además, la tecnología de Carrito y Pasarelas de Pago para que puedan Concretar la Compra SIN intervención humana en cualquier momento.</b></p>
                                </div>
                                <a className="btn btn-default btn-gradient" href="https://wa.me/541122505698?text=Hola%2C%20me%20interesa%20una%20tienda%20online%20para%20mi%20negocio." target="_blank">Empezar Ahora</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default Format;