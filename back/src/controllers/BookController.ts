import knex from '../database/connection';
import {Request, Response} from 'express';

class BookController{
    async index(req: Request, res: Response){
        try{
            const books = await knex('book').select('*');
            
            const searchBooks = books.map(book => {
                return {
                    id: book.id,
                    name: book.name,
                    author: book.author,
                    year: book.year,
                    genre: book.genre,
                    publisher: book.publisher,
                    page: book.page,
                    status: book.status
                }
            });
            return res.status(200).json(searchBooks);
        
        }catch({message}){
            return res.status(400).json({
                message: 'Falha ao buscar os livros.'
            })
        }
    }

    async create(req: Request, res: Response){
        try{
            const {
                name,
                author,
                year,
                genre,
                publisher,
                page,
                status
            } = req.body;

            const trx = await knex.transaction();
            
            const book = {
                name,
                author,
                year,
                genre,
                publisher,
                page,
                status
            }

            const insertBook = await trx('book').insert(book);
            await trx.commit();

            const book_id = insertBook[0];

            return res.json({ 
                id: book_id,
                ...book
            });

        } catch({message}){
            return res.status(400).json({
                message: 'Falha ao inserir um livro novo.'
            })
        }
    }

    async delete(req: Request, res: Response){
        const { id } = req.params;

        try{
            const book = await knex('book').where('id', id).delete();

            if(!book){
                return res.status(400).json({
                    message: 'Esse id de livro não existe'
                })
            }

            return res.json({message: 'Livro excluído com sucesso!'});
        }catch({message}){
            return res.status(400).json({
                message: 'Falha ao excluir um livro.'
            })
        }
    }

    async update(req: Request, res: Response){
        const { id } = req.params;

        try{
            const {
                name,
                author,
                year,
                genre,
                publisher,
                page,
                status
            } = req.body;

            const book = {
                name,
                author,
                year,
                genre,
                publisher,
                page,
                status
            }

            await knex('book').where('id', id).update(book);
            
            return res.json({
                message: `Livro ${book.name} atualizado`,
                ...book
            });
        }catch({message}){
            return res.status(400).json({
                message: 'Falha ao atualizar um livro.'
            })
        }
    }
}

export default BookController;