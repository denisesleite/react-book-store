import React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Listing from './pages/Listing';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Listing} path="/listing-books" />
        </BrowserRouter>
    )
}

export default Routes;