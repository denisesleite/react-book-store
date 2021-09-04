import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Input from "../../components/Input";
import { Form } from '@unform/web'

import imgReadingBook from '../../assets/img/background.svg';

import { Image, Container, GridCol } from './Home.styles';
import { Grid, Box, Typography } from '@material-ui/core';

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
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque delectus esse quisquam, beatae reprehenderit non voluptas aliquid? Praesentium, nihil incidunt nulla vero recusandae fugit velit, officia id assumenda distinctio maiores.</p>
        
          <Form onSubmit={handleSubmit}>
            <Input 
              name="usuario"
              label="Usuário"
            />
            
            <Input 
              name="senha"
              label="Senha"
              type="password"
            />
            
            <button>
              <span>Entrar</span> <FiArrowRight />
            </button>
          </Form>
        </Box>
      </GridCol>
    </Container>
  )
}

export default Home;