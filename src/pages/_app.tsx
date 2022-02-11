import NextApp, { AppProps } from 'next/app';
import Head from 'next/head';
import React, { FC } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';

const Meta: FC = () => {
  return (
    <Head>
      <title>DieBassBooster</title>

      <link href="/static/manifest.json" rel="manifest" />
    </Head>
  );
};

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    font-family: Roboto;
    overflow-x: hidden;
    background-color: #18181B;
    color: #efeff1;
  }
`;

const Main = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{}}>
        <Meta />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default class App extends NextApp {
  render() {
    return <Main {...this.props} />;
  }
}
