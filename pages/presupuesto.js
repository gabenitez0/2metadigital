import React, { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'
import {Container, Col, Table, Badge, Spinner} from 'reactstrap';
import { useRouter } from "next/router";
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

const Presupuesto = () => {
  const footer = {
    background: 'var(--secondary)',
    textAlign: 'center'
  }
  const line = {
    lineHeight: 1.5,
    paddingTop: 15,
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
    }
    Presupuesto()
  }, [ref])

  presupuesto.ref != null && ref != presupuesto.ref && setPresupuesto(null)
  const checkout = `/checkout?id=${id}&ref=${ref}`

  /*const [subtotal, setSubtotal] = useState([]);
  setSubtotal(presupuesto.pedido && presupuesto.pedido.map(p => p.precio))
  const precios = presupuesto.pedido && presupuesto.pedido.map(p => p.precio);
  const subtotal = precios.reduce((a, b) => a + b, 0);
  console.log(subtotal);*/

  useEffect(() => {
    document.body.style.setProperty('--primary', 'seagreen')
    document.body.style.setProperty('--secondary', '#33475b')
  })

  return (
    <Fragment>
      <Head>
          <title>Presupuesto de proyecto - 2MetaDigital</title>

          <meta description='Accede al presupuesto completo para tu proyecto.' content='' />
          <meta property="og:description" content="Accede al presupuesto completo para tu proyecto." />
          
          <link rel="icon" type="image/png" href="/fav6.png" />
          <meta property="og:image" content="/meta6.png" />
      
          <meta name="robots" content="noindex"/>
      </Head>

      <div className="pt-2 pb-2 nav">
        <Container>
          <Col lg="8" className='offset-lg-2 d-flex align-items-center justify-content-between flex-wrap'>
            <div className='d-flex align-items-center pr-3'>
              <img src="/fav6.png" />
              <h6 className="pl-2">2metadigital</h6>
            </div>
            <div className="pt-2 pb-2">
              <h6>Pago: {presupuesto.primerpago & presupuesto.segundopago === true ? <Badge color="success">Completado</Badge> : <Badge color="warning">Pendiente <Spinner size="sm">Update</Spinner></Badge>}</h6>
            </div>
          </Col>
        </Container>
      </div>
      <div className="m-b-20 p-t-100 p-b-100 header">
        <Container>
          <Col lg="8" className='offset-lg-2'>
            <h1 className="m-0 m-b-20" style={{color: "var(--secondary)"}}><b>Presupuesto de Proyecto para {presupuesto.empresa}</b></h1>
              <p className="" style={line}>Creado por: <Badge color="primary">Gabriel Benitez</Badge> <Badge color="primary">CEO, Dev</Badge> <Badge color="primary">2metadigital</Badge></p>
            <p className="" style={line}>Para: <Badge color="primary">{presupuesto.cliente}</Badge> <Badge color="primary">{presupuesto.puesto}</Badge> <Badge color="primary">{presupuesto.empresa}</Badge></p>
            <p className="" style={line}>Fecha creación: <Badge color="light">{presupuesto.creado}</Badge> Vence: <Badge color="light">{presupuesto.vencimiento}</Badge></p>
            <p className="" style={line}>Referencia: <Badge color="light">{presupuesto.ref}</Badge></p>
          </Col>
        </Container>
      </div>
      <div className="m-t-40">
        <Container>
          <Col lg="8" className='offset-lg-2'>
          <Table bordered responsive>
            <thead>
              <tr>
                <th className='table text-white' style={{fontWeight: 400, background: "var(--secondary)"}}>
                  Servicio
                </th>
                <th className='text-right text-white table' style={{fontWeight: 400, background: "var(--secondary)"}}>
                  Precio
                </th>
              </tr>
            </thead>
            <tbody>
              { presupuesto.pedido && presupuesto.pedido.map((p, i) => (
              <tr key={i}>
                <th scope="row" className='table' style={{minWidth: 220}}>
                  {p.servicio}
                  <ReactMarkdown children={p.desc}/>
                </th>
                <td className='text-right table' style={{minWidth: 120, verticalAlign: 'middle'}}>
                  ${p.precio} {presupuesto.pais === "ar" ? "ARS" : "USD"}
                </td>
              </tr>
              ))}
            </tbody>
          </Table>
          </Col>
          <Col lg="8" className='offset-lg-2'>
          <Table borderless size="sm">
            <tr>
              <th style={{fontWeight: 400}}>
                Subtotal
              </th>
              <td className='text-right' style={{minWidth: 120, verticalAlign: 'middle'}}>${presupuesto.precio && presupuesto.precio.map(p => p.subtotal)} {presupuesto.pais === "ar" ? "ARS" : "USD"}</td>
            </tr>
            {presupuesto.precio && presupuesto.precio.map(p => p.motivo) != "" && 
            <tr>
              <th className='' style={{fontWeight: 400}}>
                {presupuesto.precio && presupuesto.precio.map(p => p.motivo)}
              </th>
              <td className='text-right' style={{minWidth: 120, verticalAlign: 'middle'}}>${presupuesto.precio && presupuesto.precio.map(p => p.descuento)} {presupuesto.pais === "ar" ? "ARS" : "USD"}</td>
            </tr>}
            <tr style={{borderBottom: "1px solid var(--secondary)"}}>
              <th style={{fontWeight: 600, fontSize: 15}}>
              Total
              </th>
              <td className='text-right' style={{minWidth: 120, verticalAlign: 'middle', fontWeight: 600, fontSize: 15}}>${presupuesto.precio && presupuesto.precio.map(p => p.total)} {presupuesto.pais === "ar" ? "ARS" : "USD"}</td>
            </tr>
            {presupuesto.dospagos &&
            <tr style={{borderBottom: "1px solid var(--secondary)"}}>
              <th style={{fontWeight: 600, fontSize: 15}}>
              En 2 Pagos de
              </th>
              <td className='text-right' style={{minWidth: 120, verticalAlign: 'middle', fontWeight: 600, fontSize: 15}}>${presupuesto.precio && presupuesto.precio.map(p => p.total/2)} {presupuesto.pais === "ar" ? "ARS" : "USD"}</td>
            </tr>}
          </Table>
          </Col>
          <Col lg="8" className='offset-lg-2'>
            <div className='pago'>
              <h6 className='mr-3 ml-3 mt-2 mb-2'>Estado del pago: {presupuesto.primerpago & presupuesto.segundopago === true ? <Badge color="success">Completado</Badge> : <Badge color="warning">Pendiente <Spinner size="sm">Update</Spinner></Badge>}</h6>
              <Link href={checkout}><a className="btnBig text-center mt-2 mb-2" onClick={() => fbq('track', 'InitiateCheckout')}>Proceder al pago →</a></Link>
            </div>
          </Col>
          <Col lg="8" className='offset-lg-2'>
            <div className='aclaraciones mt-3'>
              <h6><b>Aclaraciones de compra:</b></h6>
              <p className="pt-3"><b>1.</b> <u>Moneda Seleccionada</u>: {presupuesto.pais === "ar" ? "Pesos Argentinos" : "Dólares Estadounidenses"}.</p>
              <p className="pt-3"><b>2.</b> <u>Desarrollo Web</u>: el pago se realiza en 2 partes, se abona el 50% para iniciar con el proyecto, y el otro 50% cuando el proyecto está completado.</p>
              <p className="pt-3"><b>3.</b> <u>Mantenimiento Web</u>: debes tener en cuenta que este monto se paga mensualmente.</p>
              <p className="pt-3"><b>4.</b> <u>Campaña de Anuncios</u>: se realiza en un solo pago.</p>
            </div>
          </Col>
        </Container>
      </div>
      <div className="mt-5 pt-2 pb-2 text-center" style={footer}>
        <Container>
          <Col lg="8" className='offset-lg-2'>
            <a className='text-white' style={{fontWeight:300}}><u>Imprimir presupuesto</u></a>
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
        ul{
          padding-left: 1rem;
          list-style-type: initial;
        }
        ul li{
          font-weight: 400;
          font-size: calc(13px + (1 * (100vw - 300px)) / 1620);
          color: var(--secondary);
        }
        p{
          line-height: 1.5;
          padding-bottom: 5px;
          padding-top: 20px;
          font-weight: 500;
        }
        h1, h2, h3, h4, p{
          color: var(--secondary);
          line-height: 1.5;
        }
        `}
      </style>
      <style jsx>{`
        .nav{
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1;
          width: 100%;
          background: white;
          border-bottom: 1px solid #ebebeb;
        }
        .nav h6{
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
        .btnBig:hover {
          background: mediumseagreen;
          color: white;
          padding: .75rem 1.5rem;
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

export default Presupuesto
