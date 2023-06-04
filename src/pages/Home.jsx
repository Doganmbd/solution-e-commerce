import React from "react";
import SliderComponent from "../components/home/SliderComponent";
import Sorting from "../components/home/Sorting";
import Category from "../components/home/Category";
import Products from "../components/home/Products";


const Home = () => {
  return (
    <div>
      <SliderComponent/>
      <Sorting/>
      <div className="flex">
        <Category/>
        <Products/>
      </div>

    </div>
  );
};

export default Home;
