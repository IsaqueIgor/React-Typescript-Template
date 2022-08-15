import React from 'react';

import { ThemeProvider } from 'styled-components';

import * as themes from './styles/themes';
import GlobalStyles from './styles/global';
import useAppTheme from './contexts/theme';

const App = () => {
  const { currentTheme } = useAppTheme();

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyles />
      <>
        <h1>dsdsd</h1>
      </>
    </ThemeProvider>
  );
};

export default App;
