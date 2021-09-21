import styled from 'styled-components';
import { Grid, Box } from '@material-ui/core';
import { theme } from '../../assets/css/Theme';
import media from "styled-media-query";

export const Container = styled(Grid)`
  height: inherit;
`;

export const GridCol = styled(Grid)`
  background: #f4efec;
  height: inherit;
  display: flex;
  align-items: center;

  ${media.lessThan("medium")`
    flex-direction: column;
    justify-content: center;
  `}
`;

export const Text = styled(Box)`
  color: #666;
  line-height: 20px;
`;

export const ImageWrapper = styled(Box)`
  text-align: center;

  ${media.lessThan("medium")`
    margin: 20px 0;
  `};
`;

export const Image = styled.img`
  max-width: 75%;

  ${media.lessThan("medium")`
    max-width: 60%;
  `}
`;
