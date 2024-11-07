import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaClipboardList, FaThList } from "react-icons/fa";

const ProductItemdouble = ({ title, price, description, img }) => {
  const [count, setCount] = useState(1);
  return (
    <>
      <div className="">
        <div className="p-1">
          <div className="relative cursor-pointer img-box">
            <Image src={img} alt="" width={1300} height={170} />
            <div className="absolute img-view hidden w-full bottom-5 bg-white border border-blue-550 text-blue-550 p-3 text-center">
              <p> Quick view </p>
            </div>
          </div>

          <div className="text-blue-450 py-2">
            <div className="flex justify-between text-lg font-bold items-center">
              <h2> {title} </h2>
              <FaThList size={18} />
            </div>

            <h5 className="text-black py-1 text-lg font-bold">{price} </h5>
            <Link className=" hover:underline" href="#">
              <p> {description} </p>
            </Link>
          </div>

          <div className="flex">
            <div className="flex border-y border-gray-400">
              <button
                onClick={() => setCount(count - 1)}
                disabled={count === 1}
                style={{
                  cursor: `${count === 1 ? "not-allowed" : ""}`,
                }}
                className="bg-gray-100 px-3 text-3xl border border-gray-500 text-blue-550"
              >
                -
              </button>
              <input
                type="number"
                value={count}
                className="text-center w-full pl-2 text-sm"
              />
              <button
                onClick={() => setCount(count + 1)}
                // disabled={count === 1}
                className="bg-gray-100 px-3 text-xl border border-gray-500 text-blue-550"
              >
                +
              </button>
            </div>
            <button className="bg-blue-650 text-white w-full p-1 ml-2">
              {" "}
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItemdouble;
