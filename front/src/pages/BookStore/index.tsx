import React, {useState, useEffect, ChangeEvent} from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { FiSearch, FiLogOut, FiMenu, FiX, FiPlusCircle } from 'react-icons/fi';

import { ListBook } from '../../components/ListBook';
import { Input } from '../../components/Input'; 
import { Form } from '../../components/Form';
import { Modal } from '../../components/Modal';

import banner from '../../assets/img/banner.jpg';

import './styles.css';
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
  const [disabledButton, setDisabledButton] = useState(true); 
  const [book, setBook] = useState<Book[]>([]);
  const [arrayInitial, setArrayInitial] = useState([]);
  const [selectedBook, setSelectedBook] = useState<Book[]>([]);
  const [modal, setModal] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  useEffect(() => {
    api.get('/book').then(response => {
      setBook(response.data);
      setArrayInitial(response.data);
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

  const handleRemoveBook = (bookSelected: Book) => {
    if(bookSelected.status !== "Disponível" || "disponível"){
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

  const handleFilterBooks = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value.trim().toLowerCase();

    const newBooks = arrayInitial.filter((book: Book) => book.name.toLowerCase().includes(newValue));

    console.log('newbooks', newBooks)

    setBook(newBooks);
  }

  const handleAddNewBook = (e: any) => {
    e.preventDefault();
    setModalAdd(true);
  }

  const handleCloseModal = () => {
    setModal(false);
    setDisabledButton(true);
  }

  let iconHamburguer = document.querySelector(".page__home-mobile-hamburguer");
  iconHamburguer?.addEventListener('click', function(){
    setOpenMenuMobile(true);
  })
    
  return (
    <div className="page__home">
      <header className="page__home-desktop">
        <h1>BookHouse</h1>

        <div className="page__home-search">
          <div className="page__home-search-input">
            <form>
              <Input 
                type="text"
                name="pesquisa"
                placeholder="Pesquisar por..."
                handleChange={handleFilterBooks}
              />
              <FiSearch />
            </form>
          </div>

          <Link to="#" onClick={handleAddNewBook}>Adicionar Livro</Link>
        </div>

        <Link to="/">
          <FiLogOut cursor="pointer" color="#363636" size={25}/>
        </Link>
      </header>

      <header className="page__home-mobile">
        <div className="page__home-mobile-header">
          <Link to="#" className="page__home-mobile-hamburguer">
            <FiMenu color="#fff" size={30}/>
          </Link>

          <h1>BookHouse</h1>

          <div className="page__home-mobile-icons">
            <Link to="#" className="page__home-mobile-icons-plus"> 
              <FiPlusCircle color="#fff" size={22} onClick={handleAddNewBook}/>
            </Link>

            <Link to="/">
              <FiLogOut color="#fff" size={22}/>
            </Link>
          </div>
        </div>

        <form>
          <Input 
            type="text"
            name="pesquisa"
            placeholder="Pesquisar por..."
            handleChange={handleFilterBooks}
          />
        </form>

        <div className={openMenuMobile ? 'page__home-mobile-menu active' : 'page__home-mobile-menu'}>
          <div>
            <FiX size={30} color="#fff" onClick={() => setOpenMenuMobile(false)} />
          </div>

          <nav>
            <ul>
              <li>
                <Link to="#">Lorem Ipsum</Link>
              </li>
              <li>
                <Link to="#">Lorem Ipsum</Link>
              </li>
              <li>
                <Link to="#">Lorem Ipsum</Link>
              </li>
              <li>
                <Link to="#">Lorem Ipsum</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="page__home-image">
          <img src={banner} alt=""/>
        </div>
        <div className="page__home-list">
          <ListBook
            object={book}
            openModalDescriptionBook={handleOpenInformationBook}
          />
        </div>
      </main>

      <Modal 
        className={modal ? 'modal active' : 'modal'} 
        handleCloseModal={handleCloseModal}
      >
        {selectedBook.map((book: any) => (
          <div key={book.id}>
            <p id="id-livro">ID do livro: {book.id}</p>
            
            <h1>{book.name}</h1>
            <Form
              item={book} 
              disabled={disabledButton}
              type="updateBook"
            >
              <div className={disabledButton ? 'modal__content-buttons save-editions' : 'modal__content-buttons'}>
                <button type="submit">Salvar</button>
              </div>
            </Form>
            <div className="modal__content-buttons">
              <button onClick={() => setDisabledButton(false)}>Editar Livro</button>
              <button onClick={() => handleRemoveBook(book.id)}>Remover Livro</button>
            </div>
          </div>
        ))}
      </Modal> 

      <Modal 
        className={modalAdd ? 'modal active' : 'modal'} 
        handleCloseModal={() => {setModalAdd(false)}}
      >
        <Form
          item=""
          disabled=""
          type="addBook"
        >
          <button type="submit">Adicionar</button>
        </Form>
      </Modal> 
    </div>
  )
}