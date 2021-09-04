import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

import { Form } from '@unform/web'
import Input from '../Input';
import { Container, Content } from './Modal.styles';
import { Book } from '../../Interface/Book';

type PropsModal = {
  data: Book;
  close?: () => void;
  deleteBook: (book: Book) => {};
  updateBook: (book: Book) => {};
}

const Modal = ({ data, close, deleteBook, updateBook }: PropsModal) => {
  const [disabled, setDisabled] = useState(true);

  return (
    <Container>
      <Content>
        <FiX onClick={close} />
        <Form onSubmit={updateBook}>
          <div>
            <Input 
              name="id"
              label="Id do Livro"
              value={data.id}
              disabled
            />
            <div>
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
            </div>
            <div>
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
            </div>
          </div>
          
          <button type="submit">Salvar</button>
        </Form>
        <button type="button" onClick={() => setDisabled(false)}>Editar</button>
        <button type="button" onClick={() => deleteBook(data)}>Deletar</button>
      </Content>
    </Container>
  )
}

export default Modal;
