import React, { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'
import {Container, Col, Row, Badge, Spinner, Modal, ModalHeader, ModalBody} from 'reactstrap';
import { useRouter } from "next/router";
import Link from 'next/link';

const Checkout = () => {

  const line = {
    lineHeight: 1.5,
    paddingBottom: 15,
  }
  const footer = {
    background: 'var(--secondary)',
    textAlign: 'center'
  }
  
  const router = useRouter();
  const id = router.query.id
  const ref = router.query.ref
  
  const [presupuesto, setPresupuesto] = useState([]);
  useEffect(() => {
    async function Presupuesto() {
      const res = await fetch(`https://api.2meta.digital/api/facturas/${id}?populate=%2A`);
      const data = await res.json();
      setPresupuesto(data.data != null && data.data.attributes);
      document.body.style.setProperty('--primary', 'seagreen');
      document.body.style.setProperty('--secondary', '#33475b');
    } 
    Presupuesto();
  }, [ref]);

  presupuesto.ref != null && ref != presupuesto.ref && setPresupuesto(null);
  const urlpresupuesto = `/presupuesto?id=${id}&ref=${ref}`;
  
  const [open, setOpen] = useState(false);

  const paypal = presupuesto.pais === "ar"
    ? `https://paypal.me/2metadigital/${presupuesto.precio && presupuesto.precio.map(p => p.total/2/200)}`
    : `https://paypal.me/2metadigital/${presupuesto.precio && presupuesto.precio.map(p => p.total/2)}`;

  const mp = presupuesto.mp;

  return (
    <Fragment>
      <Head>
          <title>Checkout - 2MetaDigital</title>

          <meta description='Accede al presupuesto completo para tu proyecto.' content='' />
          <meta property="og:description" content="Accede al presupuesto completo para tu proyecto." />
          
          <link rel="icon" type="image/png" href="/fav6.png" />
          <meta property="og:image" content="/meta6.png" />
      
          <meta name="robots" content="noindex"/>
          <script src="https://sdk.mercadopago.com/js/v2"></script>
      </Head>
      <div className="pt-2 pb-2 nav">
        <Container>
          <Col lg="8" className='offset-lg-2 d-flex align-items-center justify-content-between flex-wrap'>
            <div className='d-flex align-items-center pr-3'>
              <img src="/fav6.png" />
              <h6 className="pl-2">2metadigital</h6>
            </div>
            <div className="pt-2 pb-2">
              <h6>Pago: {
              presupuesto.primerpago & presupuesto.segundopago === true ? <Badge color="success">Completado</Badge> : <Badge color="warning">Pendiente <Spinner size="sm">Update</Spinner></Badge>
              }</h6>
            </div>
          </Col>
        </Container>
      </div>
      <div className="m-b-20 pt-5 pb-5 header">
        <Container>
          <Col lg="8" className='offset-lg-2'>
            <h1 className="m-0 mb-2" style={{color: "var(--secondary)"}}><b>Checkout</b></h1>
            <p className="mb-3" style={line}>Elige el medio de pago de tu preferencia.</p>
            <p className="" style={line}>Facturación para: <Badge color="primary">{presupuesto.cliente}</Badge></p>
            {presupuesto.dospagos ? [
            <p className="" style={line}><b>Dos pagos de:</b> <Badge color="success">${presupuesto.precio && presupuesto.precio.map(p => p.total/2)} {presupuesto.pais === "ar" ? "ARS" : "USD"}</Badge></p>,
            <p className="" style={line}><b>Primer Pago:</b> {presupuesto.primerpago === true ? <Badge color="success">Completado</Badge> : <Badge color="warning">Pendiente <Spinner size="sm">Update</Spinner></Badge>}</p>,
            <p className=""><b>Segundo Pago:</b> {presupuesto.segundopago === true ? <Badge color="success">Completado</Badge> : <Badge color="warning">Pendiente <Spinner size="sm">Update</Spinner></Badge>}</p>
            ] : [
            <p className="" style={line}><b>Un pago de:</b> <Badge color="success">${presupuesto.precio && presupuesto.precio.map(p => p.total)} {presupuesto.pais === "ar" ? "ARS" : "USD"}</Badge></p>,
            <p className="" style={line}><b>Estado del Pago:</b> {presupuesto.primerpago === true ? <Badge color="success">Completado</Badge> : <Badge color="warning">Pendiente <Spinner size="sm">Update</Spinner></Badge>}</p>
            ]}
          </Col>
        </Container>
      </div>
      <div className='text-center'>
        <Container>
          <Col lg="8" className='offset-lg-2'>
            <h2 className='mt-5'>Selecciona un medio de pago</h2>
            {presupuesto.pais === "ar" && [
            <a onClick={() => setOpen(true)} className='btnBig mt-4 ml-auto mr-auto' style={{background:""}}>Transferencia Bancaria (5% OFF)</a>,
            <a href={mp} target="_blank" className='btnBig mt-3 ml-auto mr-auto' style={{background:"#009ee3"}}>MercadoPago</a>
            ]}
            <a href={paypal} target="_blank" className='btnBig mt-3 ml-auto mr-auto' style={{background:"#005ea6"}}>Paypal</a>
            <p className='mt-3'>Próximamente:</p>
            <a className='btnBig mt-1 ml-auto mr-auto' style={{background:"orange"}}>Criptomonedas (5% OFF)</a>
          </Col>
        </Container>
        <Modal centered isOpen={open} toggle={() => setOpen(false)}>
          <ModalHeader charCode="X" toggle={() => setOpen(false)}>
            Pagar por Transferencia Bancaria
          </ModalHeader>
          <ModalBody>
            <h5>Enviar el pago al siguiente CBU:</h5>
            <p className='mt-2'><b>CBU:</b> <Badge color="primary">1430001713004964240016</Badge></p>
            <p className='mt-2'><b>Monto:</b> <Badge color="success">${presupuesto.dospagos ? presupuesto.precio && presupuesto.precio.map(p => p.total/2*0.95) : presupuesto.precio && presupuesto.precio.map(p => p.total*0.95)} {presupuesto.pais === "ar" ? "ARS" : "USD"}</Badge> <Badge color="success">5% OFF</Badge></p>
            <p className='mt-2 mb-1'>Tu pago se verificará y se actualizará el Estado de Pago automáticamente.</p>
          </ModalBody>
        </Modal>
      </div>
      <div className="mt-5 pt-2 pb-2 text-center" style={footer}>
        <Container>
          <Col lg="8" className='offset-lg-2'>
            <Link href={urlpresupuesto}><a className='text-white' style={{fontWeight:300}}><u>Volver a ver presupuesto</u></a></Link>
            <span className="text-white d-block">Copyright 2022 - 2MetaDigital</span>
          </Col>
        </Container>
      </div>
      <style jsx global>{`
        .spinner-border-sm{
          width: .6rem;
          height: .6rem;
          vertical-align: top;
          margin-left: 2px
        }
        .badge-warning {
        }`}
      </style>
      <style jsx>{`
        h2, h3, h4{
          color: var(--secondary)
        }
        .nav{
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1;
          width: 100%;
          background: white;
          border-bottom: 1px solid #ebebeb;
        }
        .header{
          background: #f3f3f3;
          border-top: 1px solid #ebebeb;
          border-bottom: 1px solid #ebebeb;
          margin-top: 40px;
        }
        .aclaraciones{
          background: #f3f3f3;
          padding: 1rem;
          border-radius: 2px;
          border: 1px solid #ebebeb;
        }
        .aclaraciones p{
          font-size: calc(12px + 1 * (100vw - 300px) / 1620);
        }
        .pago {
          display: flex;
          align-items: center;
          justify-content: end;
        }
        .btnBig {
          background: var(--primary);
          color: white;
          padding: .75rem 1.2rem;
          border-radius: 2px;
          display: block;
          max-width: 300px;
          text-transform: uppercase;
          font-weight: 600;
          transition: all .2s ease;
        }
        .btnBig:hover {
          opacity: .7;
          color: white;
          padding: .75rem 1.5rem;
          max-width: 310px;
        }
        @media only screen and (max-width: 767px){
          .btnBig {
            margin: auto;
            width: 100%;
            max-width: none;
          }
          .pago{
            flex-direction: column;
          }
        }
        .table{
          background: #f3f3f3;
          border: 2px solid #ffffff;
        }
        .spinner-border-sm{
          width: 0.75rem;
          heigth: 0.75rem;
        }
        ::selection {
          background-color: var(--secondary);
          color: #fff;
        }
      `}</style>
    </Fragment>
  )
}

export default Checkout
