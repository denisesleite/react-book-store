import React from 'react';
import { FiPlus } from 'react-icons/fi';

import { Book } from '../../pages/Listing';

type BookItemProps = {
  item: Book;
  open?: any;
}

const Item = ({item, open} : BookItemProps) => {
  
  return (
    <li onClick={open}>
      <p>
        <b>Nome do livro:</b> {item.name.length > 18 ? item.name.substr(0, 18) + '...' : item.name}
      </p>
      <p>
        <b>Autor do livro:</b> {item.author}
      </p>

      <div>
          <p>Clique para mais detalhes <FiPlus/></p>
      </div>
    </li>
  )
}

export default Item;