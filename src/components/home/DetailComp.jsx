import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import { addToCard } from "../../redux/CardSlice";

const DetailComp = ({ productDetail }) => {
  const { description, image, price, title, id } = productDetail;
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();

  const handleDec = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const handleInc = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1);
  };

 

  const handleClick = () => {
    dispatch(
      addToCard({
        id: id,
        price: price,
        title: title,
        quantity: quantity,
        image: image,
      })
    );
  };

  return (
    <div className="flex gap-10 my-10">
      <img className="w-[700px] h-[500px] " src={image} alt="img" />
      <div>
        <div className="text-5xl">{title}</div>
        <div className="my-2 text-2xl">{description}</div>
        <div className="my-2 text-xl text-red-700">
          Rating : {productDetail?.rating?.rate}
        </div>
        <div className="my-2 text-xl text-red-700">
          Count : {productDetail?.rating?.count}
        </div>
        <div className="my-2 text-5xl font-bold">
          {price} <span className="text-lg">TL</span>
        </div>

        <div className="flex m-10">
          <div
            className="text-5xl w-[50px] h-[50px] bg-red-600 flex  justify-center items-center text-white rounded-xl  cursor-pointer"
            onClick={handleDec}
          >
            -
          </div>
          <input
            className="text-center text-4xl font-bold w-[80px] h-[50px] "
            type="text"
            value={quantity}
          />
          <div
            className="text-5xl w-[50px] h-[50px] bg-blue-600 flex  justify-center items-center text-white rounded-xl  cursor-pointer"
            onClick={handleInc}
          >
            +
          </div>
        </div>
        <div
          onClick={handleClick}
          className="border m-8 w-[200px] bg-yellow-300 text-2xl rounded-lg cursor-pointer h-16 flex items-center justify-center text-black "
        >
          Add to List
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
