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
            <div className="animated-bg"><i></i><i></i><i></i></div>
            <Container>
                <Row>
                    <Col sm="6"  className="counters set-order-2">
                        <div className="abouts center-text">
                            <div>
                                <div className="format-head-text">
                                    <h3 className="about-font-header font-secondary">Tienda Online de Alta Calidad enfocada a cada producto particular</h3>
                                </div>
                                <div className="format-sub-text">
                                    <p className="about-para">Hacemos por vos una Tienda Online no solo de calidad profesional en cuanto al desarrollo y diseño, sino que también nos adaptamos perfectamente y de forma particular a tu producto y necesidades de tu negocio.</p>
                                    <p className="about-para">Generamos impacto a nuestros clientes y también a los tuyos. Trabajamos rápido, tendrémos tu tienda online lista para empezar a vender en pocos días y sin que pierdas tiempo!</p>
                                    <p className="about-para"><b>Si no te consideras un especialista en eCommerces, te costará mucho tiempo y trabajo hacer algo que realmente sea profesional y escalable (como aparecer en motores de búsqueda) para tu negocio.</b></p>
                                </div>
                                {/*
                                <ul className="icon-collection">
                                    <li className="about-icon">
                                        <a className="center-content" href="#">
                                            <h4 className="quality">2 M</h4>
                                            <h6 className="users ">user</h6>
                                        </a>
                                    </li>
                                    <li className="about-icon">
                                        <a className="center-content" href="#">
                                            <h4 className="quality">2.5 M</h4>
                                            <h6 className="users">download</h6>
                                        </a>
                                    </li>
                                </ul>*/}
                                <a className="btn btn-default btn-gradient m-t-45" href="#proyectos">Ver ejemplos</a>
                            </div>
                        </div>
                    </Col>
                    <Col sm="6"  className="counters set-height overflow-hide">
                        <img alt="" className="img-fluid mobile2" data-aos="fade-left"
                            src="/assets/images/app_landing2/calidad2.svg" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default Format;