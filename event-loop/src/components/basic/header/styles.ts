import styled from 'styled-components';

export const Container = styled.div`
  grid-area: header;
  display: grid;
  justify-content: center;
  align-content: center;
  padding: 1rem;
  font-size: 1.5rem;

  background-image: repeating-linear-gradient(
      45deg,
      rgba(97, 97, 97, 0.1) 0px,
      rgba(97, 97, 97, 0.1) 2px,
      transparent 2px,
      transparent 4px
    ),
    linear-gradient(90deg, rgb(66, 66, 66), rgb(66, 66, 66));
  box-shadow: black 0 0 0.5rem;
`;
