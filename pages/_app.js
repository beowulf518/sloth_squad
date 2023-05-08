import Head from 'next/head';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Sloth Squad</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="SlothSquad is a community-driven project dedicated to supporting sloth conservation efforts. Our team is made up of passionate individuals who are committed to making a positive impact on the world." />
      <meta name="keywords" content="sloth, conservation, cryptocurrency, community-driven, slothsquad" />
      <title>SlothSquad - Supporting Sloth Conservation Efforts with Cryptocurrency</title>
      <link rel="icon" href="/favicon.ico" />

      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
