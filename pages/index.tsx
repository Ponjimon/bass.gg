import React from 'react';
import reset from 'styled-reset';
import styled, { createGlobalStyle } from 'styled-components';
import { Container } from '../components/styles';

const BackgroundVideo = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const GlobalStyle = createGlobalStyle`
    ${reset};
    body {
        background: #3f48cc;
        color: #ff7f27;
    }
    * {
        user-select: none
    }
`;

const Home = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Container
        style={{ background: `url(/static/bass.jpg)`, backgroundSize: 'cover' }}
      />
      <BackgroundVideo autoPlay muted loop>
        <source src="/static/bgvid.mp4" type="video/mp4"></source>
      </BackgroundVideo>
    </>
  );
};

export default Home;
