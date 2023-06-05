import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { resultCardTotal } from "../../../redux/CardSlice";

const NavbarRight = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.cards);

  console.log(cards);

  useEffect(() => {
    dispatch(resultCardTotal());
  }, [dispatch]);

  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center p-3 rounded-full bg-gray-200">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-200 outline-none"
        />
        <BiSearch size={25} />
      </div>
      <AiOutlineHeart size={25} />
      <div className="relative">
        <div className="absolute -top-4 -right-3 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center ">
          {cards?.length}
        </div>
        <SlBasket size={25} />
      </div>
    </div>
  );
};

export default NavbarRight;
