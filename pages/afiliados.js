import React, { Fragment } from 'react'
import Head from 'next/head'
// import Custom Components
//import EnterpriseSass from '../pages/layouts/enterprice-sass'
import Afiliados from './layouts/modern-sass'

const Home = () => {

  return (
    <Fragment>
      <Head>
          <title>2MetaDigital - Programa de Afiliados</title>
          <meta description='Programa de Afiliados. Podemos Ayudarte A Mejorar Tu Proyecto. Potenciemos tu negocio dando una excelente impresión, una imagen profesional y textos precisos. Desarrollo Web, Copywriting, Marketing, Diseño Gráfico, Administración de Servidores.' content='' />
          <meta name='2MetaDigital - Programa de Afiliados' content='' />
          <meta property="og:image" content="/assets/images/logo/meta.png" />
      </Head>

      <Afiliados />
    </Fragment>
  )
}

export default Home
