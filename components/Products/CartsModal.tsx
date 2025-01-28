import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { RootState } from '../../store/index';
import CartItem from './CartItem';

function CartsModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.cart.showCart);
  const cartItems = useSelector((state: RootState) => state.cart.itemsList);

  const toggleModal = () => {
    dispatch(cartActions.setShowCart());
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <>
      {isOpen && (
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden={!isOpen}
          className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Your Cart
                </h3>
                <button
                  onClick={toggleModal}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              {/* Cart Items or Empty Message */}
              <div
                className="p-4 md:p-5 space-y-4 overflow-y-auto"
                style={{ maxHeight: '25rem' }} // (25rem)
              >
                {cartItems.length > 0 ? (
                  cartItems.map((item) => <CartItem key={item.id} item={item} />)
                ) : (
                  <p className="text-center text-gray-500 dark:text-gray-300 text-lg font-medium">
                    🛒 Your cart is empty.
                  </p>
                )}
              </div>

              {/* Total price and checkout */}
              <div className="flex justify-end">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white py-2 px-6">
                  Total Price: ${totalPrice.toFixed(2)}
                </h3>
              </div>

              {/* Checkout Button */}
              <div className="flex justify-end items-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="button"
                  disabled={cartItems.length === 0} // Disable when cart is empty
                  className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                    cartItems.length === 0
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  }`}
                >
                  Proceed Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CartsModal;
