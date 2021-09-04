import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Book } from '../../Interface/Book';
import * as S from './Item.styles';

type BookItemProps = {
  item: Book;
  open?: any;
}

const Item = ({item, open} : BookItemProps) => {
  
  return (
    <S.ElementLi onClick={open}>
      <div>
        <img src="https://via.placeholder.com/100x120" alt="" />
      </div>

      <S.LiContent>
        <p>
          <span><b>Livro:</b></span> {item.name.length > 18 ? item.name.substr(0, 18) + '...' : item.name}
        </p>
        <p>
          <b>Autor:</b> {item.author}
        </p>

        <div>
          <p>Clique para mais detalhes <FiPlus/></p>
        </div>
      </S.LiContent>
    </S.ElementLi>
  )
}

export default Item;