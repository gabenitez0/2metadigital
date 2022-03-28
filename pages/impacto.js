import React, { Fragment } from 'react'
import Head from 'next/head'
import WebUpgrade from './layouts/enterprice-sass'

const Home = () => {

  return (
    <Fragment>
      <Head>
          <title>Potenciá la Imagen Digital de tu Negocio - 2MetaDigital</title>
          <meta name='description' content='Tu nueva página web con diseños de alto impacto y redacciones persuasivas que transmiten el valor de tu producto o servicio.' />
          <meta property="og:description" content="Tu nueva página web con diseños de alto impacto y redacciones persuasivas que transmiten el valor de tu producto o servicio." />

          <link rel="icon" type="image/png" href="/fav3.png" />
          <meta property="og:image" content="/meta3.png" />
          <meta name="keywords" content="agencia digital, programación, diseño web, diseño gráfico, desarrollo web, copywriting, marketing, agencia, ecommerce, e-commerce, tienda online, landing page, página de aterrizaje, tienda digital, tiendanube, shopify, wix"/>
          <meta name="author" content="Gabriel Benitez" />
          <meta name="robots" content="index"/>
      </Head>

      <WebUpgrade />
    </Fragment>
  )
}

export default Home
