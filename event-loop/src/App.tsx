import React from 'react';
import { Provider } from 'react-redux';

import Header from './components/basic/header/Header';
import Main from './components/complex/main/Main';
import Sidebar from './components/complex/sidebar/Sidebar';

import store from './store';

import { Container } from './theme';

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Header />
        <Sidebar />
        <Main />
      </Container>
    </Provider>
  );
};

export default App;
