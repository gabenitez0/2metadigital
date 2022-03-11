import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import getConfig from 'next/config'
import { ToastContainer } from 'react-toastify';
import ReactPixel from 'react-facebook-pixel';

import 'bootstrap-scss';
import '../public/assets/scss/flaticon.scss';
import '../public/assets/scss/font-awesome.scss';
import "../public/assets/scss/color-1.scss"
import '../public/assets/scss/themify.scss';
import "../public/assets/scss/slick.scss";
import "../public/assets/scss/slick-theme.scss";
//import Customizer from '../containers/customizer';


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
};

function MyFunctionComponent({ children }) {
  const [loader, setLoader] = useState(true)
  const [goingUp, setGoingUp] = useState(false)

  useEffect(() => {
    // Page Loader
    setTimeout(() => {
      setLoader(false)
    }, 1000)

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
  }

  const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
  const options = {
    autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    debug: false, // enable logs
  };
  ReactPixel.init('1038198026550249', advancedMatching, options);

  ReactPixel.pageView(); // For tracking page view
  ReactPixel.track(event, data); // For tracking default events. More info about standard events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#standard-events
  ReactPixel.trackSingle('1038198026550249', event, data); // For tracking default events.
  ReactPixel.trackCustom(event, data); // For tracking custom events. More info about custom events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#custom-events
  ReactPixel.trackSingleCustom('1038198026550249', event, data); // For tracking custom events.
  

  return (
    <>
      <Head>
        <title>Unice</title>
      </Head>
      {loader &&
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
        </div>}
      <>{children}</>
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