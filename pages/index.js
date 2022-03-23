import React, { Fragment } from 'react'
import Head from 'next/head'
// import Custom Components
//import EnterpriseSass from '../pages/layouts/enterprice-sass'
import Servicios from './layouts/app1'

const Home = () => {

  return (
    <Fragment>
      <Head>
          <title>Vendé tus productos y servicios en internet con una Web de Alto Impacto - 2MetaDigital</title>
          <meta name='Vendé tus productos y servicios en internet con una Web de Alto Impacto - 2MetaDigital' content='' />

          <meta description='Hacemos páginas web de alto impacto con diseños profesionales redacciones persuasivas enfocadas en ventas que transmiten el valor real de tu producto o servicio.' content='' />
          <meta property="og:description" content="Hacemos páginas web de alto impacto con diseños profesionales redacciones persuasivas enfocadas en ventas que transmiten el valor real de tu producto o servicio." />
          
          <link rel="icon" type="image/png" href="/fav5.png" />
          <meta property="og:image" content="/meta5.png" />
          <meta name="keywords" content="agencia digital, programación, diseño web, diseño gráfico, desarrollo web, copywriting, marketing, agencia, ecommerce, e-commerce, tienda online, landing page, página de aterrizaje, tienda digital, tiendanube, shopify, wix"/>
      
          <meta name="robots" content="index"/>
      </Head>

      <Servicios />
    </Fragment>
  )
}

export default Home
