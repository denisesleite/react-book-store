import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import { BookStore } from './pages/BookStore';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={BookStore} path="/listing-books" />
        </BrowserRouter>
    )
}

export default Routes;