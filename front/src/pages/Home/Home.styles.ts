import styled from 'styled-components';
import { Grid, Box } from '@material-ui/core';

export const Container = styled(Grid)`
  height: 100vh;
`;

export const GridCol = styled(Grid)`
  background: #faf7f5;
  height: inherit;
  display: flex;
  align-items: center;
`;

export const Text = styled(Box)`
  color: #666;
  font-size: 14px;
  line-height: 20px;
`;

export const Image = styled.img`
  max-width: 75%;
`;

