import React, { useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './styles.css';
import '../../assets/css/app.css';
import { useHistory } from 'react-router-dom';
import Input from "../../Component/Input";

const Home = () => {
    const formRef = useRef(null);

    const history = useHistory();

    async function handleSubmit(data: any){

        // const schema = Yup.object().shape({
        //     usuario: Yup.string().required('O nome é obrigatório!'),
        //     senha: Yup.string().required('A senha é obrigatória!'),
        // });

        // await schema.validate(data, {
        // })

        history.push('/listagem-livros');
    }

    return (
        <div className="tela-login">
            <div className="coluna background">
                <div>
                    <h1>Bem-vindo a Livraria Radical</h1>
                    
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque delectus esse quisquam, beatae reprehenderit non voluptas aliquid? Praesentium, nihil incidunt nulla vero recusandae fugit velit, officia id assumenda distinctio maiores.</p>

                    <div className="form-mobile">
                        
                    </div>
                </div>
            </div>  
            <div className="coluna form"> 
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