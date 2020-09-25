import React, {useState, ChangeEvent} from 'react';
import { FiSearch } from 'react-icons/fi';
import api from '../../services/api';

import { Input } from '../Input';

import './style.css';

export default function Search(){

    return (
        <div className="pesquisa">
            <div className="campo-busca">
                <form onSubmit={() => {}}>
                    <Input 
                        type="text"
                        name="pesquisa"
                        placeholder="Pesquisar por..."
                    />
                    <FiSearch />
                </form>
            </div>
            <div>
                {/* <button onClick={() => setModalAdicionaLivro(true)}>Adicionar Livro</button> */}
            </div>
        </div>
    )
}   