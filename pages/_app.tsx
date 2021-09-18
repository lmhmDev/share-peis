import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CssBaseline } from '@mui/material';

function MyApp({ Component, pageProps }: AppProps) {

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles: any = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Component {...pageProps} />
    </React.Fragment>
  )
}
export default MyApp
