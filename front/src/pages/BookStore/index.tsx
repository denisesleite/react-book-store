import React, {useState, useEffect, ChangeEvent} from 'react';
import api from '../../services/api';
import { FiX, FiSearch } from 'react-icons/fi';
import { BoxLivro } from '../../components/BoxLivro';
import Search from '../../components/Search';
import { Input } from '../../components/Input';
import { Form } from '../../components/Form';

import './styles.css';
import '../../assets/css/app.css';
export interface Book{ 
  id: number,
  name: string,
  author: string,
  year: number,
  genre: string,
  publisher: string,
  page: number,
  status: string
}

export const BookStore = () => {
  const [book, setBook] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book[]>();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    api.get('/book').then(response => {
      setBook(response.data);
    });
  }, []);

  const handleOpenInformationBook = (book: Book) => {
    const bookSelected = [{
      id: book.id,
      name: book.name,
      author: book.author,
      year: book.year,
      genre: book.genre,
      publisher: book.publisher,
      page: book.page,
      status: book.status
    }]

    setSelectedBook(bookSelected);
    setModal(true);
  }

  const handleRemoveBook = (bookSelected: Book) =>{
    if(bookSelected.status !== "Disponível"){
      alert('Não é possível deletar um livro alugado');
      setModal(false);
    }else{
      api.delete(`book/${bookSelected.id}`);
      alert('Livro deletado com sucesso!');
      setModal(false);

      const newListBook = book.filter((newBooks: Book) => newBooks.id !== bookSelected.id);
      setBook(newListBook);
    }
  }

  function handleFilterBooks(e: ChangeEvent<HTMLInputElement>) {
    let newValue = e.target.value.trim().toLowerCase();
    console.log(newValue)

    const newBooks = book.filter(book => book.name.toLowerCase().includes(newValue));
    console.log(newBooks)

    setBook(book);
  }
    
  return (
    <>
      <header>
          <h1>LOGO</h1>
      </header>

      {/* <Search listBooks={book}/> */}

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

      <main>
        <div className="lista">
          <BoxLivro
            object={book}
            openBox={handleOpenInformationBook}
          />
        </div>
      </main>

      <div className={modal ? 'modal active' : 'modal'}>
        {selectedBook?.map((book: any) => (
          <div className="content" key={book.id}>
            <FiX onClick={() => {setModal(false)}} />

            <p id="id-livro">ID do livro: {book.id}</p>
            
            <Form item={book} handleRemoveBook={() => handleRemoveBook(book)}/>
          </div>
        ))}
      </div>
    </>
  )
}