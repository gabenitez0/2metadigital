import React, { Fragment } from 'react'
import Head from 'next/head'
// import Custom Components
//import EnterpriseSass from '../pages/layouts/enterprice-sass'
import Ecommerce from './layouts/app2'

const Home = () => {

  return (
    <Fragment>
      <Head>
          <title>Vendé en línea con una Tienda Online Profesional - 2MetaDigital</title>
          <meta name='description' content='Creamos tu Tienda Online Profesional para que vendas en internet y llegar a la mayor cantidad de clientes.' />
          <meta property="og:description" content="Creamos tu Tienda Online Profesional para que vendas en internet y llegar a la mayor cantidad de clientes." />
          
          <link rel="icon" type="image/png" href="/fav2.png" />
          <meta property="og:image" content="/meta2.png" />
          <meta name="keywords" content="agencia digital, programación, diseño web, diseño gráfico, desarrollo web, copywriting, marketing, agencia, ecommerce, e-commerce, tienda online, landing page, página de aterrizaje, tienda digital, tiendanube, shopify, wix"/>
          <meta name="author" content="Gabriel Benitez" />
          <meta name="robots" content="index"/>
      </Head>

      <Ecommerce />
    </Fragment>
  )
}

export default Home
