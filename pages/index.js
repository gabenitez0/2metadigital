import React, { Fragment } from 'react'
import Head from 'next/head'
// import Custom Components
//import EnterpriseSass from '../pages/layouts/enterprice-sass'
import Agency from '../pages/layouts/agency'

const Home = () => {

  return (
    <Fragment>
      <Head>
          <title>Meta Digital - Potenciemos Tu Proyecto Ahora! - Agencia Digital</title>
          <meta description='Podemos Ayudarte A Mejorar Tu Proyecto. Potenciemos tu negocio dando una excelente impresión, una imagen profesional y textos precisos.' content='' />
          <meta name='Meta Digital - Potenciemos Tu Proyecto Ahora! - Agencia Digital' content='' />
      </Head>

      <Agency />
      <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/21389125.js"></script>
    </Fragment>
  )
}

export default Home
