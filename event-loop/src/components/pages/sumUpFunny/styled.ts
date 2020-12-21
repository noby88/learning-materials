import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-areas: 'one';
`;

export const Stack = styled.div`
  grid-area: one;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled.div`
  animation: ${rotate} 0.3s linear infinite;
`;
