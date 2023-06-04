//! İlk olarak CreateSlice ı import etmeliyiz.
//!Kategorileri düzenlemek için

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: []
};

//! API den Veri çekme işlemleminde createAsyncThunk kullanmalıyım.
export const getCategories = createAsyncThunk("category", async () => {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const data = response.json();
  return data;
});

const CategorySlice = createSlice({
  name: "catagories",
  initialState,
  reducers: {}, //! statik  bir yapıda olursa bunu kullanıyoruz . API değil.
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default CategorySlice.reducer