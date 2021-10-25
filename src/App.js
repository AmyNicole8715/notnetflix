import React from 'react';
import { ThemeProvider } from '@mui/material';
import PrimarySearchAppBar from './components/appBar';
import { StylesProvider } from '@mui/styles';
import { ThemeProvider as NNStyledProvider } from 'styled-components';
import theme from './theme/theme';
import styled from 'styled-components';
import { CssBaseline, Paper, Typography } from '@mui/material';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <StylesProvider injectFirst>
      <NNStyledProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline >
            <PrimarySearchAppBar />
            <Counter />
          </CssBaseline>
        </ThemeProvider>
      </NNStyledProvider>
    </StylesProvider>
  );
}

export default App;
