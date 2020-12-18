import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ACTIONS, IState } from '../../../store';

import { Container, Item } from './styled';

export const steps = ['Blank slate', 'Sum up funny'];

const Sidebar = () => {
  const step = useSelector((state: IState) => state.step);

  const dispatch = useDispatch();

  const handleClick = (index: number) => {
    dispatch({ type: ACTIONS.setStep, payload: index });
  };

  return (
    <Container>
      {steps.map((item, index) => (
        <Item
          key={index}
          selected={index === step}
          onClick={() => handleClick(index)}
        >
          {item}
        </Item>
      ))}
    </Container>
  );
};

export default Sidebar;
