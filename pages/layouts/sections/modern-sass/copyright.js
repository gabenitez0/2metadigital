import React from 'react';
import { Container, Row, Col } from 'reactstrap'
const Copyright = () => (
    <div className="saas1 copyright">
        <Container>
            <Row>
                <Col sm="6">
                    <div className="link-horizontal center-text">
                        <ul>
                            <li>
                                <a className="copyright-text op-text" href="https://wa.me/541122505698?text=Hola%2C%20me%20interesa%20asociarme%20con%202metadigital%20para%20promocionar%20y%2Fo%20vender%20sus%20servicios." target="_blank">Contactar Ahora</a>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col sm="6">
                    <div>
                        <h6 className="copyright-text text-white text-right op-text">Copyright © 2022 Programa de Afiliados <i
                            aria-hidden="true" className="fa fa-heart mx-1"></i>
                            2MetaDigital</h6>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
)

export default Copyright;