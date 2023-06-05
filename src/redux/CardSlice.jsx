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
  //! API üzerinden işlem yapmayacağım için reducers kullanacam.
  reducers: {
    addToCard: (state, action) => {
      const isItemCard = state.cards.find(
        (item) => item.id === action.payload.id
      ); //! dışardan gelen id değeriyle içerdeki id değerinin eşit olup olmadığını kontrol et yani aynı ürün varsa onları ekle farklı ürün varsa ayrı yazmış olacam
      if (isItemCard) {
        const tempCard = state.cards.map((item) => {
          if (item.id === action.payload.id) {
            let tempQuantity = item.quantity + action.payload.quantity;
            let tempTotalPrice = tempQuantity * item.price;
            return {
              ...item,
              quantity: tempQuantity,
              totalPrice: tempTotalPrice,
            };
          } else {
            return item;
          }
        });
        state.cards = tempCard;
        setItemLocalStorage(state.cards);
      } else {
        state.cards.push(action.payload);
        setItemLocalStorage(state.cards);
      }

      //! Öncelikle state ve action parametrelerini alan bir addToCard fonksiyonu tanımlıyorsunuz. Bu fonksiyon, sepete eklenmek istenen ürünün id’sine göre state içindeki cards dizisinde bulunup bulunmadığını kontrol ediyor1.
      //! Eğer ürün sepete daha önce eklenmişse, isItemCard değişkeni true olur ve if bloğu çalışır. Bu blokta, cards dizisindeki her bir eleman için bir fonksiyon çalıştırarak yeni bir dizi oluşturuyorsunuz. Bu fonksiyon, eğer elemanın id’si sepete eklenmek istenen ürünün id’siyle aynıysa, o elemanın miktarını ve toplam fiyatını güncelliyor1. Eğer farklıysa, o elemanı olduğu gibi bırakıyor1. Sonra bu yeni diziyi state.cards’a atıyorsunuz ve setItemLocalStorage fonksiyonuyla sepet bilgisini yerel depolamaya kaydediyorsunuz1.
      //! Eğer ürün sepete daha önce eklenmemişse, isItemCard değişkeni false olur ve else bloğu çalışır. Bu blokta, sepete eklenmek istenen ürünü doğrudan state.cards dizisine ekliyorsunuz ve yine setItemLocalStorage fonksiyonuyla sepet bilgisini yerel depolamaya kaydediyorsunuz1.
    },
    romoveToCard: (state, action) => {
      const tempCard = state.cards.filter((item) => item.id !== action.payload);
      state.cards = tempCard;
      setItemLocalStorage(state.cards);
    },
    clearCard: (state) => {
      state.cards = [];
      setItemLocalStorage(state.cards);
    },
    resultCardTotal: (state) => {
      state.totalAmount = state.cards.reduce((cardTotal, cardItem) => {
        return (cardTotal += cardItem);
      }, 0);
      state.itemCount = state.cards.length;
      //! İlk parametre olarak bir fonksiyon alıyor. Bu fonksiyon, cardTotal ve cardItem olmak üzere iki parametre alıyor. cardTotal, dizinin elemanlarının toplamını tutan bir değişken. cardItem ise dizinin her bir elemanı. Bu fonksiyon, cardTotal’a cardItem’i ekleyerek yeni toplamı döndürüyor.
      //! İkinci parametre olarak bir başlangıç değeri alıyor. Bu değer, cardTotal’ın ilk değerini belirliyor. Bu örnekte 0 olarak verilmiş.
      //! Reduce fonksiyonu, dizinin ilk iki elemanını alarak fonksiyona gönderiyor ve sonucu cardTotal’a atıyor. Sonra dizinin üçüncü elemanını alarak fonksiyona gönderiyor ve sonucu yine cardTotal’a atıyor. Böylece dizinin son elemanına kadar devam ediyor ve son toplamı döndürüyor.
      //! Örneğin, state.cards dizisi [1, 2, 3] olsun. Reduce fonksiyonu şöyle çalışır:

      //! İlk olarak cardTotal = 0 ve cardItem = 1 olur. Fonksiyon, cardTotal + cardItem = 0 + 1 = 1 döndürür ve cardTotal = 1 olur.
      //! Sonra cardTotal = 1 ve cardItem = 2 olur. Fonksiyon, cardTotal + cardItem = 1 + 2 = 3 döndürür ve cardTotal = 3 olur.
      //! Son olarak cardTotal = 3 ve cardItem = 3 olur. Fonksiyon, cardTotal + cardItem = 3 + 3 = 6 döndürür ve cardTotal = 6 olur.
      //! Dizinin elemanları bittiği için reduce fonksiyonu sonucu döndürür. Bu durumda sonuç 6 olur.
    },
  },
});
