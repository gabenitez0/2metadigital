import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Container,Row,Col} from 'reactstrap'
const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    }, []);
    return (
        <section className="agency agency-content about-bg" id="Nosotros">
            <h3 className="text-as-shadow">About <br/> us</h3>
            <Container>
                <Row>
                    <Col xl="9" md="9"  className="offset-xl-3 offset-md-3">
                        <div className="agency-header-center-container">
                            <div className="borders"></div>
                            <div className="agency-head">
                                <h3 className="agency-head-text">De Emprendedores para Emprendedores <span className="block-span">Que quieren dar un salto de calidad</span></h3>
                            </div>
                        </div>
    
                        <p className="agency-para">Podemos ayudarte a mejorar tu imagen y posicionarte en internet, tenemos años de experiencia en el mercado digital más cantidad de socios y clientes satisfechos.</p>
                        <p className="agency-para">Hacemos diseños increíbles que impactan en la visual del visitante y redacción persuasiva que generan conversiones de valor!</p>
                        <a className=" btn btn-default btn-gradient" href="/#Servicios">¿Qué hacemos?</a>
                    </Col>
                </Row>
            </Container>
            <div className="side-img  set-abs left-0 top-0" data-aos="fade-right" data-aos-duration="4500"
            >
                <div className="plus-container plus-container9">
                    <div className="plus white">
                    </div>
                </div>
                <div className="plus-container plus-container10">
                    <div className="plus plus-medium white">
                    </div>
                </div>
                <div className="plus-container plus-container11">
                    <div className="plus plus plus-small white">
                    </div>
                </div>
                <img alt="" className="img-fluid about-img" src="/assets/images/agency/about-us/image.png" />
            </div>
            <img alt="" className="img-fluid blue-img" src="/assets/images/agency/agency-abs-img.png" />
        </section>
    )
}

export default About;