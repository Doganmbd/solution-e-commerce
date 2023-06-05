import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProducts } from "../redux/ProductSlice";

const Detail = () => {
  const { id } = useParams(); //! Useparams ile id yi Route dan çektim.
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(
    (state) => state.products
  );

  useEffect(
    () => {
      dispatch(getDetailProducts(id));
    },
    [dispatch, id]
  );

  console.log(productDetail);

  return <div>Detail</div>;
};

export default Detail;
