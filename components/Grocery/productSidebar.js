import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaMinus } from "react-icons/fa";

const ProductSidebar = () => {
  const [checkTwo, setCheckTwo] = useState(false);

  return (
    <div className="">
      <div className="flex border-b border-gray-100 py-3 items-center justify-between">
        <h2 className="text-2xl"> Filter Results </h2>
        <Link href={"#"} className="text-blue-450 hover:underline">
          {" "}
          Clear All
        </Link>
      </div>
      <div className="tab w-full overflow-hidden">
        <input
          className="absolute hidden opacity-0"
          id="tab-multi-two"
          type="checkbox"
          name="tabs"
          checked={checkTwo}
          onClick={() => setCheckTwo(!checkTwo)}
        />
        <div className="label relative border-t border-gray-400 ">
          <label
            className="block py-3 text-white uppercase font-medium tracking-wide cursor-pointer"
            htmlFor="tab-multi-two"
          >
            <Link
              href="#"
              className="inline-block   text-gray-500 hover:underline no-underline"
            >
              Category
            </Link>
          </label>
          <div className="w-full absolute inset-0 flex flex-end justify-end items-center pointer-events-none">
            <FaMinus />
          </div>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden ">
        <div className="flex py-3">
          <Link
            href="#"
            className="w-full text-blue-550 flex text-gray-500 hover:underline no-underline"
          >
            Chicken
          </Link>
          <span className=""> (25)</span>
        </div>
        <div className="flex py-3">
          <Link
            href="#"
            className="w-full text-blue-550 flex text-gray-500 hover:underline no-underline"
          >
            Duck
          </Link>
          <span className=""> (8)</span>
        </div>
        <div className="flex py-3">
          <Link
            href="#"
            className="w-full text-blue-550 flex text-gray-500 hover:underline no-underline"
          >
            Turkey
          </Link>
          <span className=""> (10)</span>
        </div>

        
      </div>
    </div>
  );
};

export default ProductSidebar;
