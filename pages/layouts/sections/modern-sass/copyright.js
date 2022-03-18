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
                                <a className="copyright-text op-text" href="https://web.whatsapp.com/send?phone=541165003611" target="_blank">Contactar Ahora</a>
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