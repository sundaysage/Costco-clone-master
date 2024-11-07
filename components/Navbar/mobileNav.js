import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  FaBars,
  FaMap,
  FaMapMarkerAlt,
  FaSearch,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";

const SmallNavbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [over, setOver] = useState(false);
  const [textColor, setTextColor] = useState("rgb(0, 96, 169)");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <nav
      style={{ backgroundColor: `#eee` }}
      className="navbar ease-in duration-300 p-3"
    >
      <div className="fixed-container container-fluid">
        <div className="text-xs justify-between  flex lg:hidden">
          <Link href="/" className="pr-2">
            <Image
              src="/assets/Costco_Logo-1.png"
              alt=""
              width={100}
              height={70}
            />
          </Link>

          <div className="flex">
            <ul className="flex text-blue-550 font-xs">
              <li className="p-1 hover:underline text-center">
                <FaMapMarkerAlt className="mx-auto" size={18} />
                <Link href="/">Warehouses</Link>
              </li>
              <li className="p-1 hover:underline border-x border-gray-500">
                <FaUser className="mx-auto" size={18} />
                <Link href="#">Account </Link>
              </li>
              <li className="p-1 hover:underline">
                <FaShoppingCart className="pr-1" size={18} />
                <Link className="flex items-center" href="#">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="m-auto flex items-center my-2">
        <div className="flex text-sm lg:hidden bg-blue-650">
            <ul className=" flex lg:hiddentext-white justify-between md:flex-wrap">
              <div className="dropdown">
                <li className="p-3 flex items-center text-white">
                  <AiOutlineMenu size={20} />
                  <Link href="#">Shop</Link>
                </li>
                <div className="dropdown-content px-2">
                  <div className="flex dropdown-list">
                    <div className="dropdown-listone bg-white">
                      <Link
                        onMouseOver={() => setOver(true)}
                        onMouseOut={() => setOver(false)}
                        href="#"
                      >
                        Appliances
                      </Link>
                      <Link href="#">Baby </Link>
                      <Link href="#">Beauty</Link>
                      <Link href="#">Clothing, Luggage & Handbags</Link>
                      <Link href="#">Computers</Link>
                      <Link href="#">Electronics</Link>
                      <Link href="#">Floral & Gift Baskets</Link>
                      <Link href="#">Furniture</Link>
                      <Link href="#">Gift Cards & Tickets</Link>
                      <Link href="#">Gourmet Foods</Link>
                      <Link href="#">Grocery, Household Essentials & Pet</Link>
                    </div>
                    {over && (
                      <div className="dropdown-listtwo bg-white border-gray-400 border-l">
                        <Link href="#">Clothing, Luggage & Handbags</Link>
                        <Link href="#">Computers</Link>
                        <Link href="#">Electronics</Link>
                        <Link href="#">Floral & Gift Baskets</Link>
                        <Link href="#">Furniture</Link>
                        <Link href="#">Gift Cards & Tickets</Link>
                        <Link href="#">Gourmet Foods</Link>
                        <Link href="#">Appliances</Link>
                        <Link href="#">Baby </Link>
                        <Link href="#">Beauty</Link>
                        <Link href="#">
                          Grocery, Household Essentials & Pet
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* <li className="p-3 dropbtn ">
                <Link href="#"> Grocery </Link>
              </li>
              <li className="p-3 dropbtn ">
                <Link href="#"> Same-Day </Link>
              </li>
              <li className="p-3 dropbtn">
                <Link href="#"> Business Delivery</Link>
              </li>
              <li className="p-3 ">
                <Link href="#"> Optical</Link>
              </li>
              <li className="p-3 ">
                <Link href="#"> Pharmacy </Link>
              </li>
              <li className="p-3 ">
                <Link href="#">Services </Link>
              </li>
              <li className="p-3 ">
                <Link href="#"> Photo</Link>
              </li>
              <li className="p-3 ">
                <Link href="#"> Travel</Link>
              </li>
              <li className="p-3 ">
                <Link href="#"> Membership</Link>
              </li>
              <li className="p-3 ">
                <Link href="#"> Locations </Link>
              </li> */}
            </ul>
          </div>
          <form
            action=""
            className="searchForm flex p-1 border-blue-500 border bg-white items-center ml-3 w-full"
          >
            <input
              type="search"
              className="p-1 w-full search-input"
              name=""
              id=""
              placeholder="search"
            />
            <FaSearch
              size={35}
              color={"#0060a9"}
              style={{ transform: "rotate(95deg)" }}
            />
          </form>

          
        </div>
      </div>
    </nav>
  );
};

export default SmallNavbar;
