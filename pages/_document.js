import Document, { Html, Head, Main, NextScript } from 'next/document';
import React, {useEffect} from 'react';

const BaseCSS = ({ css }) =>
  <style
    dangerouslySetInnerHTML={{
      __html: css
    }}
  />

BaseCSS.defaultProps = {
  css: '*{box-sizing:border-box}body{margin:0}'
}

export default class MyDocument extends Document {
  /*
  setGA = () => {
    ReactGA.initialize('G-2LCKTCVVTK');
    ReactGA.pageview('Init page view');
  };
  componentDidMount(){
    this.setGA();
  }*/
  render() {
    /*const mercadopago = require("mercadopago");
    mercadopago.configure({
      access_token: "TEST-3617671749737057-061401-5eb30314e7645009c1caf0dad08c024f-67919268",
    });
    let preference = {
      tracks: [
          {
              type: "facebook_ad",
              values: {
                  "pixel_id": '1038198026550249'
              }
          }
      ],
      back_urls: {
          success: "https://2meta.digital/gracias",
          failure: "https://2meta.digital/denegado"
      },
      auto_return: "approved",
      items: [
        {
          title: "Proyecto para ",
          unit_price: 18000,
          quantity: 1,
        },
      ],
    };

    const isBrowser = typeof window !== 'undefined';
    if (isBrowser) {
      mercadopago.preferences
      .create(preference)
      .then(async function (response) {
        console.log(response);
          const script = document.createElement("script");
          script.src = "https://sdk.mercadopago.com/js/v2";
          script.async = true;
          script.setAttribute('data-preference-id', response.body.id);
          script.setAttribute('data-button-label', "MercadoPago");
          
          let form = document.getElementById('btn-mp');
          if(!global.init_point) form.appendChild(script);
              global.init_point = response.body.init_point;
          })
      .catch(function (error) {
        console.log(error);
      });
    }*/
  
    return (
      <Html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='generator' content='mdx-docs' />
          {/*
          <link href="https://fonts.googleapis.com/css?family=Capriola&amp;subset=latin-ext" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Satisfy" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Alex+Brush&amp;subset=latin-ext" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Raleway:400,600,700,800,900&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800" rel="stylesheet" />
          */}
          <BaseCSS />
          <script src="https://sdk.mercadopago.com/js/v2"></script>
        </Head>
        <body className="try">
          {/*<a id="btn-mp" className='btnmp'>Pagar</a>*/}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}   