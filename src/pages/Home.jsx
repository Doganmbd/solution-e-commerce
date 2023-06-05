import React, { useState } from "react";
import SliderComponent from "../components/home/SliderComponent";
import Sorting from "../components/home/Sorting";
import Category from "../components/home/Category";
import Products from "../components/home/Products";

const Home = () => {
  const [category, setCategory] = useState("");
  const [sortProcess, setSortProcess] = useState("inc");

  return (
    <div>
      <SliderComponent />
      <Sorting setSortProcess={setSortProcess} />
      <div className="flex">
        <Category setCategory={setCategory} />
        <Products category={category} sortProcess={sortProcess}  />
      </div>
    </div>
  );
};

export default Home;
