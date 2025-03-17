import React from "react";

const Modal = ({ isOpen, onClose, image, name }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded shadow-lg relative p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          &#x2715;
        </button>
        <img src={image} alt={name} className="max-w-full h-auto rounded" />
        <p className="mt-2 font-semibold">{name}</p>
      </div>
    </div>
  );
};

export default Modal;
