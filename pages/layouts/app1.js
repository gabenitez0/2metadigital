import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
// import Custom Components
import Header from '../../containers/common/header'
import BannerSection from './sections/index/banner'
import ServicesSection from './sections/index/services'
import AboutSection from './sections/index/about'
import DownloadSection from './sections/index/download'
import ScreenShotsSection from './sections/index/screenshots'
import Tiempo from './sections/index/tiempo'
import Cta from './sections/index/cta'
import Historia from './sections/index/historia'
import FooterSection from './sections/index/footer'



const App1 = () => {
  const router = useRouter();
  const ref = router.query.ref && router.query.ref.length > 7 ? router.query.ref : "541122505698";
  const link = `https://wa.me/${ref}?text=Hola%2C%20me%20interesa%20una%20página%20web%20profesional%20para%20mi%20negocio`

  const mon = router.query.mon === "usd" ? "$150 USD" : "$18000 ARS";

  useEffect(() => {
    document.body.style.setProperty('--primary', '#357fef')
    document.body.style.setProperty('--secondary', '#4e4e4e')
    document.body.style.setProperty('--light', '#13B8EA')
    document.body.style.setProperty('--dark', '#4E56F3')
  })



  return (
    <div>
      <Header className="app1" />

      <BannerSection link={link} />

      <ServicesSection />

      <AboutSection />

      <DownloadSection />

      <ScreenShotsSection />

      <Tiempo />

      <Cta link={link} mon={mon}/>

      <Historia />

      <Cta link={link} mon={mon}/>

      <FooterSection />

    </div>
  )
}

export default App1
