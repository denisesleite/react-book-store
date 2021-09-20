import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web'

import imgReadingBook from '../../assets/img/background.svg';
import * as S from './Home.styles';
import { Box, Button, Grid, TextField, Typography, Hidden } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';

const Home = () => {
  const history = useHistory();

  const handleSubmit = () =>{
    history.push('/listing-books');
  }

  return (
    <S.Container container alignItems="center">
      <Hidden smDown>
        <Grid item xs={12} md={6}>
          <S.ImageWrapper>
            <S.Image src={imgReadingBook} />
          </S.ImageWrapper>
        </Grid>  
      </Hidden>

      <S.GridCol item md={6} xs={12}>
        <S.ImageWrapper display={{ md: 'none'}}>
          <S.Image src={imgReadingBook} />
        </S.ImageWrapper>

        <Box px={2}>
          <Typography variant="h4">Bem-vindo a BookHouse</Typography>
          <S.Text component="p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque delectus esse quisquam, beatae reprehenderit non voluptas aliquid? Praesentium, nihil incidunt nulla vero recusandae fugit velit, officia id assumenda distinctio maiores.</S.Text>
        
          <Box pt={2}>
            <Form onSubmit={handleSubmit}>
              <Box css={{ mb: 2 }}>
                <TextField 
                  name="usuario"
                  label="Usuário"
                  fullWidth
                />
              </Box>
            
              <TextField 
                name="senha"
                label="Senha"
                type="password"
                fullWidth
              />
              
              <Box display="flex" alignItems="center">
                <Button type="submit" style={{ marginTop: 20 }}>
                  Entrar 
                  <ArrowForward fontSize="small" style={{ marginLeft: 5 }} />
                </Button>
              </Box>
            </Form>
          </Box>
        </Box>
      </S.GridCol>
    </S.Container>
  )
}

export default Home;