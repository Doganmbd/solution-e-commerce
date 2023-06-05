import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProducts } from "../redux/ProductSlice";
import Loading from "../components/Loading";
import DetailComp from "../components/home/DetailComp";

const Detail = () => {
  const { id } = useParams(); //! Useparams ile id yi Route dan çektim.
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getDetailProducts(id));
  }, [dispatch, id]);

  console.log(productDetail);

  

  return (
    <div >
      {productDetailStatus === "LOADING" ? <Loading/> : <DetailComp productDetail ={productDetail} />  }
    </div>
  );
};

export default Detail;
