'use client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { RootState } from '../../store/index';
import Head from 'next/head';

function Header() {
  const dispatch = useDispatch();

  const totalItems = useSelector((state: RootState) => state.cart.totalQuantity);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  const showCartHandler = () => {
    dispatch(cartActions.setShowCart());
  };

  return (
    <>
      <Head>
        <title>Greyball Ecommerce - Shopping Cart & Navigation</title>
        <meta
          name="description"
          content="Navigate through Greyball Ecommerce seamlessly. View your shopping cart, total items, and easily access our product catalog."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Greyball Ecommerce Header" />
        <meta
          property="og:description"
          content="Access Greyball Ecommerce navigation and your shopping cart with ease."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://greyballtest.com" /> {/*  Not adding real domain */}
      </Head>
      <div>
        <nav className="bg-white border-gray-200 fixed top-0 left-0 right-0 z-50 shadow-md">
          <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
            {/* Logo */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Greyball Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Greyball
              </span>
            </div>

            {/* Cart Section */}
            <div
              onClick={showCartHandler}
              className="relative cursor-pointer flex items-center space-x-2"
            >
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-7 h-7 text-gray-500 hover:text-gray-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l3-8H6.4M7 13l-1.2 6M7 13h10M17 13l1.2 6M9 21h6M10 9h4"
                  />
                </svg>

                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>

              {totalPrice > 0 && (
                <span className="text-lg font-semibold text-gray-800">
                  ${totalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </nav>
        <div className="h-16"></div>
      </div>
    </>
  );
}

export default Header;
