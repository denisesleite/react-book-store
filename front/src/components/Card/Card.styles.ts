import styled from 'styled-components';
import { Box } from '@material-ui/core';

export const CardItem = styled.li`
  cursor: pointer;
  /* padding: 10px; */
  box-shadow: 1px 1px 8px 1px #ccc;
  border-radius: 4px;
  transition: all .2s ease;

  &:hover{
    transform: scale(1.1);
  }
`;

export const ImageWrapper = styled(Box)`
  margin-right: 10px;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;