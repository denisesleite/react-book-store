import React, { FormEvent, useState } from 'react';

import { Input } from '../../components/Input';

import api from '../../services/api';

interface PropsForm {
  item?: any;
  children: any;
  disabled?: any;
  type?: string;
}

export const Form = ({item, children, disabled, type} : PropsForm) => {
  const [name, setName] = useState(item.name || ''); 
  const [author, setAuthor] = useState(item.author || ''); 
  const [year, setYear] = useState(item.year || ''); 
  const [genre, setGenre] = useState(item.genre || ''); 
  const [publisher, setPublisher] = useState(item.publisher || ''); 
  const [page, setPage] = useState(item.page || ''); 
  const [status, setStatus] = useState(item.status || '');

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

      switch(type){
        case "addBook":
          await api.post('book', data);
          alert(`Livro ${name} criado com sucesso`);
        break;

        case "updateBook":
          await api.put(`book/${item.id}`, data);
          alert(`Livro de id ${item.id} atualizado com sucesso`);
        break;

        default:
          break;
      }
    }else{
      alert("Status não pode ser diferente de Disponível ou Alugado");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="modal__content-data-book">
          <Input 
            name="nome"
            label="Nome do Livro"
            value={name}
            disabled={disabled}
            type="text"
            handleChange={(e: any) => setName(e.target.value)}
          />
          <Input 
            name="autor"
            label="Autor do livro"
            value={author}
            disabled={disabled}
            type="text"
            handleChange={(e: any) => setAuthor(e.target.value)}
          />
          <Input 
            name="ano"
            label="Ano do livro"
            value={year}
            disabled={disabled}
            type="number"
            handleChange={(e: any) => setYear(e.target.value)}
          />
          <Input 
            name="genero"
            label="Gênero do livro"
            value={genre}
            disabled={disabled}
            type="text"
            handleChange={(e: any) => setGenre(e.target.value)}
          />
          <Input 
            name="editora"
            label="Editora do livro"
            value={publisher}
            disabled={disabled}
            type="text"
            handleChange={(e: any) => setPublisher(e.target.value)}
          />
          <Input 
            name="paginas"
            label="Nº de páginas do livro"
            value={page}
            disabled={disabled}
            type="number"
            handleChange={(e: any) => setPage(e.target.value)}
          />
          <Input 
            name="status"
            label="Status do livro"
            value={status}
            disabled={disabled}
            type="text"
            handleChange={(e: any) => setStatus(e.target.value)}
          />
        </div>

        {children}
      </form>
    </>
  )
}
