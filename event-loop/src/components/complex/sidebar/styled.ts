import styled from 'styled-components';
import theme from '../../../theme';

export const Container = styled.div`
  grid-area: side;
  border-left: solid black;
  padding: 1rem;
`;

export const Item = styled.div<{ selected?: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.selected ? theme.maine.fg : 'inherit')};
  font-size: ${(props) => (props.selected ? '1.5rem' : 'inherit')};
  transition: all 0.3s;
`;
