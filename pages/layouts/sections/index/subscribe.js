import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const link = {
    color: 'var(--tertiary)',
    display: 'block',
    marginTop: 20,
}
const logo = {
    maxWidth: '80%',
    margin: '40px auto 0',
}
const Subscribs = () => (
    <footer className="app1 subscribe bg">
        <Container>
            <Row>
                <Col lg="6" className="offset-lg-3">
                    <div className="title title1">
                        <div className="main-title">
                            <h2 className="mb-4" style={{lineHeight: 1.2}}>Sobre nosotros</h2>
                        </div>
                        <div className="sub-title mb-5">
                            <p className="para pb-3">Somos una agencia de marketing digital que brinda asesoramiento y soluciones tecnológicas a negocios en crecimiento que buscan tener presencia y destacar en internet, redes sociales y motores de búsqueda.</p>
                            <p className="para"><b>Más de 5 años en el mercado y clientes satisfechos.</b></p>
                            <a href="https://metadigital.com.ar" target="_blank" style={link}>Ir al sitio web principal →</a>
                        </div>
                    </div>
                </Col>
            </Row>
            {/*<Row>
                <Col lg="8"  className="offset-lg-2">
                    <div className="subscribe">
                        <div className="center-content">
                            <div className="form-group">
                                <div className="d-flex">
                                    <input className="form-control " maxLength="45" name="email"
                                        placeholder="Please Enter Your Email Address" type="email" />
                                    <div className="button-primary">
                                        <button className=" btn btn-default btn-gradient text-white text-uppercase"
                                            type="submit">subscribe
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>*/}
            <Row>
                <Col md="12">
                    <div className="socials-lists">
                        <ul className="socials-horizontal justify-content-center">
                            <li>
                                <a href="https://www.instagram.com/paginasweb_arg/" target="_blank">
                                    <i aria-hidden="true" className="fa fa-instagram center-content"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/2metadigital/" target="_blank">
                                    <i aria-hidden="true" className="fa fa-instagram center-content"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </Col>
                <img alt="" style={logo} src="/assets/images/logo/logo2-nobg-400.png" />
            </Row>
        </Container>
    </footer>
)


export default Subscribs;
