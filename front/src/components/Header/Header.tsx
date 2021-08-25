import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut, FiPlusCircle } from 'react-icons/fi';

import { Container, Search } from './Header.styles';

interface PropsHeader {
  handleFilterBooks?: Function;
  handleAddNewBook?: any;
  classMobile?: string;
  children?: any;
}

const Header = ({handleFilterBooks, handleAddNewBook, classMobile, children}: PropsHeader) => {
  return (
    <>
      {/* <header className="page__home-desktop"> */}
        <Container>
          <h1>BookHouse</h1>

          <Search>
            {/* <form>
              <Input 
                type="text"
                name="pesquisa"
                placeholder="Pesquisar por..."
                handleChange={handleFilterBooks}
              />
              <FiSearch />
            </form> */}

            <FiPlusCircle color="#363636" cursor="pointer" size={22} onClick={handleAddNewBook} />
          </Search>

          <Link to="/">
            <FiLogOut cursor="pointer" color="#363636" size={25}/>
          </Link>
        </Container>
      {/* </header> */}
    </>
  )
}

export default Header;