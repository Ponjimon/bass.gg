import React from 'react';
import reset from 'styled-reset';
import styled, { createGlobalStyle } from 'styled-components';

const BackgroundVideo = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const Header = styled.header`
  position: relative;
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
`;

const GlobalStyle = createGlobalStyle`
    ${reset};
    html {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-size: 150%;
      line-height: 1.4;
    }
    h1 {
      font-family: 'Syncopate', sans-serif;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 3vw;
      line-height: 1.2;
      font-size: 3vw;
      text-align: center;
    span {
      display: block;
      font-size: 10vw;
      letter-spacing: -1.3vw;
    }
    html, body {
      height: 100%;
    }
    body {
      background-color: #000;
    }
}
    * {
        user-select: none
    }
`;

const Home = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <BackgroundVideo autoPlay muted loop playsInline>
        <source src="/static/bgvid.mp4" type="video/mp4"></source>
      </BackgroundVideo>
      <Header>
        <h1>
          Die
          <span>BassBooster</span>
        </h1>
      </Header>
    </>
  );
};

export default Home;
