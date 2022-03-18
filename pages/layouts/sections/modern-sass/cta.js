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
                                <span className="theme-color">E</span>mpieza a <span className="theme-color">G</span>enerar <span className="theme-color">I</span>ngresos <span className="theme-color">E</span>xtra con <span className="theme-color">N</span>osotros <span className="theme-color">A</span>hora
                        </h2>
                        </div>
                        <hr />
                        <div className="sub-title">
                            <p className="p-padding text-white">Ponte en contacto conmigo, sacate todas las dudas y empecemos a generar ingresos juntos!</p>
                        </div>
                        <a className="btn btn-default primary-btn mt-4" href="https://web.whatsapp.com/send?phone=541165003611" target="_blank">Contactar Ahora</a>
                    </div>
                </Col>
            </Container>
        </section>
    )
}


export default Price;