import React, { useEffect } from 'react'
import Head from 'next/head'

// import Custom Components
import Header from '../../containers/common/header'
import BannerSection from '../layouts/sections/modern-sass/banner'
import FeatureSection from '../layouts/sections/modern-sass/feature'
import BuildSection from '../layouts/sections/modern-sass/build'
import WorkSection from '../layouts/sections/modern-sass/work'
import PriceSection from '../layouts/sections/modern-sass/price'
import TestimonialSection from '../layouts/sections/modern-sass/testimonial'
import SubscribeSection from '../layouts/sections/modern-sass/subscribe'
import FaqSection from '../layouts/sections/modern-sass/faq'
import ClientSection from '../layouts/sections/modern-sass/client'
import FooterSection from '../layouts/sections/modern-sass/footer'

const ModernSass = () => {

    useEffect(() => {
        document.body.style.setProperty('--primary', '#fb3b64')
        document.body.style.setProperty('--secondary', '#071828')
        document.body.style.setProperty('--light', '#071828')
        document.body.style.setProperty('--dark', '#fb3b64')
    })

    return (
        <div>

            <Header className="saas1"  />

            <BannerSection />
            
            <WorkSection />

            <BuildSection />

            <FeatureSection />

            <PriceSection />

            <FaqSection />

            <ClientSection />

            <FooterSection />
        </div>
    )
}

export default ModernSass;