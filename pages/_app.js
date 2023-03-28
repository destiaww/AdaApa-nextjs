import NProgress from 'nprogress';
import { Router } from 'next/router';
import { useState, useEffect } from 'react';
import 'nprogress/nprogress.css';
import 'ahmad/styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
      NProgress.start();
    };
    const end = () => {
      setLoading(false);
      NProgress.done();
    };

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return (
    <>
      {loading && (
        <div className="loading-screen">
          <div className="loader"></div>
        </div>
      )}
      <Component {...pageProps} />
    </>
  );
}
