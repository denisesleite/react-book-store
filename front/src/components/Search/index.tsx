import React, { ChangeEvent, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Book } from '../../pages/BookStore';

import { Input } from '../Input';

import './style.css';

interface propsSearch{
  listBooks: Book[];
}

export default function Search({listBooks}: propsSearch){
  const [searchBooks, setSearchBooks] = useState(listBooks);
  console.log(searchBooks)

  function handleFilterBooks(e: ChangeEvent<HTMLInputElement>) {
    let newValue = e.target.value.trim().toLowerCase();
    console.log(newValue)

    const newBooks = listBooks.filter(book => book.name.toLowerCase().includes(newValue));
    console.log(newBooks)

    setSearchBooks(newBooks);
  }

  return (
    <div className="search">
      <div className="search-input">
        <form onSubmit={() => {}}>
          <Input 
            type="text"
            name="pesquisa"
            placeholder="Pesquisar por..."
            handleChange={handleFilterBooks}
          />
          <FiSearch />
        </form>
      </div>

      <a href="#" onClick={() => {}}>Adicionar Livro</a>
    </div>
  )
}   