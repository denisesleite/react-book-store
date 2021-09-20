import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Book } from '../../Interface/Book';
import { Box, Typography, ListItem } from '@material-ui/core';
import * as S from './Card.styles';

type BookItemProps = {
  item: Book;
  open?: any;
}

const Card = ({item, open} : BookItemProps) => {
  return (
    <S.CardItem onClick={open}>
      <Box sx={{ display: 'flex' }}>
        <S.ImageWrapper>
          <img src="https://via.placeholder.com/65x65" alt="Photo book" />
        </S.ImageWrapper>
        <Box>
          <Typography variant="body2">
            <Typography variant="subtitle2" component="span">Livro:</Typography> {item.name.length > 15 ? item.name.substr(0, 15) + '...' : item.name}
          </Typography>
          <Typography variant="body2">
            <Typography variant="subtitle2" component="span">Autor:</Typography> {item.author}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="body2">Clique para mais detalhes <FiPlus/></Typography>
      </Box>
    </S.CardItem>
  )
}

export default Card;