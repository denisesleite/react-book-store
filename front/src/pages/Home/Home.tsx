import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Input from "../../components/Input";
import { Form } from '@unform/web'

import imgReadingBook from '../../assets/img/background.svg';

import { Container, Section } from './Home.styles';

const Home = () => {
  const history = useHistory();

  const handleSubmit = () =>{
    history.push('/listing-books');
  }

  return (
    <Container>
      <Section>
        <img src={imgReadingBook} alt="" />
      </Section>  
      
      <Section> 
        <div>
          <h1>Bem-vindo a BookHouse</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque delectus esse quisquam, beatae reprehenderit non voluptas aliquid? Praesentium, nihil incidunt nulla vero recusandae fugit velit, officia id assumenda distinctio maiores.</p>
        </div>

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
      </Section>
    </Container>
  )
}

export default Home;