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
    nome: string,
    autor: string,
    ano: number,
    genero: string,
    editora: string,
    paginas: number,
    status: string
}

const Livraria = () => {
    const history = useHistory();
    
    const [book, setBook] = useState<Book[]>();
    const [selectedBook, setSelectedBook] = useState<Book[]>();

    const [modal, setModal] = useState(false);

    const [modalAdicionaLivro, setModalAdicionaLivro] = useState(false);     

    useEffect(() => {
        api.get('/livros').then(response => {
            setBook(response.data);
        });
    }, []);

    function handleBook(book: Book){
        const bookSelected = [{
            id: book.id,
            nome: book.nome,
            autor: book.autor,
            ano: book.ano,
            genero: book.genero,
            editora: book.editora,
            paginas: book.paginas,
            status: book.status
        }]

        setSelectedBook(bookSelected);
        setModal(true);
    }

    function handleRemoveBook(book: Book){
        if(book.status !== "Disponível"){
            alert('Não é possível deletar um livro alugado');
        }else{
            api.delete(`livros/${book.id}`);
            alert('Livro excluído com sucesso!');
        }
    }

    function handleSaveEdition(book: Book){
        
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

            <Modal 
                object={selectedBook}
                saveEdition={handleSaveEdition}
                removeBook={handleRemoveBook}
                openModal={modal}
            >

                <FiX onClick={() => setModal(false)}/>
            </Modal>
        
            <div>
                <div className={modalAdicionaLivro ? "modal active adiciona-livro" : "modal" }>
                    <div className="content">
                        <FiX onClick={() => setModalAdicionaLivro(false)}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Livraria;