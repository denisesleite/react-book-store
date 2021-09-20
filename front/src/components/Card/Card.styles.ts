import styled from 'styled-components';
import { Box } from '@material-ui/core';

export const CardItem = styled.li`
  cursor: pointer;
`;

export const ImageWrapper = styled(Box)`
  margin-right: 10px;

  > img {
    border-radius: 10px
  }
`;