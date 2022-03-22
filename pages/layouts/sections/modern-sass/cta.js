import React, { useState } from 'react';
import Slider from "react-slick";
import {Container,Row,Col} from 'reactstrap'

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
                                Empieza a Generar de <span className="theme-color">$60</span> a <span className="theme-color">$375 USD</span> por cada venta Ahora
                        </h2>
                        </div>
                        <hr />
                        <div className="sub-title">
                            <p className="p-padding text-white">Ponte en contacto conmigo, sacate todas las dudas y empecemos a generar ingresos juntos!</p>
                        </div>
                        <a className="btn btn-default primary-btn mt-4" href="https://wa.me/541122505698?text=Hola%2C%20me%20interesa%20asociarme%20con%202metadigital%20para%20promocionar%20y%2Fo%20vender%20sus%20servicios." target="_blank">Contactar Ahora</a>
                    </div>
                </Col>
            </Container>
        </section>
    )
}


export default Price;