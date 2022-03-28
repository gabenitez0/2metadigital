import React, { Fragment, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import {Container, Col} from 'reactstrap';
import MpButton from './api/mercadopago';

const Checkout = () => {

  const router = useRouter();
  const para = router.query.m;
  const price = router.query.p;
  const paypal = `https://paypal.me/2metadigital/${price}`;
  const id = router.query.id;
  const factura = `https://app.hubspot.com/quotes/${id}`;


  const header = {
    background: 'var(--primary)'
  }
  const line = {
    lineHeight: 1.5
  }
  const step = {
    borderLeft: '3px solid'
  }

  useEffect(() => {
    document.body.style.setProperty('--primary', '#425b76')
    document.body.style.setProperty('--secondary', '#33475b')
    document.body.style.setProperty('--light', '#13B8EA')
    document.body.style.setProperty('--dark', '#4E56F3')
  })

  return (
    <Fragment>
      <Head>
          <title>Checkout - 2MetaDigital</title>

          <meta description='Accede al presupuesto completo para tu proyecto.' content='' />
          <meta property="og:description" content="Accede al presupuesto completo para tu proyecto." />
          
          <link rel="icon" type="image/png" href="/fav6.png" />
          <meta property="og:image" content="/meta6.png" />
      
          <meta name="robots" content="noindex"/>
      </Head>

      <div style={header}>
        <Container>
          <Col md="8" className='offset-md-2'>
            <img alt="" className="img-fluid p-2" src="/assets/images/logo/logo4neg.png" />
          </Col>
        </Container>
      </div>
      <div className="m-b-20 p-t-100 p-b-100" style={header}>
        <Container>
          <Col md="8" className='offset-md-2'>
            <h1 className="m-0 m-b-20" style={line}><b>Checkout</b></h1>
            <p className="text-white" style={line}>Id: {id}</p>
          </Col>
        </Container>
      </div>
      <div className="m-t-40">
        <Container>
          <Col md="8" className='offset-md-2' style={step}>
            <h4 className="m-0 text-uppercase"><u>Paso 1</u></h4>
            <h2 className="m-0 mb-3">Presupuesto</h2>
            <p className="m-b-10 mb-4" style={line}>Accede a los detalles del presupuesto.</p>
            <a className="button" href={factura} target="_blank">Ver Presupuesto →</a>
          </Col>
        </Container>
      </div>
      <div className="mt-5 m-b-20">
        <Container>
          <Col md="8" className='offset-md-2' style={step}>
            <h4 className="m-0 text-uppercase"><u>Paso 2</u></h4>
            <h2 className="m-0 mb-3">Primer pago (50%)</h2>
            <p className="m-b-10 mb-4" style={line}>El primera mitad del pago se realiza para empezar con el trabajo.</p>
            <MpButton />
            <a className="button" id="btn-mp">Pagar →</a>
          </Col>
        </Container>
      </div>
      <div className="mt-5 m-b-20">
        <Container>
          <Col md="8" className='offset-md-2' style={step}>
            <h4 className="m-0 text-uppercase"><u>Paso 3</u></h4>
            <h2 className="m-0 mb-3">Segundo pago (50%)</h2>
            <p className="m-b-10 mb-4" style={line}>El segunda mitad del pago se realiza cuando trabajo está completo.</p>
            <a className="button" href={paypal} target="_blank">Pagar →</a>
          </Col>
        </Container>
      </div>
      <div className="mt-5 pt-2 pb-2 text-center" style={header}>
        <Container>
          <Col md="8" className='offset-md-2'>
            <span className="text-white d-block">Copyright 2022 - 2MetaDigital</span>
          </Col>
        </Container>
      </div>
      <style jsx>{`
        .button {
          background: var(--primary);
          color: white;
          padding: 15px 20px;
          border-radius: 2px;
          display: block;
          transition: all .2s ease;
        }
        .button:hover {
          background: var(--secondary);
          padding: 15px 30px;
        }
        h2{
          color: var(--secondary);
        }
      `}</style>
    </Fragment>
  )
}

export default Checkout
