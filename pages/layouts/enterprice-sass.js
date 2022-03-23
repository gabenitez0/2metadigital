import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
// import Custom Components
import Header from '../../containers/common/header'
import BannerSection from '../layouts/sections/enterprice-sass/banner'
import FeatureSection from '../layouts/sections/enterprice-sass/feature'
import BusinessSection from '../layouts/sections/enterprice-sass/business'
import ServiceSection from '../layouts/sections/enterprice-sass/service'
import SliderSection from '../layouts/sections/enterprice-sass/slider'
import Tiempo from './sections/enterprice-sass/tiempo'
import Cta from '../layouts/sections/enterprice-sass/cta'
import BrandSection from '../layouts/sections/enterprice-sass/brand'
import FooterSection from '../layouts/sections/enterprice-sass/footer'


const EnterpriceSass = () => {
    const router = useRouter();
    const ref = router.query.ref && router.query.ref.length > 7 ? router.query.ref : "541122505698";
    const link = `https://wa.me/${ref}?text=Hola%2C%20me%20interesa%20mejorar%20la%20página%20web%20de%20mi%20negocio`

    useEffect(() => {
        document.body.style.setProperty('--primary', '#844adb')
        document.body.style.setProperty('--secondary', '#071828')
        document.body.style.setProperty('--light', '#5E57EA')
        document.body.style.setProperty('--dark', '#9647DB')
    })

    return (
        <div>

            <Header className="saas2"/>

            <BannerSection link={link}/>

            <FeatureSection />

            <BusinessSection />

            <ServiceSection />

            <SliderSection />

            <Tiempo />

            <Cta link={link}/>

            <BrandSection />

            <FooterSection />

        </div>
    )
}

export default EnterpriceSass;