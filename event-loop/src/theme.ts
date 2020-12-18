import styled from 'styled-components';

const theme = {
  maine: {
    fg: '#DE411B',
  },
};

export const Container = styled.div`
  background-image: repeating-linear-gradient(
      45deg,
      rgba(97, 97, 97, 0.1) 0px,
      rgba(97, 97, 97, 0.1) 2px,
      transparent 2px,
      transparent 4px
    ),
    linear-gradient(90deg, rgb(43, 43, 43), rgb(43, 43, 43));
  color: whitesmoke;
  min-height: 100vh;

  display: grid;
  grid-template-areas: 'header header' 'main side';
  grid-template-columns: 1fr 20rem;
  grid-template-rows: 5rem 1fr;
`;

export default theme;
