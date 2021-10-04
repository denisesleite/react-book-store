import React, {useState, useEffect} from 'react';
import api from '../../services/api';

import Modal from '../../components/Modal';
import Card from '../../components/Card';
import { createPortal } from 'react-dom';
import { Book } from '../../Interface/Book';
import { useCallback } from 'react';
import { Grid, RadioGroup, Radio, FormControlLabel, Box, TextField, Container, InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';

const Listing = () => {
  const [book, setBook] = useState<Book[]>([]);
  const [data, setData] = useState<Book>({} as Book);
  const [openModal, setOpenModal] = useState(false);
  const [valueInput, setValueInput] = useState('');

  useEffect(() => {
    const url = valueInput ? `/book?q=${valueInput}` : '/book';

    api.get<Book[]>(url).then(response => {
      setBook(response.data);
    });
  }, [valueInput]);

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
    console.log('item', item)
    await api.put(`/book/${item.id}`, item)

    let newArray = book.map(book => {
      if(Number(book.id) === Number(item.id)){
        return {
          ...item
        }
      }
      
      return book;
    });
    
    console.log('newArray', newArray)
    
    setBook(newArray)
    setOpenModal(false);
  }, [book]);

  const handleFilterName = (value: string) => {
    // const text = value.toLowerCase().trim();
    // const newBooks = book.filter(item => item.name.toLowerCase().includes(text));
    setValueInput(value);
  };
    
  return (
    <>
      <Grid container style={{ height: 'inherit' }}>
        <Grid item md={2} style={{ background: '#34325e' }}>
          <RadioGroup aria-label="films" name="films">
            <FormControlLabel value="female" control={<Radio />} label="A-Z" />
            <FormControlLabel value="male" control={<Radio />} label="Z-A" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </Grid>
        <Grid item md={10}>
          <Container maxWidth={false}>
            <Grid item md={12}>
              <TextField
                label="Pesquisar por"
                onChange={(e) => handleFilterName(e.target.value)}
                value={valueInput}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item md={12}>
              <Box component="ul" sx={{ p: 0 }} style={{ listStyle: 'none' }}>
                <Grid container spacing={3}>
                  {book.map(item => (
                    <Grid item xs={12} md={3} key={item.id}>
                      <Card
                        item={item} 
                        open={() => handleDataModal(item)}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Container>
        </Grid>
      </Grid>
      {openModal && 
        createPortal(
          <Modal 
            data={data} 
            handleDelete={handleDelete} 
            handleUpdate={handleUpdate}
            onClose={() => setOpenModal(false)}
            onOpen={openModal}
          />,
        document.body)
      }
    </>
  )
}

export default Listing;