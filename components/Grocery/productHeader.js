import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaClipboardList, FaThList, FaTimes } from "react-icons/fa";

const ProductHeader = ({ title, price, description, img }) => {
  const [count, setCount] = useState(1);
  const [testArray, setTestArray] = useState([
    { name: "Cold & Frozen" },
    {
      name: "Delivery",
    },
    {
      name: "Show Out of Stock Items",
    },
  ]);

  const removeFields = (idx) => {
    const newValues = [...testArray];
    newValues.splice(idx, 1);
    setTestArray(newValues);
  };
  return (
    <>
      <div className="w-full p-3 my-3">
        <h1 className="text-3xl mb-5"> Poultry</h1>
        <div className="flex justify-between w-100 flex-wrap gap-2 ">
          <div className="flex items-center ">
            <label htmlFor="" style={{
              width: 100
            }}> Sort by: </label>

            <select name="" id="" className="border p-2 ml-3 ">
              <option value="Best Match"> Best Match </option>
              <option value="Price"> Price (High - Low) </option>
              <option value="Newest"> Newest </option>
              <option value="Most Viewed"> Most Viewed </option>
            </select>
          </div>

          <div>
            <p>Showing 1-24 of 30</p>
          </div>
        </div>

        <div className="flex py-5 flex-wrap gap-3">
          {testArray.map((item, idx) => (
            <>
              <div key={idx} className="flex border p-2 mr-4 text-sm text-blue-450 items-center">
                {item.name}
                <FaTimes onClick={() => removeFields(idx)} size={10} className="ml-3"/>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductHeader;
