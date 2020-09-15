import React, { useState, FormEvent, ChangeEvent } from 'react';
import api from '../../services/api';

import '../../assets/css/app.css';
import '../ModalAdicionaLivro/styles.css';
import './styles.css';

const ModalAdicionaLivro = () => {
    const [formData, setFormData] = useState({
        nome: '',
        autor: '',
        ano: '',
        genero: '',
        editora: '',
        paginas: '',
        status: '',
    });

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        console.log(event.target);

        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    }

    async function handleAdicionaLivro(event: FormEvent){
        const { 
            nome,
            autor,
            ano,
            genero,
            editora,
            paginas,
            status
        } = formData;

        const data = {
            nome,
            autor,
            ano,
            genero,
            editora,
            paginas,
            status
        }

        const feedback = await api.post('livros', data);

        if(feedback.status == 200){
            alert('Livro adicionado com sucesso!');
        }
    }

    return (
        <form onSubmit={handleAdicionaLivro}>
            <div className="dados-livro">
                <div className="input-form">
                    <label htmlFor="">Nome do Livro</label>
                    <input type="text" name="nome" required onChange={handleInputChange}/>
                </div>

                <div className="input-form">
                    <label htmlFor="">Autor do Livro</label>
                    <input type="text" name="autor" required onChange={handleInputChange}/>
                </div>

                <div className="input-form">
                    <label htmlFor="">Ano do Livro</label>
                    <input type="text" name="ano" required onChange={handleInputChange}/>
                </div>

                <div className="input-form">
                    <label htmlFor="">Gênero do Livro</label>
                    <input type="text" name="genero" required onChange={handleInputChange}/>
                </div>

                <div className="input-form">
                    <label htmlFor="">Editora do Livro</label>
                    <input type="text" name="editora" required onChange={handleInputChange}/>
                </div>

                <div className="input-form">
                    <label htmlFor="">Páginas do Livro</label>
                    <input type="text" name="paginas" required onChange={handleInputChange}/>
                </div>

                <div className="input-form">
                    <label htmlFor="">Status do Livro</label>
                    <input type="text" name="status" required onChange={handleInputChange}/>
                </div>
            </div>

            <div>
                <div className="buttons">
                    <button>Adicionar Livro</button>
                </div>
            </div>
        </form>
    )
}

export default ModalAdicionaLivro;