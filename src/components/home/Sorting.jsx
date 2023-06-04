import React from "react";

const Sorting = () => {
  return (
    <div className="bg-gray-200 my-8 p-8 flex items-center justify-end">
      <select
        className="bg-gray-100 py-3 px-5 rounded-full text-xl cursor-pointer"
        name=""
        id=""
      >
        <option disabled value="">
          Choose
        </option>
        <option value="inc">Increase</option>
        <option value="dec">Decrease</option>
      </select>
    </div>
  );
};

export default Sorting;
