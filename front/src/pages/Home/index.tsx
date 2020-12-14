import React, { useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { Input } from "../../components/Input";

import imgReadingBook from '../../assets/img/background.svg';

import './styles.css';

const Home = () => {
  const formRef = useRef(null);

  const history = useHistory();

  const handleSubmit = () =>{
      history.push('/listing-books');
  }

  return (
    <div className="tela__login">
      <div className="tela__login-col background">
        <div>
          <img src={imgReadingBook} alt=""/>
        </div>
      </div>  
      <div className="tela__login-col form"> 
        <img className="image__mobile" src={imgReadingBook} alt=""/>

        <div>
          <h1>Bem-vindo a BookHouse</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque delectus esse quisquam, beatae reprehenderit non voluptas aliquid? Praesentium, nihil incidunt nulla vero recusandae fugit velit, officia id assumenda distinctio maiores.</p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit}>
          <Input 
            name="usuario"
            label="Usuário"
            type="text"
          />
          
          <Input 
            name="senha"
            label="Senha"
            type="password"
          />
          <div className="form__input">
            <button>
              <span>Entrar</span> <FiArrowRight />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home;