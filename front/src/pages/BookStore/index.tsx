import React, {useState, useEffect, ChangeEvent} from 'react';
import { FiX } from 'react-icons/fi';
import api from '../../services/api';

import { ListBook } from '../../components/ListBook';
import { Header } from '../../components/Header'; 
import { Form } from '../../components/Form';
import { Modal } from '../../components/Modal';

import banner from '../../assets/img/banner.jpg';
import bannerMobile from '../../assets/img/banner-mobile.png';

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
  });
    
  return (
    <div className="page__home">

      <Header
        handleFilterBooks={handleFilterBooks}
        handleAddNewBook={handleAddNewBook}
        classMobile={openMenuMobile ? 'page__home-mobile-menu active' : 'page__home-mobile-menu'}
      >
        <div>
          <FiX size={30} color="#fff" onClick={() => setOpenMenuMobile(false)} />
        </div>
      </Header>
      
      <main>
        <div className="page__home-image">
          <img src={bannerMobile} alt="Banner Mobile" className="page__home-image-mobile" />
          <img src={banner} alt="Banner Desktop" className="page__home-image-desktop" />
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