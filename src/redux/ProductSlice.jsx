import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../uutils/status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE, //! loading  , rejected , succes olaylarını belirtmek için utils içinde status.js içine dinamik veri koyacaz. başlangıç değeri IDLE olacak.

  productDetail: [], //! detaylar için
  productDetailStatus: STATUS.IDLE,
};

export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});
//! ilk argüman getDetailProducts benzersiz olmalı.
export const getDetailProducts = createAsyncThunk("getDetailProducts", async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {}, //! burada olmayacak kart kısmında olacak çünkü kart kısmında backend e bir istekte bulunmayacağım
  extraReducers: (builder) => {
    //! yukarıdaki fonksiyonları yazarak(getProducts,getDetailProducts) addcase e ekliyoruz.
    //! pending sayfaya yüklenme durumu
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.FAIL;
      })
      .addCase(getDetailProducts.pending, (state, action) => {
        state.productDetailStatus = STATUS.LOADING;
      })
      .addCase(getDetailProducts.fulfilled, (state, action) => {
        state.productDetailStatus = STATUS.SUCCESS;
        state.productDetail = action.payload;
      })
      .addCase(getDetailProducts.rejected, (state, action) => {
        state.productDetailStatus = STATUS.FAIL;
      });
  },
});

export default productSlice.reducer 

//! Tüm çekme işlemlerini yaptktan sonra ve Buradaki export işlemini de yaptıktan sonra store içine gidip productSlice ı import etmeliyiz.
