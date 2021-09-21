import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { createGlobalStyle } from 'styled-components';

export let theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 480,
      md: 768,
      lg: 1200,
      xl: 1360,
    },
  },
  overrides: {
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: '#666',
        }
      }
    },
    MuiInput: {
      underline: {
        '&::after': {
          borderColor: '#666'
        }
      }
    }
  },
});

export const StyleGlobal = createGlobalStyle`
  #root {
    height: 100vh;
  }
`;

theme = responsiveFontSizes(theme);