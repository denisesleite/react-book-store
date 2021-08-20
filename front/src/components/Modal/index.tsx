import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

import { Book } from '../../pages/Listing';
import { Form } from '@unform/web'
import { Input } from '../Input';
import { Container, Content } from './Modal.styles';
import api from '../../services/api';

type PropsModal = {
  data: Book;
  close?: () => void;
}

export const Modal = ({ data, close }: PropsModal) => {
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = async (book: Book) => {
    // await api.put(`/book/${object.id}`, book);
    // alert(`Livro ${book.name} editado com sucesso!`);
    
    // let newArray = teste.filter((item, index) => {
      //   if(item.id === object.id){
        //   }
        // });
  
    console.log('book', book)
  }

  const handleDelete = async (id: number) => {
    await api.delete(`/book/${id}`);
    alert(`Livro deletado com sucesso!`);
  }

  return (
    <Container>
      <Content>
        <FiX onClick={close} />
        <Form onSubmit={handleSubmit}>
          <Input 
            name="name"
            label="Nome do Livro"
            value={data.name}
            disabled={disabled}
          />
          <Input 
            name="author"
            label="Autor do livro"
            value={data.author}
            disabled={disabled}
          />
          <Input 
            name="year"
            label="Ano do livro"
            value={data.year}
            disabled={disabled}
            type="number"
          />
          <Input 
            name="genre"
            label="Gênero do livro"
            value={data.genre}
            disabled={disabled}
          />
          <Input 
            name="publisher"
            label="Editora do livro"
            value={data.publisher}
            disabled={disabled}
          />
          <Input 
            name="page"
            label="Nº de páginas do livro"
            value={data.page}
            disabled={disabled}
            type="number"
          />
          <Input 
            name="status"
            label="Status do livro"
            value={data.status}
            disabled={disabled}
          />
          <button type="submit">Salvar</button>
        </Form>
        <button type="submit" onClick={() => setDisabled(false)}>Editar</button>
        <button type="submit" onClick={() => handleDelete(data.id)}>Deletar</button>
      </Content>
    </Container>
  )
}
