import React, { Fragment } from 'react'
import Head from 'next/head'
import WebUpgrade from './layouts/enterprice-sass'

const Home = () => {

  return (
    <Fragment>
      <Head>
          <title>El Siguiente Paso para Tu Negocio es de Calidad e Impacto - 2MetaDigital</title>
          <meta name='El Siguiente Paso para Tu Negocio es de Calidad e Impacto' content='' />

          <meta description='Si ya tenés una página web pero querés mejorarla para que tus clientes perciban el profesionalismo de tu negocio y también generar mayor confianza, atención y ventas, estás en el lugar indicado.' content='' />
          <meta property="og:description" content="Si ya tenés una página web pero querés mejorarla para que tus clientes perciban el profesionalismo de tu negocio y también generar mayor confianza, atención y ventas, estás en el lugar indicado." />

          <link rel="icon" type="image/png" href="/fav3.png" />
          <meta property="og:image" content="/meta3.png" />
          <meta name="keywords" content="agencia digital, programación, diseño web, diseño gráfico, desarrollo web, copywriting, marketing, agencia, ecommerce, e-commerce, tienda online, landing page, página de aterrizaje, tienda digital, tiendanube, shopify, wix"/>

          <meta name="robots" content="index"/>
      </Head>

      <WebUpgrade />
    </Fragment>
  )
}

export default Home
