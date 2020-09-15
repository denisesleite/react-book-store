import express from 'express';

import BookController from './controllers/BookController';

const routes = express.Router();

const bookController = new BookController();

routes.get('/book', bookController.index);
routes.post('/book', bookController.create);
routes.put('/book/:id', bookController.update);
routes.delete('/book/:id', bookController.delete);

export default routes;
