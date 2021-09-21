import React from 'react';
import Routes from './routes';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StyleGlobal, theme } from './assets/css/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyleGlobal />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
