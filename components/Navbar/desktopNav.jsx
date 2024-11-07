import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaBars, FaSearch, FaShoppingCart } from "react-icons/fa";
import SmallNavbar from "./mobileNav";

const Navbar = () => {
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
      className="navbar ease-in duration-300"
    >
      <div className="fixed-container container-fluid">
        <div className="flex text-sm justify-end hidden-xs">
          <ul className="hidden lg:flex text-blue-550 md:flex-wrap">
            <li className="p-3 hover:underline">
              <Link href="/">While Supplies Last</Link>
            </li>
            <li className="p-3 hover:underline ">
              <Link href="#"> Treasure Hunt</Link>
            </li>
            <li className="p-3 hover:underline">
              <Link href="#"> What &apos;s New </Link>
            </li>
            <li className="p-3 hover:underline">
              <Link href="#"> Same-Day</Link>
            </li>
            <li className="p-3 hover:underline">
              <Link href="#"> Online-Only </Link>
            </li>
            <li className="p-3 hover:underline">
              <Link href="#"> Warehouse Savings </Link>
            </li>
            <li className="p-3 hover:underline">
              <Link href="#">Get Email Offers </Link>
            </li>
            <li className="p-3 hover:underline">
              <Link href="#"> Customer Service</Link>
            </li>
            <li className="p-3 hover:underline">
              <Link href="#"> US</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Button */}
        <div className="mobile">
            <SmallNavbar />
          </div>

        <div className=" hidden m-auto lg:flex justify-between items-center p-3  ">
          <Link href="/">
            <Image
              src="/assets/Costco_Logo-1.png"
              alt=""
              width={170}
              height={70}
            />
          </Link>

          <form
            action=""
            className="searchForm flex w-6/12 p-1 border-blue-500 border bg-white items-center mx-4"
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
          <ul className="hidden sm:flex text-blue-550">
            <li className="p-3 hover:underline">
              <Link href="/">Sign In / Register</Link>
            </li>
            <li className="p-3 hover:underline">
              <Link href="#">Orders & Returns </Link>
            </li>
            <li className="p-3 hover:underline">
              <Link className="flex items-center" href="#">
                <FaShoppingCart className="pr-1" />
                Cart
              </Link>
            </li>
          </ul>

          
        </div>

        <div className="flex text-sm hidden-xs bg-blue-650">
          <ul className="hidden lg:flex text-white justify-between md:flex-wrap">
            <div className="dropdown">
              <li className="p-3 flex items-center">
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
                      <Link href="#">Grocery, Household Essentials & Pet</Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <li className="p-3 dropbtn ">
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
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
