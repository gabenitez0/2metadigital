import React, { Fragment } from 'react'
import Head from 'next/head'
// import Custom Components
//import EnterpriseSass from '../pages/layouts/enterprice-sass'
import Afiliados from './layouts/modern-sass'

const Home = () => {

  return (
    <Fragment>
      <Head>
          <title>2MetaDigital - Programa de Afiliados</title>
          <meta description='Buscamos personas que se encarguen de vender nuestros productos y servicios de manera independiente, desde la generación del lead hasta el cierre de la venta a cambio de un rentable beneficio.' content='' />
          <meta name='2MetaDigital - Programa de Afiliados' content='' />
          <meta property="og:image" content="/assets/images/logo/meta.png" />
          <meta property="og:description" content="Buscamos personas que se encarguen de vender nuestros productos y servicios de manera independiente, desde la generación del lead hasta el cierre de la venta a cambio de un rentable beneficio." />
      </Head>

      <Afiliados />
    </Fragment>
  )
}

export default Home
