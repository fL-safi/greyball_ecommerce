'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

interface ProductProps {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    currency: string;
    image: string;
    rating: number;
  };
}

export const ProductCard = ({ product }: ProductProps) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addtoCart({
        id: product.id.toString(),
        price: product.price,
        name: product.title,
        quantity: 1,
        totalPrice: product.price,
        image: product.image, // Include the image property here
      })
    );
  };

  // Helper function to truncate description
  const truncateDescription = (description: string, length: number) =>
    description.length > length
      ? description.substring(0, length) + '...'
      : description;

  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
        <p className="text-gray-600 text-sm mt-2">
          {truncateDescription(product.description, 100)}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-gray-800">
            {product.currency} {product.price.toFixed(2)}
          </span>
          <span className="text-sm text-yellow-500 font-semibold">
            ⭐ {product.rating}
          </span>
        </div>
        <button
          onClick={addToCartHandler}
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
