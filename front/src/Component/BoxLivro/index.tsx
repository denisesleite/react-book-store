import React from 'react';
import { FiPlus } from 'react-icons/fi';

import { Book } from '../../pages/BookStore';

interface PropsBoxLivro {
  object?: Book[];
  openBox: Function;
}

export const BoxLivro = ({object, openBox} : PropsBoxLivro) => {
  return (
    <>
      {object?.map((book: Book) => (
        <div className="box-livro" key={book.id} onClick={() => openBox(book)}>
          <div>
              <p>
                <b>Nome do livro:</b> {book.name.length > 18 ? book.name.substr(0, 18) + '...' : book.name}
              </p>
              <p><b>Autor do livro:</b> {book.author}</p>
          </div>

          <div className="detalhes">
              <p>Clique para mais detalhes <FiPlus/></p>
          </div>
        </div>  
      ))}
    </>
  )
}