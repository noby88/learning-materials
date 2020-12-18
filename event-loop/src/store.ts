import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const ACTIONS = {
  setStep: 'SET_STEP',
};

export interface IState {
  title: string;
  step: number;
}

const initialContext: IState = {
  title: 'Event loop app',
  step: -1,
};

const reducer = (state = initialContext, action: any): IState => {
  switch (action.type) {
    case ACTIONS.setStep:
      return { ...state, step: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
