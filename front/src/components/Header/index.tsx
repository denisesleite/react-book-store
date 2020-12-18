import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiLogOut, FiMenu, FiPlusCircle } from 'react-icons/fi';

import { Input } from '../Input'; 

import './style.css';

interface PropsHeader {
  handleFilterBooks: Function;
  handleAddNewBook: any;
  classMobile: string;
  children: any;
}

export const Header = ({handleFilterBooks, handleAddNewBook, classMobile, children}: PropsHeader) => {
  return (
    <>
      <header className="page__home-desktop">
        <div className="page__home-desktop-header">
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

            <FiPlusCircle color="#363636" cursor="pointer" size={22} onClick={handleAddNewBook} />
          </div>

          <Link to="/">
            <FiLogOut cursor="pointer" color="#363636" size={25}/>
          </Link>
        </div>

        <nav className="page__home-desktop-header-menu">
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
      </header>

      <header className="page__home-mobile">
        <div className="page__home-mobile-header">
          <Link to="#" className="page__home-mobile-hamburguer">
            <FiMenu color="#fff" size={30}/>
          </Link>

          <h1>BookHouse</h1>

          <div className="page__home-mobile-icons">
            <Link to="#" className="page__home-mobile-icons-plus"> 
              <FiPlusCircle color="#fff" size={22} onClick={handleAddNewBook} />
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

        <div className={classMobile}>
          {children}

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
    </>
  )
}
