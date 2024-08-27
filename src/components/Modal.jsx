import React from 'react';

const Modal = ({isOpen,onClose,onEdit,onFlag,onDelete}) => {
    if(!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Actions</h2>
        <button onClick={onEdit} className="modal-button">Edit</button>
        <button onClick={onFlag} className="modal-button">Flag</button>
        <button onClick={onDelete} className="modal-button">Delete</button>
        <button onClick={onClose} className="modal-close-button">Close</button>
      </div>
    </div>
  );
}

export default Modal;
