import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/CategorySlice";

const Category = ({setCategory}) => {

  //! dispatch Redux dispatch, store’daki state’i değiştirmenin tek yoludur. Dispatch, store’un reducer fonksiyonuna bir action objesi gönderir. Reducer fonksiyonu, mevcut state’i ve action’u alarak yeni state’i hesaplar ve döndürür. Böylece store’un state’i güncellenir ve abone olan bileşenler değişiklikten haberdar olur. dispatch fonksiyonuna erişmek için iki yöntem kullanabilirsiniz: useDispatch hook’u veya connect fonksiyonu.
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  console.log(categories,"categories");


  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
  <div className="w-1/6 bg-gray-100 p-4 max-h-screen">
    <div className="pb-2 px-2 text-xl font-bold border-b-2 ">
      KATEGORİ
    </div>
    {categories?.map((category,index)=>(
      <div onClick={()=>setCategory(category)} className="text-lg  cursor-pointer hover:bg-gray-200 p-2" key={index}>{category}</div>
      ))}
    
  </div>);
};

export default Category;
