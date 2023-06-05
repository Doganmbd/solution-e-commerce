import React from "react";

const ProductCard = ({ product }) => {
  const { image, price, title } = product;
  return (
    <div className="w-[400px] p-2 mx-5 mb-5 border rounded-md relative cursor-pointer ">
      <div className="text-lg font-bold absolute rounded-xl top-0 right-0 bg-black text-white p-2 m-1">
        {price} <span>TL</span>{" "}
      </div>
      <img
        className="w-[200px] h-[200px] object-cover m-auto"
        src={image}
        alt=""
      />
      <div className="text-xl font-bold text-center px-3 m-3">{title} </div>
    </div>
  );
};

export default ProductCard;
