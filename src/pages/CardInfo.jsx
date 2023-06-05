import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resultCardTotal } from "../redux/CardSlice";
import CardComp from "../components/card/CardComp";

const CardInfo = () => {
  const dispatch = useDispatch();
  const { cards, itemCount, totalAmount } = useSelector((state) => state.cards);

  console.log(cards, itemCount, totalAmount);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(resultCardTotal());
  }, [dispatch]);

  return (
    <div>
      {cards.length > 0 ? (
        <div>
          {cards.map((card, index) => (
            <CardComp key={index} card={card} />
          ))}
          <div className="flex items-center justify-end text-2xl">TOTAL AMOUNT : <span className="font-bold text-3xl ml-2">{totalAmount}  TL</span> </div>
        </div>
      ) : (
        <div>Your cart is empty. no data available.</div>
      )}
    </div>
  );
};

export default CardInfo;
