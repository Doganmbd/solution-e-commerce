import React from "react";
import { useDispatch } from "react-redux";
import { romoveToCard } from "../../redux/CardSlice";

const CardComp = ({ card }) => {
  const { image, title, price, quantity, id } = card;
  const dispatch = useDispatch();
  return (
    <div className="my-10 flex items-center justify-between">
      <img className="w-[150px] h-[150px] object-cover" src={image} alt="i" />
      <div className="w-[500px] ">
        <div className="text-xl">{title} </div>
        <div>{card?.description} </div>
      </div>
      <div className="text-2xl">
        {price} <span>TL</span>{" "}
      </div>
      <div className="bg-gray-700 rounded-full text-white p-2">{quantity} </div>
      <div
        onClick={() => dispatch(romoveToCard(id))}
        className="bg-red-500 text-white w-[200px]  text-2xl cursor-pointer rounded-md h-16 flex items-center justify-center "
      >
        {" "}
        DELETE{" "}
      </div>
    </div>
  );
};

export default CardComp;
