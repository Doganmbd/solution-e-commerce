//! Burada sadece fullfilled işlemi değil pending ve rejected olayları olduğu için mutlaka loading olayını mutlaka yapmalıyım.

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/ProductSlice";

const Products = () => {
  //! burada dispatch ile verileri alıp UseEffect ile güncellenip çağırdıktan sonra useSelector ile gösterecem.

  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products); //! products, productsStatus ProductSlice içinden  state.products ise store dan geliyor.

  console.log(products, productsStatus);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return <div>Products</div>;
};

export default Products;
