import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";
import ProductSlice from "./ProductSlice";

export const store = configureStore({
  ///! bir Redux store’u oluştururken kullanılan bir yapılandırma objesinin bir parçasıdır. Bu obje, store’un state’ini nasıl değiştirecek olan reducer fonksiyonlarını belirtir.Reducer fonksiyonu, store’un state’ini değiştiren fonksiyondur. Reducer fonksiyonu, mevcut state’i ve dispatch edilen action’u alarak yeni state’i hesaplar ve döndürür.
  reducer: {
    categories: CategorySlice,
    products: ProductSlice, //! Buraya import ettikten sonra yapmam gereken yine dispatch ile çağırmak, UseSelector ile çağırdıklarımı göstermek ve UseState içerisinde gelen değerleri ekrana bastırmak olacak 
  },
});


