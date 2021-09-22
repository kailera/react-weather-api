import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import { Provider } from 'react-redux';
import store from './redux/store';

import theme from './theme';

import Home from './pages/home/index.jsx';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset/>
        <Home />
      </ThemeProvider>
    </Provider>
  );
}
