import express from 'express';

import LivrosController from './controllers/LivrosController';

const routes = express.Router();

const livrosController = new LivrosController();

routes.get('/livros', livrosController.index);
routes.post('/livros', livrosController.create);
routes.put('/livros/:id', livrosController.update);
routes.delete('/livros/:id', livrosController.delete);

export default routes;
