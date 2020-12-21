import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ACTIONS, IState } from '../../../store';

import { Container, Item } from './styled';

export const steps = ['Blank slate', 'Sum up funny'];

const Sidebar = () => {
  const step = useSelector((state: IState) => state.step);

  const dispatch = useDispatch();

  const nextStep = useCallback(() => {
    dispatch({
      type: ACTIONS.setStep,
      payload: step < steps.length - 1 ? step + 1 : step,
    });
  }, [dispatch, step]);

  const prevStep = useCallback(() => {
    dispatch({
      type: ACTIONS.setStep,
      payload: step > 0 - 1 ? step - 1 : step,
    });
  }, [dispatch, step]);

  const keyDown = useCallback(
    (e: KeyboardEvent) => {
      e.code === 'ArrowDown' && nextStep();
      e.code === 'ArrowUp' && prevStep();
    },
    [prevStep, nextStep]
  );

  useEffect(() => {
    window.addEventListener('keydown', keyDown);
    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  }, [keyDown]);

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
