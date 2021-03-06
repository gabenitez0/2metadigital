import React, { useState, useEffect } from 'react';
//import Router from 'next/router';
//import NProgress from 'nprogress';
//import getConfig from 'next/config'
import { ToastContainer } from 'react-toastify';
import Head from 'next/head'

import 'bootstrap-scss';
import '../public/assets/scss/flaticon.scss';
import '../public/assets/scss/font-awesome.scss';
import "../public/assets/scss/color-1.scss"
import '../public/assets/scss/themify.scss';
import "../public/assets/scss/slick.scss";
import "../public/assets/scss/slick-theme.scss";
//import Customizer from '../containers/customizer';

/*
const { publicRuntimeConfig = {} } = getConfig() || {};

NProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner });

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};*/

function MyFunctionComponent({ children }) {
  /*
  const [loader, setLoader] = useState(true)
  const [goingUp, setGoingUp] = useState(false)

  useEffect(() => {
    // Page Loader
    setTimeout(() => {
      setLoader(false)
    }, 500)

    // Tap to Top Scroll 
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 500)
        setGoingUp(true);
      else
        setGoingUp(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  const tapToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    });
  }*/

  useEffect(async () => {
    const { default: ReactPixel } = await import('react-facebook-pixel');
    ReactPixel.init(2811703585759192, null, {
        autoConfig: true,
        debug: true,
      });
    ReactPixel.pageView();
  }, []);
  

  return (
    <> 
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    {children}
      {/*loader &&
        <div className="loader-wrapper">
          <div className="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
      </div>*/}
      <></>
    </>
  )
}

export default function MyApp({ Component, pageProps, graphql }) {
  return (
    <div>
      <MyFunctionComponent>
        <Component {...pageProps} />
        
      </MyFunctionComponent>
      <ToastContainer />
    </div>
  )
}