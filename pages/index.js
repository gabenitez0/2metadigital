import React, { Fragment } from 'react'
import Head from 'next/head'
// import Custom Components
//import EnterpriseSass from '../pages/layouts/enterprice-sass'
import Agency from '../pages/layouts/agency'

const Home = () => {

  return (
    <Fragment>
      <Head>
          <title>2MetaDigital - Enfocados en la Meta</title>
          <meta description='Agencia Digital. Podemos Ayudarte A Mejorar Tu Proyecto. Potenciemos tu negocio dando una excelente impresión, una imagen profesional y textos precisos. Desarrollo Web, Copywriting, Marketing, Diseño Gráfico, Administración de Servidores.' content='' />
          <meta property="og:description" content="Agencia Digital. Podemos Ayudarte A Mejorar Tu Proyecto. Potenciemos tu negocio dando una excelente impresión, una imagen profesional y textos precisos. Desarrollo Web, Copywriting, Marketing, Diseño Gráfico, Administración de Servidores." />
          <meta name='2MetaDigital - Enfocados en la Meta' content='' />
          <meta property="og:image" content="/assets/images/logo/meta.png" />
      </Head>

      <Agency />
    </Fragment>
  )
}

export default Home
