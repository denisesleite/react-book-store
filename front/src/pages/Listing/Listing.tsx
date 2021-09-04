import React, {useState, useEffect} from 'react';
import api from '../../services/api';

import { FiArrowLeft } from 'react-icons/fi';

import Header from '../../components/Header'; 

import banner from '../../assets/img/banner.jpg';
// import bannerMobile from '../../assets/img/banner-mobile.png';

import { Link } from 'react-router-dom';
import Modal from '../../components/Modal';
import BookItem from '../../components/Item/Item';
import { createPortal } from 'react-dom';
import { Container, Banner, Content, Menu } from './Listing.styles';
import { Book } from '../../Interface/Book';
import { useCallback } from 'react';

const Listing = () => {
  const [book, setBook] = useState<Book[]>([]);
  const [data, setData] = useState<Book>({} as Book);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    api.get<Book[]>('/book').then(response => {
      setBook(response.data);
    });
  }, []);

  const handleDataModal = useCallback((item: Book) => {
    setData(item);
    setOpenModal(true);
  }, []);

  const handleDelete = useCallback(async (item: Book) => {
    await api.delete(`/book/${item.id}`);
    alert(`Livro ${item.name} deletado com sucesso!`);
    
    let newArray = book.filter((book) => {
      return item.id !== book.id
    });

    setBook(newArray);
    setOpenModal(false);
  }, [book]);

  const handleUpdate = useCallback(async (item: Book) => {
    await api.put(`/book/${item.id}`, item)

    let newArray = book.map(book => {
      if(Number(book.id) === Number(item.id)){
        return {
          ...item
        }
      }

      return book;
    });
    
    setBook(newArray)
    setOpenModal(false);
  }, [book]);
    
  return (
    <>
      <Container>
        <Header />
        
        <main>
          <Banner>
            {/* <img src={bannerMobile} alt="Banner Mobile" className="page__home-image-mobile" /> */}
            <img src={banner} alt="Banner Desktop" className="page__home-image-desktop" />
          </Banner>

          <Menu>
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
          </Menu>

          <div>
            <Content>
              <ul>
                {book.map(item => (
                  <BookItem 
                    key={item.id} 
                    item={item} 
                    open={() => handleDataModal(item)}
                  />
                ))}
              </ul>
            </Content>
            <section>
              <button type="button">
                <FiArrowLeft />
              </button>
            </section>     
          </div>
        </main>
      </Container>

      {openModal && 
        createPortal(
          <Modal 
            data={data} 
            deleteBook={handleDelete} 
            updateBook={handleUpdate} 
            close={() => setOpenModal(false)} 
          />, 
        document.body)
      }
    </>
  )
}

export default Listing;