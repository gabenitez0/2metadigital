import React, { Fragment } from 'react'
import Head from 'next/head'
// import Custom Components
//import EnterpriseSass from '../pages/layouts/enterprice-sass'
import Ecommerce from './layouts/app2'

const Home = () => {

  return (
    <Fragment>
      <Head>
          <title>Vendé a todos los clientes de internet con una Tienda Online Profesional - 2MetaDigital</title>
          <meta name='Vendé a todos los clientes de internet con una Tienda Online Profesional - 2MetaDigital' content='' />

          <meta description='Creamos tu Tienda Online Profesional por vos para que no pierdas tiempo y empieces a vender en línea y llegar a la mayor cantidad de clientes posibles.' content='' />
          <meta property="og:description" content="Creamos tu Tienda Online Profesional por vos para que no pierdas tiempo y empieces a vender en línea y llegar a la mayor cantidad de clientes posibles." />
          
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