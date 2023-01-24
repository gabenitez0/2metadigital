import React, { Fragment } from 'react'
import Head from 'next/head'
// import Custom Components
//import EnterpriseSass from '../pages/layouts/enterprice-sass'
import Servicios from './layouts/app1';

const Home = () => {
  return (
    <Fragment>
      <Head>
          <title>MetaDigital | Diseño de páginas web profesionales para negocios</title>
          <meta name='description' content='Diseño y desarrollo de páginas web profesionales para negocios. Sitios web atractivos, optimizados para móviles y para motores de búsqueda. Atrae más clientes y aumenta tus ventas.' />
          <meta property="og:description" content="Diseño y desarrollo de páginas web profesionales para negocios. Sitios web atractivos, optimizados para móviles y para motores de búsqueda. Atrae más clientes y aumenta tus ventas." />
          
          <link rel="icon" type="image/png" href="/assets/images/saas1/favicon2.png" />
          <meta property="og:image" content="/meta4.png" />
          <meta name="keywords" content="agencia digital, programación, diseño web, diseño gráfico, desarrollo web, copywriting, marketing, agencia, ecommerce, e-commerce, tienda online, landing page, página de aterrizaje, tienda digital, tiendanube, shopify, wix"/>
          <meta name="author" content="Gabriel Benitez" />
          <meta name="robots" content="index"/>
      </Head>

      <Servicios />
    </Fragment>
  )
}

export default Home
