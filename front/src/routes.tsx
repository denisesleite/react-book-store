import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Livraria from './pages/BookStore';

const Router = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Livraria} path="/listagem-livros" />
        </BrowserRouter>
    )
}

export default Router;