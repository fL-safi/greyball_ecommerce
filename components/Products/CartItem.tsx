import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
  image: string; // Ensure the image property is present here
}

interface CartItemProps {
  item: CartItem;
}

export default function CartItem({ item }: CartItemProps) {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(
      cartActions.addtoCart({
        id: item.id,
        price: item.price,
        name: item.name,
        quantity: 1,
        totalPrice: item.price,
        image: item.image,
      })
    );
  };

  const decreaseQuantity = () => {
    dispatch(cartActions.removeFromCart(item.id));
  };

  const removeItem = () => {
    dispatch(cartActions.removeFromCart(item.id));
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center gap-4">
        <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={item.image || '/placeholder.png'}
            alt={item.name}
            fill
            className="object-cover"
            sizes="(max-width: 96px) 100vw, 96px"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
          {/* Price formatted to two decimal places */}
          <p className="mt-1 text-lg font-semibold">
            ${item.totalPrice.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex items-center border rounded-full">
          <button
            onClick={decreaseQuantity}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="px-4 py-2">{item.quantity}</span>
          <button
            onClick={increaseQuantity}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button
          onClick={removeItem}
          className="ml-4 text-red-500 hover:text-red-700"
          aria-label="Remove item"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
