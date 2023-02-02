import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
// import Custom Components
import Header from '../../containers/common/header'
import BannerSection from './sections/modern-sass/banner'
//import ServicesSection from './sections/index/services'
//import AboutSection from './sections/index/about'
//import CasosExito from './sections/index/casosexito'
import DownloadSection from './sections/index/download'
//import ScreenShotsSection from './sections/index/screenshots'
//import Tiempo from './sections/index/tiempo'
import BuildSection from '../layouts/sections/modern-sass/build'
import Cta from './sections/index/cta'
//import Historia from './sections/index/historia'
import FooterSection from './sections/modern-sass/footer'



const App1 = () => {
  const router = useRouter();
  const ref = router.query.ref && router.query.ref.length > 7 ? router.query.ref : "5491140745960";
  const link = `https://wa.me/${ref}?text=Hola%2C%20me%20interesa%20una%20página%20web%20profesional%20para%20mi%20negocio`

  const mon = router.query.mon === "usd" ? "$150 USD" : "$18000 ARS";

  return (
    <div>
      <Header className="app1" />

      <BannerSection link={link} />

      {/*<ServicesSection />*/}

      {/*<AboutSection />*/}

      <DownloadSection />

      {/*<CasosExito />*/}

      <BuildSection />

      {/*<ScreenShotsSection />*/}

      {/*<Tiempo />*/}

      <Cta link={link} mon={mon}/>

      {/*<Historia />*/}

      {/*<Cta link={link} mon={mon}/>*/}

      <FooterSection />

    </div>
  )
}

export default App1
