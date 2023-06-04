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
  //!Reducer fonksiyonu, store’un state’ini değiştiren fonksiyondur. Reducer fonksiyonu, mevcut state’i ve dispatch edilen action’u alarak yeni state’i hesaplar ve döndürür. Reducer fonksiyonu içinde state’i doğrudan değiştirmek yerine, yeni bir state objesi oluşturmak ve bu objeye değişiklikleri yansıtmak gerekir.
  reducers: {}, //! statik  bir yapıda olursa bunu kullanıyoruz . API kullanacağımız için boş bırakıyoruz.
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload; //! Action, store’daki state’i değiştirmek için dispatch edilen bir objedir. Action’un payload özelliği ise isteğe bağlıdır ve action ile ilgili ekstra veri taşır.
    });
  },
});

export default CategorySlice.reducer