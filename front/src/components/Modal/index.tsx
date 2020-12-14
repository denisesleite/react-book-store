import React from 'react';

import { FiX } from 'react-icons/fi';

import './style.css';

interface PropsModal{
  className: string;
  handleCloseModal: any;
  children: any;
}

export const Modal = ({className, handleCloseModal, children}: PropsModal) => {
  return (
    <div className={className}>
      <div className="modal__content">
        <FiX onClick={handleCloseModal} />

        {children}
      </div>
    </div>
  )
}
