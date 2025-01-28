'use client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice'; // Update the path based on your file structure
import { RootState } from '../../store/index'; // Ensure this is the correct path to your RootState type

function Header() {
  const dispatch = useDispatch();

  // Get the total quantity of items from the Redux store
  const totalItems = useSelector((state: RootState) => state.cart.totalQuantity);

  const showCartHandler = () => {
    dispatch(cartActions.setShowCart());
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-50">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              MyStore
            </span>
          </div>

          {/* Cart Icon */}
          <div onClick={showCartHandler} className="relative cursor-pointer">
            <div className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l3-8H6.4M7 13l-1.2 6M7 13h10M17 13l1.2 6M9 21h6M10 9h4"
                />
              </svg>
            </div>
            {/* Badge for cart items */}
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
