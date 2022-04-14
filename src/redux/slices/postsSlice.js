import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axios.get("https://gorest.co.in/public/v2/posts");
    return response.data;
  } catch (err) {
    throw TypeError("Unable to load posts");
  }
});

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    isLoading: false,
    data: [],
    errorMessage: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default postsSlice.reducer;
