//! Burada sadece fullfilled işlemi değil pending ve rejected olayları olduğu için mutlaka loading olayını mutlaka yapmalıyım.

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/ProductSlice";
import Loading from "../Loading";
import ProductCard from "./ProductCard";

const Products = () => {
  //! burada dispatch ile verileri alıp UseEffect ile güncellenip çağırdıktan sonra useSelector ile gösterecem.

  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products); //! products, productsStatus ProductSlice içinden  state.products ise store dan geliyor.

  console.log(products, productsStatus);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
  <div>
    {
      productsStatus === "LOADING" ? <Loading/> :
      <div className="flex flex-wrap">
       { products?.map((product,index)=> {
        return(
            <ProductCard key={index}  product={product} /> 
          )
        
        })}
      </div>

      
    }
  </div>
  )
};

export default Products;
