/* eslint-disable @next/next/no-page-custom-font */
import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/globals.css';
import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>MyTop</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>;

}

export default MyApp;
