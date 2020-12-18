import styled from 'styled-components';

const size = 20;

export const Circle = styled.div`
  height: ${size}rem;
  width: ${size}rem;
  border: solid grey 2rem;
  border-radius: 50%;
  opacity: 0.3;
`;

export const Segment = styled.div`
  height: ${size}rem;
  width: ${size}rem;
  border: solid transparent 2rem;
  border-top: solid grey 2rem;
  border-radius: 50%;
`;
