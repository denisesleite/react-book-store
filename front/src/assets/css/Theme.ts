import { createTheme } from '@material-ui/core/styles';
import { generateMedia } from 'styled-media-query';

export const customMedia = generateMedia({
  md: "959px"
});

export const theme = createTheme({
  overrides: {
    MuiFormLabel: {
      root: {
        '&$focused':{
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
  typography: {
    h4: {
      // [customMedia.lessThan('md')]:{
      //   fontSize: 10
      // },
    }
  }
});