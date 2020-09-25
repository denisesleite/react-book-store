import React, { useState } from 'react';
import { Input } from '../../Component/Input';

interface PropsForm {
  item: any;
  handleRemoveBook: Function;
}

export const Form = ({item, handleRemoveBook} : PropsForm) => {
  const [bookSelected, setBookSelected] = useState(item);
  const [disabledButton, setDisabledButton] = useState(true); 

  return (
    <>
      <form onSubmit={(e) => console.log(e)}>
        <div className="dados-livro">
          <Input 
            name="nome"
            label="Nome do Livro"
            value={bookSelected.name}
            disabled={disabledButton}
            type="text"
            handleChange={(e: any) => setBookSelected(e.target.value)}
          />
          <Input 
            name="autor"
            label="Autor do livro"
            value={bookSelected.author}
            disabled={disabledButton}
            type="text"
            handleChange={(e: any) => setBookSelected(e.target.value)}
          />
          <Input 
            name="ano"
            label="Ano do livro"
            value={bookSelected.year}
            disabled={disabledButton}
            type="text"
            handleChange={(e: any) => setBookSelected(e.target.value)}
          />
          <Input 
            name="genero"
            label="Gênero do livro"
            value={bookSelected.genre}
            disabled={disabledButton}
            type="text"
            handleChange={(e: any) => setBookSelected(e.target.value)}
          />
          <Input 
            name="editora"
            label="Editora do livro"
            value={bookSelected.publisher}
            disabled={disabledButton}
            type="text"
            handleChange={(e: any) => setBookSelected(e.target.value)}
          />
          <Input 
            name="paginas"
            label="Nº de páginas do livro"
            value={bookSelected.page}
            disabled={disabledButton}
            type="number"
            handleChange={(e: any) => setBookSelected(e.target.value)}
          />
          <Input 
            name="status"
            label="Status do livro"
            value={bookSelected.status}
            disabled={disabledButton}
            type="text"
            handleChange={(e: any) => setBookSelected(e.target.value)}
          />
        </div>
      </form>
      <div className="buttons">
        <button onClick={() => setDisabledButton(false)}>Editar Livro</button>
        <button onClick={() => handleRemoveBook(bookSelected)}>Remover Livro</button>
      </div>
      <div className={disabledButton ? 'buttons salvar-alteracoes' : 'buttons'}>
        <button>Salvar</button>
      </div>
    </>
  )
}
