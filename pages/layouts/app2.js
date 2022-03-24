import React, {useEffect} from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
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
  const router = useRouter();
  const ref = router.query.ref && router.query.ref.length > 7 ? router.query.ref : "541122505698";
  const link = `https://wa.me/${ref}?text=Hola%2C%20me%20interesa%20una%20tienda%20online%20profesional%20para%20mi%20negocio`

  const mon = router.query.mon === "usd" ? "$150 USD" : "$18000 ARS";

  useEffect(() => {
    document.body.style.setProperty('--primary', '#fd6d64')
    document.body.style.setProperty('--secondary', '#434345')
    document.body.style.setProperty('--light', '#F66E54')
    document.body.style.setProperty('--dark', '#FF534B')
  })

  return (
      <div className="theme-color" >

        <Header />

        <BannerSection link={link}/>

        <Beneficios />

        <Caracteristicas />

        <Calidad />

        <Proyectos />

        <TeamSection /> 
      
        <CTA link={link} mon={mon}/>
        
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
