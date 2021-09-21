import React from 'react';
import { Book } from '../../Interface/Book';
import { Box, Typography, Grid } from '@material-ui/core';
import * as S from './Card.styles';

type BookItemProps = {
  item: Book;
  open?: any;
}

const Card = ({item, open} : BookItemProps) => {
  return (
    <S.CardItem onClick={open}>
      <Box sx={{ p: '12px' }}>
        <Grid container>
          <Grid item md={4}>
            <S.ImageWrapper>
              <img src="https://via.placeholder.com/120x120/ccc/000" alt="Photo book" />
            </S.ImageWrapper>
          </Grid>
          <Grid item md={8}>
            <Typography variant="body2">
              <Typography variant="subtitle2" component="span">Livro:</Typography> {item.name.length > 15 ? item.name.substr(0, 15) + '...' : item.name}
            </Typography>
            <Typography variant="body2">
              <Typography variant="subtitle2" component="span">Autor:</Typography> {item.author}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ bgcolor: '#b49d88', borderRadius: '0 0 4px 4px', color: '#fff', textAlign: 'center' }}>
        <Typography variant="subtitle2">Clique para mais detalhes</Typography>
      </Box>
    </S.CardItem>
  )
}

export default Card;