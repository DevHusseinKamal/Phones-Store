import { createSlice } from "@reduxjs/toolkit";
// import { current } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  cartItems: [],
  modalItem: {},
  changed: false,
};

const removeItem = (state, id) => state.filter((item) => item.id !== id);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setData(state, action) {
      state.items.push(...action.payload);
    },
    replaceCart(state, action) {
      state.cartItems = action.payload;
    },
    addItem(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.inCart = true;
        item.count++;
        item.total = item.count * item.price;
      }
      state.changed = true;

      state.cartItems.push(item);
      state.modalItem = item;
    },
    increment(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      state.changed = true;

      item.count++;
      item.total = item.count * item.price;
    },
    decrement(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      const inCartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (inCartItem.count <= 1) {
        item.inCart = false;
        item.count = 0;

        state.cartItems = removeItem(state.cartItems, action.payload);
      }
      state.changed = true;

      inCartItem.count--;
      inCartItem.total = inCartItem.count * inCartItem.price;
    },
    deleteItem(state, action) {
      const inCartItem = state.items.find((item) => item.id === action.payload);
      state.changed = true;

      inCartItem.inCart = false;
      inCartItem.count = 0;

      state.cartItems = removeItem(state.cartItems, action.payload);
    },
    clearCart(state) {
      state.changed = true;
      for (let item of state.items) {
        item.count = 0;
        item.inCart = false;
        item.total = 0;
      }
      state.cartItems = [];
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
