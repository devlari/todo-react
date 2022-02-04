import React, { useState } from 'react';
import { RoutesApp } from './routes';
import { GlobalStyles } from './styles/globals';

import { ThemeProvider } from 'styled-components';
import { RenderHeader } from './components/Header/styles';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme === light ? dark : light);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <RenderHeader toggleTheme={toggleTheme} />
        <GlobalStyles />
        <RoutesApp />
      </ThemeProvider>
    </>
  );
}

export default App;
