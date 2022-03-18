import React, { Fragment } from 'react'
import Head from 'next/head'
// import Custom Components
//import EnterpriseSass from '../pages/layouts/enterprice-sass'
import Agency from '../pages/layouts/agency'

const Home = () => {

  return (
    <Fragment>
      <Head>
          <title>Soluciones tecnológicas para tu Negocio Digital - 2MetaDigital</title>
          <meta name='Soluciones tecnológicas para tu Negocio Digital - 2MetaDigital' content='' />

          <meta description='Potenciemos tu negocio generando impacto con una imagen digital profesional y textos persuasivos precisos. Soluciones de Diseño Web, Copywriting, Diseño Gráfico, Administración y Mantenimiento.' content='' />
          <meta property="og:description" content="Potenciemos tu negocio generando impacto con una imagen digital profesional y textos persuasivos precisos. Soluciones de Diseño Web, Copywriting, Diseño Gráfico, Administración y Mantenimiento." />
          
          <link rel="icon" type="image/png" href="/fav1.png" />
          <meta property="og:image" content="/meta1.png" />
          <meta name="keywords" content="agencia digital, programación, diseño web, diseño gráfico, desarrollo web, copywriting, marketing, agencia, ecommerce, e-commerce, tienda online, landing page, página de aterrizaje, tienda digital, tiendanube, shopify, wix"/>

          <meta name="robots" content="index"/>
      </Head>

      <Agency />
    </Fragment>
  )
}

export default Home
