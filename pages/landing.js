import React, { Fragment } from 'react'
import Head from 'next/head'
// import Custom Components
//import EnterpriseSass from '../pages/layouts/enterprice-sass'
import Landing from './layouts/app1'

const Home = () => {

  return (
    <Fragment>
      <Head>
          <title>Vende en línea con los E-Commerces de 2MetaDigital</title>
          <meta description='8 de cada 10 argentinos realizan al menos una compra online al año, hacemos tu tienda online por vos para que empieces a vender en línea.' content='' />
          <meta name='Vende Online con los E-Commerces de 2MetaDigital' content='' />
          <meta property="og:image" content="/assets/images/logo/meta.png" />
          <meta property="og:description" content="8 de cada 10 argentinos realizan al menos una compra online al año, hacemos tu tienda online por vos para que empieces a vender en línea" />

          <meta name="robots" content="noindex"/>
      </Head>

      <Landing />
    </Fragment>
  )
}

export default Home
