import React, { FormEvent, useState } from 'react';
import { Input } from '../../components/Input';
import api from '../../services/api';

interface PropsForm {
  item: any;
  handleRemoveBook: Function;
}

export const Form = ({item, handleRemoveBook} : PropsForm) => {
  const [disabledButton, setDisabledButton] = useState(true); 
  const [name, setName] = useState(item.name); 
  const [author, setAuthor] = useState(item.author); 
  const [year, setYear] = useState(item.year); 
  const [genre, setGenre] = useState(item.genre); 
  const [publisher, setPublisher] = useState(item.publisher); 
  const [page, setPage] = useState(item.page); 
  const [status, setStatus] = useState(item.status); 

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const data = {
      name, 
      author,
      year, 
      genre,
      publisher,
      page,
      status
    }

      if(status === 'disponível' || status === 'Disponível' 
        || status === 'alugado' || status === 'Alugado' ){
  
        await api.put(`book/${item.id}`, data);
        alert(`Livro de id ${item.id} atualizado com sucesso`);
      }else{
      alert("Status não pode ser diferente de Disponível ou Alugado");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="dados-livro">
          <Input 
            name="nome"
            label="Nome do Livro"
            value={name}
            disabled={disabledButton}
            type="text"
            handleChange={(e: any) => setName(e.target.value)}
          />
          <Input 
            name="autor"
            label="Autor do livro"
            value={author}
            disabled={disabledButton}
            type="text"
            handleChange={(e: any) => setAuthor(e.target.value)}
          />
          <Input 
            name="ano"
            label="Ano do livro"
            value={year}
            disabled={disabledButton}
            type="text"
            handleChange={(e: any) => setYear(e.target.value)}
          />
          <Input 
            name="genero"
            label="Gênero do livro"
            value={genre}
            disabled={disabledButton}
            type="text"
            handleChange={(e: any) => setGenre(e.target.value)}
          />
          <Input 
            name="editora"
            label="Editora do livro"
            value={publisher}
            disabled={disabledButton}
            type="text"
            handleChange={(e: any) => setPublisher(e.target.value)}
          />
          <Input 
            name="paginas"
            label="Nº de páginas do livro"
            value={page}
            disabled={disabledButton}
            type="number"
            handleChange={(e: any) => setPage(e.target.value)}
          />
          <Input 
            name="status"
            label="Status do livro"
            value={status}
            disabled={disabledButton}
            type="text"
            handleChange={(e: any) => setStatus(e.target.value)}
          />
        </div>
      <div className={disabledButton ? 'buttons salvar-alteracoes' : 'buttons'}>
        <button type="submit">Salvar</button>
      </div>
      </form>
      <div className="buttons">
        <button onClick={() => setDisabledButton(false)}>Editar Livro</button>
        <button onClick={() => handleRemoveBook(item.id)}>Remover Livro</button>
      </div>
    </>
  )
}
