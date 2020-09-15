import React, { useState, FC } from 'react';
import Input from '../../Component/Input';
import { Book } from '../../pages/BookStore';

import '../../assets/css/app.css';
import './style.css';

interface PropsModal {
  object?: Book[];
  saveEdition: Function;
  removeBook: Function;
  openModal: Boolean;
}

export const Modal:FC<PropsModal> = ({object, saveEdition, removeBook, openModal, children}) => {
  const [disabledButton, setDisabledButton] = useState(true); 
  const [newValueInput, setNewValueInput] = useState(object); 
  console.log('newvalue', newValueInput);
  function handleInputChange(e: any){
    setNewValueInput(e.target.value);
  }

  return (
    <div className={openModal ? 'modal active' : 'modal'}>
      {object?.map(bookSelected => (
        <div className="content" key={bookSelected.id}>
          {children}
          <p id="id-livro">ID do livro: {bookSelected.id}</p>
          <div className="info">
            <form onSubmit={() => saveEdition(bookSelected)}>
              <div className="dados-livro">
                <Input 
                  name="nome"
                  label="Nome do Livro"
                  value={bookSelected.nome}
                  disabled={disabledButton}
                  type="text"
                  handleChange={handleInputChange}
                />
                <Input 
                  name="autor"
                  label="Autor do livro"
                  value={bookSelected.autor}
                  disabled={disabledButton}
                  type="text"
                  handleChange={handleInputChange}
                />
                <Input 
                  name="ano"
                  label="Ano do livro"
                  value={bookSelected.ano}
                  disabled={disabledButton}
                  type="text"
                  handleChange={handleInputChange}
                />
                <Input 
                  name="genero"
                  label="Gênero do livro"
                  value={bookSelected.genero}
                  disabled={disabledButton}
                  type="text"
                  handleChange={handleInputChange}
                />
                <Input 
                  name="editora"
                  label="Editora do livro"
                  value={bookSelected.editora}
                  disabled={disabledButton}
                  type="text"
                  handleChange={handleInputChange}
                />
                <Input 
                  name="paginas"
                  label="Nº de páginas do livro"
                  value={bookSelected.paginas}
                  disabled={disabledButton}
                  type="number"
                  handleChange={handleInputChange}
                />
                <Input 
                  name="status"
                  label="Status do livro"
                  value={newValueInput}
                  defaultValue={bookSelected.status}
                  disabled={disabledButton}
                  type="text"
                />
              </div>
            </form>
          </div>
          <div className="buttons">
            <button onClick={() => setDisabledButton(false)}>Editar Livro</button>
            <button onClick={() => removeBook(bookSelected)}>Remover Livro</button>
          </div>
          <div className={disabledButton ? 'buttons salvar-alteracoes' : 'buttons'}>
            <button>Salvar Alterações</button>
          </div>
        </div>
      ))}
  </div>
  )
}