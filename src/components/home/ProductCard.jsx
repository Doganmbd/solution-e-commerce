import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { image, price, title ,id } = product;

  const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`products/${id}`)} className="w-[400px] p-2 mx-5 mb-5 border rounded-md relative cursor-pointer ">
      <div className="text-lg font-bold absolute rounded-xl top-0 right-0 bg-black text-white p-2 m-1">
        {price} <span>TL</span>{" "}
      </div>
      <img
        className="w-[200px] h-[200px] object-cover m-auto"
        src={image}
        alt="img"
      />
      <div className="text-xl font-bold text-center px-3 m-3">{title} </div>
    </div>
  );
};

export default ProductCard;
