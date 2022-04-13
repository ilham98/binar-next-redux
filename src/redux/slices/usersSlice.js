import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: [
    {
      firstName: "Salman",
      lastName: "Faris",
    },
  ],
  reducers: {
    addUser: (state, action) => {
      const { firstName, lastName } = action.payload;
      state.push({ firstName, lastName });
    },
    updateUser: (state, action) => {
      const { firstName, lastName } = action.payload.fields;
      const { selectedIndex } = action.payload;
      state.splice(selectedIndex, 1, { firstName, lastName });
    },
    deleteUser: (state, action) => {
      const userIndex = action.payload;
      state.splice(userIndex, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, updateUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
