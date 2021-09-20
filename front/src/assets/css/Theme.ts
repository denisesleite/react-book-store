import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

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

theme = responsiveFontSizes(theme);