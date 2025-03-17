// src/components/MenuPricing.jsx
import React from "react";

const MenuPricing = ({ title, items }) => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">{title}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-4 py-3 border">Item</th>
                <th className="px-4 py-3 border">Description</th>
                <th className="px-4 py-3 border">Price</th>
                <th className="px-4 py-3 border">Min Quantity</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="text-center border-t">
                  <td className="px-4 py-2 border">{item.name}</td>
                  <td className="px-4 py-2 border">{item.description}</td>
                  <td className="px-4 py-2 border">{item.price}</td>
                  <td className="px-4 py-2 border">{item.minQuantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MenuPricing;
