import React, {FC} from 'react';
import { FiPlus } from 'react-icons/fi';

import { Book } from '../../pages/BookStore';

interface PropsBoxLivro {
  object?: Book[];
  openBox: Function;
}

export const BoxLivro:FC<PropsBoxLivro> = ({object, openBox}) => {
  return (
    <>
      {object?.map((book: Book) => (
        <div className="box-livro" key={book.id} onClick={() => openBox(book)}>
          <div>
              <p>
                <b>Nome do livro:</b> {book.nome.length > 18 ? book.nome.substr(0, 18) + '...' : book.nome}
              </p>
              <p><b>Autor do livro:</b> {book.autor}</p>
          </div>

          <div className="detalhes">
              <p>Clique para mais detalhes <FiPlus/></p>
          </div>
        </div>  
      ))}
    </>
  )
}