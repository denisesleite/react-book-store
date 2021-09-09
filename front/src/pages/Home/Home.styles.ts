import styled from 'styled-components';
import { Grid, Box, Button } from '@material-ui/core';
import { customMedia } from '../../assets/css/Theme';

export const Container = styled(Grid)`
  height: 100vh;
`;

export const GridCol = styled(Grid)`
  background: #faf7f5;
  height: inherit;
  display: flex;
  align-items: center;

  ${customMedia.lessThan("md")`
    flex-direction: column;
    justify-content: center;
  `}
`;

export const Text = styled(Box)`
  color: #666;
  line-height: 20px;
`;

export const Image = styled.img`
  max-width: 75%;

  ${customMedia.lessThan("md")`
    max-width: 60%
  `}; 
`;

export const CButton = styled(Button)`
  
`;
