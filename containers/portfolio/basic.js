import React, { useState, useEffect, Fragment } from 'react';
import {Container,Row,Col} from 'reactstrap'
const feshion = [
    require('../../public/assets/images/portfolio/1.jpg'),
    require('../../public/assets/images/portfolio/2.jpg'),
    require('../../public/assets/images/portfolio/3.jpg'),
    require('../../public/assets/images/portfolio/4.jpg'),
]

const bags = [
    require('../../public/assets/images/portfolio/5.jpg'),
    require('../../public/assets/images/portfolio/6.jpg'),
    require('../../public/assets/images/portfolio/7.jpg'),
    require('../../public/assets/images/portfolio/8.png'),
]

const watches = [
    require('../../public/assets/images/portfolio/11.jpg'),
    require('../../public/assets/images/portfolio/10.jpg'),
    require('../../public/assets/images/portfolio/12.png'),
]

const shoes = [
    require('../../public/assets/images/portfolio/9.jpg'),
    require('../../public/assets/images/portfolio/10.jpg'),
    require('../../public/assets/images/portfolio/12.png'),
    require('../../public/assets/images/portfolio/8.png'),
]

const Basic = ({ className, title, subTitle, fluid }) => {

    const [portfolioData, setPortfolioData] = useState([]);
    useEffect(() => {
        async function PortfolioData() {
        const res = await fetch('http://localhost:1337/api/portfolios?populate=%2A');
        const data = await res.json();
        setPortfolioData(data.data)
        }
        PortfolioData()
    }, [])
    const imgUrl = "http://localhost:1337"
    
    const initilindex = { index: 0 }
    const [photoIndex, setPhotoIndex] = useState(initilindex)

    const [activeTab, setActiveTab] = useState('1');

    const AllImg = portfolioData.map(a => imgUrl+a.attributes.principal.data.attributes.url);
    //const AllImg = item.attributes.gallery.data
    //console.log(AllImg);
    //console.log(portfolioData[photoIndex.index] && portfolioData[photoIndex.index].attributes.gallery.data.map(a => imgUrl+a.attributes.url));
    //console.log(portfolioData.map(a => imgUrl+a.attributes.principal.data.attributes.url));
    return (
        <Fragment>
            <section className="portfolio-section fullwidth-portfolio masonray-sec zoom-gallery titles" id="Proyectos">
                <Row>
                    <Col md="8" className="offset-md-2">
                        <div className="title title2">
                            <h6 className="font-primary borders main-text text-uppercase"><span>Portfolio</span></h6>
                            <div className="sub-title">
                                <div>
                                    <h2 className="title-text">Proyectos recientes</h2>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className={fluid || 'container'}>
                    {portfolioData.map((item, i) => {
                        return (
                            <div className={className} key={i}>
                                <div className="overlay">
                                    <div className="border-portfolio">
                                        <a href={item.attributes.link} target="_blank">
                                        <div className="zoom_gallery"
                                            title="">
                                            <div className="overlay-background" onClick={() =>
                                                setPhotoIndex({ ...photoIndex, index: i, isOpen: true })
                                            }>
                                                <i aria-hidden="true" className="fa fa-plus"></i>
                                            </div>
                                            <img alt="" className="img-fluid blur-up lazyload"
                                                src={imgUrl+item.attributes.principal.data.attributes.url} />
                                        </div>
                                        </a>
                                    </div>

                                </div>
                                {item && 
                                    <div className="portfolio-text">
                                        <a href={item.attributes.link} target="_blank"><h3 className="head-text">{item.attributes.title}</h3></a>
                                        
                                        <h6 className="head-sub-text">
                                            {item.attributes.category}
                                        </h6>
                                    </div>}
                            </div>
                        )
                    })}
                    </div>
            </section>
        </Fragment>
    );
};

export default Basic;