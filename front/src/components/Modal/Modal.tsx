import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

import { Form } from '@unform/web'
import Input from '../Input';
import { Container, Content } from './Modal.styles';
import { Book } from '../../Interface/Book';
import { Button, Box, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { CloseOutlined } from '@material-ui/icons';

type PropsModal = {
  data: Book;
  onClose: () => void;
  onOpen: boolean;
  handleDelete: (book: Book) => {};
  handleUpdate: (book: Book) => {};
}

const Modal = ({ data, onClose, onOpen, handleDelete, handleUpdate }: PropsModal) => {
  const [disabled, setDisabled] = useState(true);

  return (
    <Dialog fullWidth open={onOpen} onClose={onClose} aria-labelledby="form-dialog-title">
      <Box>
        <DialogTitle id="form-dialog-title">
          {data.name}
          <Typography variant='body2'>Id: {data.id}</Typography>
        </DialogTitle>
      </Box>
      <DialogContent dividers>
        <Form onSubmit={() => handleUpdate}>
          <div>
            <Input 
              name="name"
              label="Nome do Livro"
              value={data.name}
              disabled={disabled}
            />
            <Input 
              name="author"
              label="Autor do livro"
              value={data.author}
              disabled={disabled}
            />
            <Input 
              name="year"
              label="Ano do livro"
              value={data.year}
              disabled={disabled}
              type="number"
            />
          </div>
          <div>
            <Input 
              name="genre"
              label="Gênero do livro"
              value={data.genre}
              disabled={disabled}
            />
            <Input 
              name="publisher"
              label="Editora do livro"
              value={data.publisher}
              disabled={disabled}
            />
            <Input 
              name="page"
              label="Nº de páginas do livro"
              value={data.page}
              disabled={disabled}
              type="number"
            />
            <Input 
              name="status"
              label="Status do livro"
              value={data.status}
              disabled={disabled}
            />
          </div>
        </Form>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setDisabled(false)} color="primary">
          Editar
        </Button>
        <Button onClick={() => handleDelete} color="primary">
          Editar
        </Button>
        <Button type="submit" color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>

    // <Container>
    //   <Content>
    //     <FiX onClick={close} />
    //     <Form onSubmit={updateBook}>
    //       <div>
    //         <Input 
    //           name="id"
    //           label="Id do Livro"
    //           value={data.id}
    //           disabled
    //         />
    //         <div>
    //           <Input 
    //             name="name"
    //             label="Nome do Livro"
    //             value={data.name}
    //             disabled={disabled}
    //           />
    //           <Input 
    //             name="author"
    //             label="Autor do livro"
    //             value={data.author}
    //             disabled={disabled}
    //           />
    //           <Input 
    //             name="year"
    //             label="Ano do livro"
    //             value={data.year}
    //             disabled={disabled}
    //             type="number"
    //           />
    //         </div>
    //         <div>
    //           <Input 
    //             name="genre"
    //             label="Gênero do livro"
    //             value={data.genre}
    //             disabled={disabled}
    //           />
    //           <Input 
    //             name="publisher"
    //             label="Editora do livro"
    //             value={data.publisher}
    //             disabled={disabled}
    //           />
    //           <Input 
    //             name="page"
    //             label="Nº de páginas do livro"
    //             value={data.page}
    //             disabled={disabled}
    //             type="number"
    //           />
    //           <Input 
    //             name="status"
    //             label="Status do livro"
    //             value={data.status}
    //             disabled={disabled}
    //           />
    //         </div>
    //       </div>
          
    //       <button type="submit">Salvar</button>
    //     </Form>
    //     <button type="button" onClick={() => setDisabled(false)}>Editar</button>
    //     <button type="button" onClick={() => deleteBook(data)}>Deletar</button>
    //   </Content>
    // </Container>
  )
}

export default Modal;
