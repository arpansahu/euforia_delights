import React, { useState } from "react";
import Modal from "./Modal";
import { FiSearch } from "react-icons/fi";

const ProductCard = ({ item }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group relative">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
        />
        <button
          onClick={handleOpenModal}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition opacity-0 group-hover:opacity-100 text-white text-2xl"
        >
          <FiSearch />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
        <ul className="text-sm text-gray-800">
          {item.priceOptions.map((option, index) => (
            <li key={index}>
              <span className="font-semibold">{option.weight}:</span> {option.price}
            </li>
          ))}
        </ul>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        image={item.image}
        name={item.name}
      />
    </div>
  );
};

export default ProductCard;
