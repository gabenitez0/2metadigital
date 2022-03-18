import React, { Fragment } from 'react'
import Head from 'next/head'
// import Custom Components
//import EnterpriseSass from '../pages/layouts/enterprice-sass'
import Afiliados from './layouts/modern-sass'

const Home = () => {

  return (
    <Fragment>
      <Head>
          <title>Genera Ingresos Extra Hoy - Programa de Afiliados de 2MetaDigital</title>
          <meta name='Genera Ingresos Extra Hoy - Programa de Afiliados de 2MetaDigital' content='' />

          <meta description='Buscamos personas que se encarguen de vender nuestros productos y servicios de manera independiente, desde la generación del lead hasta el cierre de la venta a cambio de un rentable beneficio.' content='' />
          <meta property="og:description" content="Buscamos personas que se encarguen de vender nuestros productos y servicios de manera independiente, desde la generación del lead hasta el cierre de la venta a cambio de un rentable beneficio." />
          
          <link rel="icon" type="image/png" href="/fav4.png" />
          <meta property="og:image" content="/meta4.png" />
          <meta name="keywords" content="agencia digital, programación, diseño web, diseño gráfico, desarrollo web, copywriting, marketing, agencia, ecommerce, e-commerce, tienda online, landing page, página de aterrizaje, tienda digital, tiendanube, shopify, wix, programa de afiliados, marketing de afiliados"/>

          <meta name="robots" content="index"/>
      </Head>

      <Afiliados />
    </Fragment>
  )
}

export default Home
