import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: #3f48cc;
`;

export const Center = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Content = styled.div`
  font-size: 15px;
  margin: 0 0.5em;
`;

export const Text = styled.h1`
  font-family: sans-serif;
  font-size: 0.9em;
  font-weight: 600;
  color: #efeff1;
`;

export const Title = styled.h1`
  font-family: sans-serif;
  font-size: 5em;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.5em;
  &:active {
    transform: scale(1.2);
    transition: transform 0.15s ease-in-out;
  }
`;
