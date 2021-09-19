import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import theme from '../theme.js';

import Home from './pages/home/index.jsx';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset/>
      <Home />
    </ThemeProvider>
  );
}
