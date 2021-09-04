import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web'

import imgReadingBook from '../../assets/img/background.svg';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { Container, GridCol, Image, Text } from './Home.styles';
import { Box, Button, Grid, IconButton, Typography, TextField } from '@material-ui/core';

const Home = () => {
  const history = useHistory();

  const handleSubmit = () =>{
    history.push('/listing-books');
  }

  return (
    <Container container alignItems="center">
      <Grid item md={6} sm={12}>
        <Box css={{ textAlign: 'center' }}>
          <Image src={imgReadingBook} />
        </Box>
      </Grid>  

      <GridCol item md={6} sm={12}> 
        <Box px={2}>
          <Typography variant="h4">Bem-vindo a BookHouse</Typography>
          <Text component="p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque delectus esse quisquam, beatae reprehenderit non voluptas aliquid? Praesentium, nihil incidunt nulla vero recusandae fugit velit, officia id assumenda distinctio maiores.</Text>
        
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
              
              <Button size="small">
                Entrar 
                <ArrowForward fontSize="small"  />
              </Button>
            </Form>
          </Box>
        </Box>
      </GridCol>
    </Container>
  )
}

export default Home;