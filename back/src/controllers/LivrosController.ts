import knex from '../database/connection';
import {Request, Response} from 'express';

class LivrosController{
    async index(request: Request, response: Response){
        const livros = await knex('livros').select('*');
        
        const buscandoLivros = livros.map(livro => {
            return {
                id: livro.id,
                nome: livro.nome,
                autor: livro.autor,
                ano: livro.ano,
                genero: livro.genero,
                editora: livro.editora,
                paginas: livro.paginas,
                status: livro.status
            }
        });

        return response.json(buscandoLivros);
    }

    async create(request: Request, response: Response){
        // const nome = request.body.nome;
        // const autor = request.body.autor;
        // const ano = request.body.ano;
        // const genero = request.body.genero;
        // const editora = request.body.editora;
        // const paginas = request.body.paginas;
        // const status = request.body.status;

        try{
            const {
                nome,
                autor,
                ano,
                genero,
                editora,
                paginas,
                status
            } = request.body;

            const trx = await knex.transaction();
            
            const livro = {
                nome,
                autor,
                ano,
                genero,
                editora,
                paginas,
                status
            }

            const insereLivro = await trx('livros').insert(livro);
            await trx.commit();

            const livro_id = insereLivro[0];

            return response.json({ 
                id: livro_id,
                ...livro
            });

        } catch(e){
            return response.status(400).json({
                message: 'Falha ao inserir um livro novo.'
            })
        }
    }

    async delete(request: Request, response: Response){
        // const { id } = request.params;

        const id = request.params.id;

        const livro = await knex('livros').where('id', id).delete();

        if(!livro){
            return response.status(400).json({
                message: 'Esse id de livro não existe'
            })
        }

        return response.json({message: 'Livro excluído com sucesso!'});
    }

    async update(request: Request, response: Response){
        const {
            nome,
            autor,
            ano,
            genero,
            editora,
            paginas,
            status
        } = request.body;

        const { id } = request.params;

        const livro = {
            nome,
            autor,
            ano,
            genero,
            editora,
            paginas,
            status
        }

        await knex('livros').where('id', id).update(livro);
        
        return response.json({
            message: `Livro ${livro.nome} atualizado`,
            ...livro
        });
    }
}

export default LivrosController;