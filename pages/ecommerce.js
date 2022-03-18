import React, { Fragment } from 'react'
import Head from 'next/head'
// import Custom Components
//import EnterpriseSass from '../pages/layouts/enterprice-sass'
import Ecommerce from './layouts/app2'

const Home = () => {

  return (
    <Fragment>
      <Head>
          <title>Hacemos E-Commerces Profesionales para Vender En Línea - 2MetaDigital</title>
          <meta name='Hacemos E-Commerces Profesionales para Vender En Línea - 2MetaDigital' content='' />

          <meta description='8 de cada 10 argentinos realizan al menos una compra online al año, hacemos tu tienda online por vos para que empieces a vender en línea.' content='' />
          <meta property="og:description" content="8 de cada 10 argentinos realizan al menos una compra online al año, hacemos tu tienda online por vos para que empieces a vender en línea." />
          
          <link rel="icon" type="image/png" href="/fav2.png" />
          <meta property="og:image" content="/meta2.png" />
          <meta name="keywords" content="agencia digital, programación, diseño web, diseño gráfico, desarrollo web, copywriting, marketing, agencia, ecommerce, e-commerce, tienda online, landing page, página de aterrizaje, tienda digital, tiendanube, shopify, wix"/>
      
          <meta name="robots" content="index"/>
      </Head>

      <Ecommerce />
    </Fragment>
  )
}

export default Home
