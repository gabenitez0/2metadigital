import React, {useEffect} from 'react'
import Head from 'next/head'
// import Custom Components
import Header from '../../containers/common/header'
import BannerSection from './sections/agency/banner'
import AboutSection from './sections/agency/about'
import ServiceSection from './sections/agency/service'
import Portfolio from '../../pages/portfolio/portfolio-title-3-col';
import TestimonialSection from './sections/agency/testimonial'
import CTA2 from './sections/agency/cta2'
import FooterSection from './sections/agency/footer'


const Agency = () => {

  useEffect(() => {
    document.body.style.setProperty('--primary', '#10266b')
    document.body.style.setProperty('--secondary', '#464545')
    document.body.style.setProperty('--light', '#1F357D')
    document.body.style.setProperty('--dark', '#04185B')
  })

  return (
    <div className="theme-color" >

        <Header className="agency" />

        <BannerSection />

        <AboutSection />

        <ServiceSection />

        <Portfolio />

        <TestimonialSection />

        <CTA2 />

        <FooterSection />

    </div>
  )
}

export default Agency;