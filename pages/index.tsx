import React from 'react';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { Container } from '../components/styles';

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
    </>
  );
};

export default Home;
