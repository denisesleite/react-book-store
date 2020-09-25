import React from 'react';
import { Book } from '../../pages/BookStore';

import api from '../../services/api';
import { Form } from '../../Component/Form';

import '../../assets/css/app.css';
import './style.css';

interface PropsModal {
  object?: Book[];
  openModal: boolean;
  children: any;
}

export const Modal = ({object, openModal, children}: PropsModal) => {
  const handleRemoveBook = (book: Book) =>{
    if(book.status !== "Disponível"){
        alert('Não é possível deletar um livro alugado');
    }else{
        api.delete(`book/${book.id}`);
        alert('Livro excluído com sucesso!');
    }
  }

  return (
    <div className={openModal ? 'modal active' : 'modal'}>
      {object?.map(bookSelected => (
        <div className="content" key={bookSelected.id}>
          
          {children}

          <p id="id-livro">ID do livro: {bookSelected.id}</p>
          
          <Form item={bookSelected} handleRemoveBook={handleRemoveBook}/>
        </div>
      ))}
  </div>
  )
}