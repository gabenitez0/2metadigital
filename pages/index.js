import React, { Fragment } from 'react'
import Head from 'next/head'
// import Custom Components
//import EnterpriseSass from '../pages/layouts/enterprice-sass'
import Servicios from './layouts/app1';

const Home = () => {
  return (
    <Fragment>
      <Head>
          <title>2MetaDigital | Tu Página Web Profesional de Alto Impacto</title>
          <meta name='description' content='Tu próxima página web te espera. Hacemos tu página web profesional desde $18000 ARS.' />
          <meta property="og:description" content="Tu próxima página web te espera. Hacemos tu página web profesional desde $18000 ARS." />
          
          <link rel="icon" type="image/png" href="/fav5.png" />
          <meta property="og:image" content="/meta5.png" />
          <meta name="keywords" content="agencia digital, programación, diseño web, diseño gráfico, desarrollo web, copywriting, marketing, agencia, ecommerce, e-commerce, tienda online, landing page, página de aterrizaje, tienda digital, tiendanube, shopify, wix"/>
          <meta name="author" content="Gabriel Benitez" />
          <meta name="robots" content="index"/>
      </Head>

      <Servicios />
    </Fragment>
  )
}

export default Home
