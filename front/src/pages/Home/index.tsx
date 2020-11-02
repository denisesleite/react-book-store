import React, { useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './styles.css';
import '../../assets/css/app.css';
import { useHistory } from 'react-router-dom';
import { Input } from "../../components/Input";

const Home = () => {
  const formRef = useRef(null);

  const history = useHistory();

  const handleSubmit = () =>{
      history.push('/listing-books');
  }

  return (
    <div className="tela-login">
      <div className="col background">
        <div>
          <h1>Bem-vindo a Livraria Radical</h1>
          
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque delectus esse quisquam, beatae reprehenderit non voluptas aliquid? Praesentium, nihil incidunt nulla vero recusandae fugit velit, officia id assumenda distinctio maiores.</p>
        </div>
      </div>  
      <div className="col form"> 
        <h1 className="title-mobile">Bem-vindo a Livraria Radical</h1>

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

          <div className="input-form">
            <button><span>Entrar</span> <FiArrowRight/></button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home;