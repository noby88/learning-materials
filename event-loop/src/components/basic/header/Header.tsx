import React from 'react';
import { useSelector } from 'react-redux';

import { IState } from '../../../store';

import { Container } from './styles';

const Header = () => {
  const title = useSelector((state: IState) => state.title);

  return <Container>{title}</Container>;
};

export default Header;
