import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";
import postsReducer from "./slices/postsSlice";
import shopReducer from "./slices/shopSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    shop: shopReducer,
  },
});
