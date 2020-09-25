import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import { FiX } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Modal } from '../../Component/Modal';
import { BoxLivro } from '../../Component/BoxLivro';
import Search from '../../Component/Search';

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
    const history = useHistory();
    
    const [book, setBook] = useState<Book[]>();
    const [selectedBook, setSelectedBook] = useState<Book[]>();

    const [modal, setModal] = useState(false);
    const [modalAdicionaLivro, setModalAdicionaLivro] = useState(false);     

    useEffect(() => {
        api.get('/book').then(response => {
            setBook(response.data);
        });
    }, []);

    const handleBook = (book: Book) => {
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
    
    return (
        <>
            <header>
                <h1>LOGO</h1>
            </header>

            <Search />

            <main>
                <div className="lista">
                    <BoxLivro
                        object={book}
                        openBox={handleBook}
                    />
                </div>
            </main>

            <Modal object={selectedBook} openModal={modal}>
                <FiX onClick={() => {setModal(false)}} />
            </Modal>
        
            {/* <div>
                <div className={modalAdicionaLivro ? "modal active adiciona-livro" : "modal" }>
                    <div className="content">
                        <FiX onClick={() => setModalAdicionaLivro(false)}/>
                    </div>
                </div>
            </div> */}
        </>
    )
}