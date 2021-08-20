import React, {useState, useEffect} from 'react';
import api from '../../services/api';

import { Header } from '../../components/Header'; 

import banner from '../../assets/img/banner.jpg';
// import bannerMobile from '../../assets/img/banner-mobile.png';

import { Link } from 'react-router-dom';
import { Modal } from '../../components/Modal';
import BookItem from '../../components/Item';
import { createPortal } from 'react-dom';
import { Container, Banner, Content, Menu } from './Listing.styles';

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

const Listing = () => {
  const [book, setBook] = useState<Book[]>([]);
  const [data, setData] = useState<Book>({} as Book);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    api.get<Book[]>('/book').then(response => {
      setBook(response.data);
    });
  }, []);

  const handleDataModal = (item: Book) => {
    setData(item);
    setOpenModal(true);
  }
    
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
        </main>
      </Container>

      {openModal && 
        createPortal(
          <Modal data={data} close={() => setOpenModal(false)} />, 
        document.body)
      }
    </>
  )
}

export default Listing;