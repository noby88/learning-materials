import React from 'react';
import { useSelector } from 'react-redux';

import FullCircle from '../../basic/circle/FullCircle';

import { IState } from '../../../store';

import { Container } from './styled';
import SumUpFunny from '../../pages/sumUpFunny/SumUpFunny';

const steps: { [key: number]: () => JSX.Element } = {
  0: FullCircle,
  1: SumUpFunny,
};

const Main = () => {
  const step = useSelector((state: IState) => state.step);

  return <Container>{steps[step]?.()}</Container>;
};

export default Main;
