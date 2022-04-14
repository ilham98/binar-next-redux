import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: [
    {
      value: 1,
      label: "Book",
      price: 20000,
    },
  ],
  reducers: {
    addItem: (state) => {
      state.push({
        value: null,
        label: null,
        price: null,
      });
    },
    updateItem: (state, action) => {
      // fields, selectedIndex
      const { value, label, price } = action.payload.fields;
      const { selectedIndex } = action.payload;
      state.splice(selectedIndex, 1, { value, label, price });
    },
    deleteItem: (state, action) => {
      const { selectedIndex } = action.payload;
      state.splice(selectedIndex, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, updateItem, deleteItem } = shopSlice.actions;

export default shopSlice.reducer;
