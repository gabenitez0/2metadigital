import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import {Container,Row,Col} from 'reactstrap'

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [ 
        { 
            breakpoint: 575, 
            settings: { 
                slidesToShow: 1,
                arrows: false
             } 
        }, 
        { 
            breakpoint: 992, 
            settings: { 
                slidesToShow: 2,
                arrows: false
            } 
        }
    ]
};

const Testimonial = () => {
    const [testimonialData, setTestimonialData] = useState([]);
    useEffect(() => {
        async function TestimonialData() {
        const res = await fetch('http://localhost:1337/api/testimonios?populate=%2A');
        const data = await res.json();
        setTestimonialData(data.data)
        }
        TestimonialData()
    }, [])
    const imgUrl = "http://localhost:1337";
    //console.log(imgUrl+item.attributes.photo.data.attributes.url)
    
    return (
    <section className="agency testimonial format testimonial-bg" id="Calificaciones">
        <Container>
            <Row>
                <Col md="5">
                    <div className="format-container m-b-50">
                        <h6 className="borders-before">
                            <span>Testimonios</span>
                        </h6>
                        <div className="format-head-text">
                            <h2 className=" text-white">Calificaciones de<span className="block-span">Nuestros Clientes</span></h2>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                    <Slider className="owl-carousel owl-theme testimonial-slider" {...settings}>
                        {testimonialData.map((item, index) =>
                            <div className="item" key={`testimonial-${index}`}>
                                <div className="testimonial-container testimonial-container2 m-0">
                                    <div className="d-flex">
                                        <img alt="" className="img-fluid m-r-25" src={imgUrl+item.attributes.photo.data.attributes.url} />
                                        <div className="center-content">
                                            <h6 className="name">{item.attributes.name}</h6>
                                            <h6 className="post font-primary">{item.attributes.role}</h6>
                                        </div>
                                    </div>
                                    <div className="testimonial-info">
                                        <p className="m-b-20 para2">
                                            {item.attributes.testimonial}
                                        </p>
                                        <div className="primary-border"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Slider>
                </Col>
            </Row>
        </Container>
    </section>
    )
}

export default Testimonial;