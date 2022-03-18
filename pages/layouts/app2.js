import React, {useEffect} from 'react'
import Head from 'next/head'
// import Custom Components
import Header from '../../containers/common/header'
import BannerSection from './sections/app/banner'
import Beneficios from './sections/app/about'
import Caracteristicas from './sections/app/services'
import Calidad from './sections/app/format'
import TeamSection from './sections/app/team'
import Proyectos from './sections/app/screenshot'
import MemberSection from './sections/app/member'
import PricingSection from './sections/app/pricing'
import Tiempo from './sections/app/tiempo'
import CTA from './sections/app/client'
import FooterSection from './sections/app/footer'
import Copyright from './sections/app/copyright'


const App2 = () => {

  useEffect(() => {
    document.body.style.setProperty('--primary', '#fd6d64')
    document.body.style.setProperty('--secondary', '#434345')
    document.body.style.setProperty('--light', '#F66E54')
    document.body.style.setProperty('--dark', '#FF534B')
  })

  return (
      <div className="theme-color" >

        <Header />

        <BannerSection />

        <Beneficios />

        <Caracteristicas />

        <Calidad />

        <Proyectos />

        <TeamSection /> 
      
        <CTA />
        
        <Tiempo />

        <FooterSection />

        <Copyright />

        {/* Tap on Top */}
        <div className="tap-top">
            <div><i className="fa fa-angle-double-up"></i></div>
        </div>
        {/* Tap on Ends */}
        
      </div>
  )
}

export default App2
