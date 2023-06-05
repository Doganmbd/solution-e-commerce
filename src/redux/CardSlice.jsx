//! 1-) Tüm Card ile alakalı işlmelerimi burada yapacam.
//! 2-) createSlice import edelim
//! 3 -) initialState oluşturuyorum . içine miktar hesaplama , total hesaplama vb. koyacam.
//! 4 -) Card içindeki verileri LocalStorage(getItem) dan alcam ve localStorage(setItem) a gönderecem .
//! 5-) cardSlice içine initialState ,reducers yazıyorum
//! 6-) reducers içine API üzerinden işlem yapmayacağım için bilgilerimi yazıyorum.
//! 7-) Quantity ve TotalPRice ı yapmaya başlayacam.
//! 8-) item.quantity + action.payload.quantity; ifadesi, sepete eklenmek istenen ürünün mevcut miktarı ile yeni eklenen miktarın toplamını verir. Örneğin, sepetinizde 2 adet elma varsa ve 3 adet daha eklerseniz, item.quantity 2 olur ve action.payload.quantity 3 olur. Bu durumda, item.quantity + action.payload.quantity; ifadesinin değeri 2 + 3 = 5 olur. Yani sepetinizdeki elma sayısı 5 olur.
//! 9-)action.payload, sepete eklenmek istenen ürünün bilgilerini içeren bir objedir. Bu objenin özellikleri şunlardır:
//? id: Ürünün benzersiz kimliği
//? name: Ürünün adı
//? description: Ürünün açıklaması
//? price: Ürünün birim fiyatı
//? quantity: Ürünün sepete eklenen miktarı
//? totalPrice: Ürünün toplam fiyatı (birim fiyat x miktar)
//? Bu özellikler, ürünü sepete eklerken veya sepetten çıkarırken kullanılabilir.
//! 8-) filter ile tek bir card ı silmeyi yapacam
//! 9-) [] ile tek tüm  cardları silmeyi yapacam

import { createSlice } from "@reduxjs/toolkit";

//! 4 - Verileri çağırdığım fonksiyon
const getItemLocalStorage = () => {
  let cardGet = localStorage.getItem("cardSlice");
  if (cardGet) {
    return JSON.parse(cardGet);
  } else {
    return [];
  }
};
//! 4 - Verileri kaydettiğim(gönderdiğim) fonksiyon
const setItemLocalStorage = (data) => {
  localStorage.setItem("cardSlice", JSON.stringify(data));
};

const initialState = {
  cards: getItemLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
};

const cardSlice = createSlice({
  name: "cardSlice",
  initialState,

});
