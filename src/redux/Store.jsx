import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";
import ProductSlice from "./ProductSlice";

export const store = configureStore({
  ///! bir Redux store’u oluştururken kullanılan bir yapılandırma objesinin bir parçasıdır. Bu obje, store’un state’ini nasıl değiştirecek olan reducer fonksiyonlarını belirtir.Reducer fonksiyonu, store’un state’ini değiştiren fonksiyondur. Reducer fonksiyonu, mevcut state’i ve dispatch edilen action’u alarak yeni state’i hesaplar ve döndürür.
  reducer: {
    categories: CategorySlice,
    products: ProductSlice,
  },
});

/* // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch */
