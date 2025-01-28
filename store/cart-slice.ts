import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for a single cart item
interface CartItem {
  id: string;
  price: number;
  quantity: number;
  totalPrice: number;
  name: string;
  image: string;
}

// Define the type for the cart state
interface CartState {
  itemsList: CartItem[];
  totalQuantity: number;
  totalPrice: number;
  showCart: boolean;
}

// Initial state
const initialState: CartState = {
  itemsList: [],
  totalQuantity: 0,
  totalPrice: 0,
  showCart: false,
};

// I have Created a cart slice for adding, removing cart items
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add to cart action
    addtoCart(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;

      // Check if the item already exists in the cart
      const existingItem = state.itemsList.find((item) => item.id === newItem.id);

      if (existingItem) {
        // If it exists, increment the quantity and update the total price
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        // If it doesn't exist, add it to the cart
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          image: newItem.image,
        });
        state.totalQuantity++;
      }

      // Update the total price
      state.totalPrice = state.itemsList.reduce(
        (sum, item) => sum + item.totalPrice,
        0
      );
    },

    // Remove from cart action
    removeFromCart(state, action: PayloadAction<string>) {
      const id = action.payload;

      // Find the item in the cart
      const existingItem = state.itemsList.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          // If the quantity is 1, remove the item from the cart
          state.itemsList = state.itemsList.filter((item) => item.id !== id);
          state.totalQuantity--;
        } else {
          // If the quantity is more than 1, decrement the quantity and update the total price
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }
      }

      // Update the total price
      state.totalPrice = state.itemsList.reduce(
        (sum, item) => sum + item.totalPrice,
        0
      );
    },

    // Toggle cart visibility action
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

// Export actions and reducer
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
