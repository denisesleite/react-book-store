import React from 'react';
import { FiPlus } from 'react-icons/fi';

import { Book } from '../../pages/BookStore';

interface PropsListBook {
  object?: Book[];
  openModalDescriptionBook: Function;
}

export const ListBook = ({object, openModalDescriptionBook} : PropsListBook) => {
  return (
    <>
      {object?.map((book: Book) => (
        <div className="page__home-list-item" key={book.id} onClick={() => openModalDescriptionBook(book)}>
          <div>
              <p>
                <b>Nome do livro:</b> {book.name.length > 18 ? book.name.substr(0, 18) + '...' : book.name}
              </p>
              <p><b>Autor do livro:</b> {book.author}</p>
          </div>

          <div className="page__home-list-item-details">
              <p>Clique para mais detalhes <FiPlus/></p>
          </div>
        </div>  
      ))}
    </>
  )
}